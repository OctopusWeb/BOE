$at.AreaController = {};
$at.AreaController.provinceCenter=[];
$at.AreaController.provinceCitycode=[];
$at.AreaController.provinceCityname=[];
$at.AreaController.cityCityCenter=[];
$at.AreaController.cityCitycode=[];
$at.AreaController.cityCityname=[];
$at.AreaController.allArear=[];
$at.AreaController.allIcon=[];

$at.AreaController.init = function(viewer){
	$at.AreaController.LoadJson("data/proArea.json",proArea);
	$at.AreaController.LoadJson("data/offlinelist.json",iconInit);
	$at.AreaController.area = viewer.entities.add(new Cesium.Entity());
	handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
	handler.setInputAction(function (movement) {
    	ClickEvent(movement,viewer,
    		function(){
	    		$at.AreaController.clear();
	    		$at.AnimateController.level1.hide()
	    	},
	    	function(){
	    		$at.AnimateController.level3.show();
	    	}
    	);
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    $at.AreaController.show();
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
			var color = staticColors[parseInt(Math.random()*5)+5]
			var areaController = new AreaDraw("p"+$at.AreaController.provinceCitycode[m],parseArea[m],scene,color);
		}
	}
	function iconInit(data){
		var parseIcon = new ParseIcon(data,"i");
		for (var m=0;m<3;m++) {
			IconDraw("i"+parseIcon[m][2],parseIcon[m])
		}
	}
}
$at.AreaController.clear = function(){
	for (var i=0;i<$at.AreaController.allArear.length;i++) {
		$at.AreaController.allArear[i].show = false;
	}
	for (var i=0;i<$at.AreaController.allIcon.length;i++) {
		$at.AreaController.allIcon[i].show = true;
	}
}
$at.AreaController.show = function(){
	for (var i=0;i<$at.AreaController.allArear.length;i++) {
		$at.AreaController.allArear[i].show = true;
	}
	for (var i=0;i<$at.AreaController.allIcon.length;i++) {
		$at.AreaController.allIcon[i].show = false;
	}
}
function ClickEvent(movement,viewer,onComplete,onComplete2){
	var pickedObject = viewer.scene.drillPick(movement.position);
	if (pickedObject.length > 0) {
		for (var i = 0; i < pickedObject.length; i++) {
			var pickID = pickedObject[i].id;
			advanceCity(pickID,viewer,onComplete,onComplete2);
		}
	}
}
function advanceCity(pickID,viewer,onComplete,onComplete2){
	if(typeof(pickID) == "object") {pickID = pickID.id}
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
	else if(type == "i"){
		onComplete2()
	}
}
$at.AreaController.LoadJson = function(url,onComplete){
	$.getJSON(url,function(data){
		onComplete(data)
	})
}
function ParseIcon(datas,dataType){
	var data = datas.info;
	return data
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
function IconDraw(IconType,parse){
	var index = parse[1].indexOf(",");
	var x = parse[1].substr(0,index);
	var y = parse[1].substr(index+1,index.length);
	viewer = $at.CesiumController.viewer;
	var billboards =  viewer.entities.add({
	    position : Cesium.Cartesian3.fromDegrees(parseFloat(x),parseFloat(y)),
	    id : IconType,
	    billboard : {
	        image : "img/webwxgetmsgimg.png",
	        verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
	        scale : 1,
        	scaleByDistance : new Cesium.NearFarScalar(1.5e2, 0.3, 0.2, 0.1)
	    }
	});
	billboards.show = false;
	$at.AreaController.allIcon.push(billboards);
}
function AreaDraw(areaType,parse,scene,colors){
	var color = Cesium.Color.fromCssColorString(colors).withAlpha(0.1);
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
    $at.AreaController.allArear.push(polygon);
}
Array.prototype.indexOf = function(el){
	for (var i=0,n=this.length; i<n; i++){
		if (this[i] === el){
			return i;
		}
	}
	return -1;
}
