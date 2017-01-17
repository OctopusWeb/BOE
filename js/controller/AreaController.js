$at.AreaController = {};
$at.AreaController.provinceCenter=[];
$at.AreaController.provinceCitycode=[];
$at.AreaController.provinceCityname=[];
$at.AreaController.cityCityCenter=[];
$at.AreaController.cityCitycode=[];
$at.AreaController.cityCityname=[];
$at.AreaController.allArear=[];

$at.AreaController.init = function(viewer){
	$at.AreaController.LoadJson("data/proArea.json",proArea);
	handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
	handler.setInputAction(function (movement) {
    	ClickEvent(movement,viewer,$at.AnimateController.level1.hide);
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
	var staticColors = [
		"#c93e3e",
		"#c55a4c",
		"#bf721c",
		"#bfa536",
		"#b7ab64",
		"#2ea19d",
		"#1e87b5",
		"#24669f",
		"#265497",
		"#064c9f",
		"#b5b5b5"
	];
	var scene = viewer.scene;
	function proArea(data){
		var parseArea = new ParseArea(data,"p");
		for (var m=0;m<parseArea.length;m++) {
			var color = staticColors[parseInt(Math.random()*10)]
			var areaController = new AreaDraw("p"+$at.AreaController.provinceCitycode[m],parseArea[m],scene,color);
		}
	}
}
$at.AreaController.clear = function(type){
	
}
$at.AreaController.show = function(type){
	
}
function ClickEvent(movement,viewer,onComplete){
	var pickedObject = viewer.scene.drillPick(movement.position);
	if (pickedObject.length > 0) {
		for (var i = 0; i < pickedObject.length; i++) {
			var pickID = pickedObject[i].id;
			advanceCity(pickID,viewer,onComplete);
		}
	}
}
function advanceCity(pickID,viewer,onComplete){
	var type = pickID.substr(0,1);
	var cityCode = pickID.substr(1,6);
	if(type == "p"){
		var index = $at.AreaController.provinceCitycode.indexOf(cityCode);
		var center = $at.AreaController.provinceCenter[index];
		var name = $at.AreaController.provinceCityname[index];
		var id = "c"+cityCode;
		
		viewer.camera.flyTo({
			destination : Cesium.Cartesian3.fromDegrees(center[0]+1, center[1], 800000.0),

		   complete:onComplete
		});
		
	}
//	else if(type == "c"){
//		var index = $at.AreaController.cityCitycode.indexOf(cityCode);
//		var center = $at.AreaController.cityCityCenter[index];
//		var name = $at.AreaController.cityCityname[index];
//		var id = "c"+cityCode;
//	}
}
$at.AreaController.LoadJson = function(url,onComplete){
	$.getJSON(url,function(data){
		onComplete(data)
	})
}
function ParseArea(datas,dataType){
	var areaArray = [];
	this.changeArray = function(BigArray){
		if(BigArray.length != 1){
			var smallArray=[];
			for (var i=0;i<BigArray.length;i++) {
				smallArray = smallArray.concat(BigArray[i])
			}
			BigArray=[];
			BigArray.push(smallArray)	
		}
		if(typeof(BigArray[0][0][0]) == "number"){
			BigArray=BigArray
		}else{
			BigArray=BigArray[0];
		}
		return BigArray
	}
	for(var m=0;m<datas.features.length;m++){
		var data = datas.features[m];
		if(dataType == "p"){
			$at.AreaController.provinceCenter.push([data.properties.X_COORD,data.properties.Y_COORD]);
			$at.AreaController.provinceCitycode.push(data.properties.AD_CODE);
			$at.AreaController.provinceCityname.push(data.properties.NAME);			
		}else{
			$at.AreaController.cityCityCenter.push([data.properties.X_COORD,data.properties.Y_COORD]);
			$at.AreaController.cityCitycode.push(data.properties.AD_CODE);
			$at.AreaController.cityCityname.push(data.properties.NAME)
		}
		var degreesArray = this.changeArray(data.geometry.coordinates);
        areaArray.push(degreesArray);
	}
	return areaArray;
}
function AreaDraw(areaType,parse,scene,colors){
	var color = Cesium.Color.fromCssColorString(colors).withAlpha(0.5);
	var geometryInstances = [];
	for(var n=0;n<parse.length;n++){
		var degreesArray=[];
		var boundaries = parse[n];
        for (var i = 0; i < boundaries.length; i++) {
            degreesArray.push(boundaries[i][0], boundaries[i][1]);
        }
        var geometryInstance = new Cesium.GeometryInstance({
            geometry: new Cesium.PolygonGeometry({
                polygonHierarchy: new Cesium.PolygonHierarchy(
                    Cesium.Cartesian3.fromDegreesArray(degreesArray)
                ),
                vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT,
                extrudedHeight: 0,
                height: 0,
            }),
            attributes: {
                color: Cesium.ColorGeometryInstanceAttribute.fromColor(color)
            },
            id:areaType
        });
        geometryInstances.push(geometryInstance);
	}
    var polygon = scene.primitives.add(new Cesium.Primitive({
        releaseGeometryInstances: false,
        geometryInstances: geometryInstances,
        appearance: new Cesium.PerInstanceColorAppearance({}),
    }));
}
Array.prototype.indexOf = function(el){
	for (var i=0,n=this.length; i<n; i++){
		if (this[i] === el){
			return i;
		}
	}
	return -1;
}
