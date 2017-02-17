$at.CesiumController = {};
$at.CesiumController.init = function(){
	var globe = new Cesium.Globe();
	var option = {
		globe : globe,
		baseLayerPicker:false,
		navigationHelpButton:false,
		homeButton:false,
		fullscreenButton:false,
		geocoder:false,
		infoBox:false,
		sceneModePicker:false,
		sceneMode:Cesium.SceneMode.COLUMBUS_VIEW
	};
	
	option.imageryProvider = Cesium.createTileMapServiceImageryProvider({
        url: Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII/'),
        maximumLevel: 5,
        credit: 'Imagery courtesy Natural Earth'
    });
   
	
//	option.imageryProvider = new Cesium.WebMapTileServiceImageryProvider({
//      url : 'http://192.168.1.254:8080/png?x={TileCol}&y={TileRow}&z={TileMatrix}',
//      layer : 'USGSShadedReliefOnly',
//      style : 'default',
//      format : 'image/jpeg',
//      tileMatrixSetID : 'default028mm',
//      maximumLevel: 17,
//      credit : new Cesium.Credit('U. S. Geological Survey')
//  });
	
	
	Cesium.BingMapsApi.defaultKey = "AknGwyGtxa9zlcMazOG8GVPwpFATmyYf5GQOSwOMqTd-JTKe8h4Qwdu0WJRgQvfi";
    $at.CesiumController.viewer = new Cesium.Viewer("cesiumContainer",option);
    var imageryLayers = $at.CesiumController.viewer.imageryLayers.get(0);
    imageryLayers.brightness = 0.8;
    imageryLayers.contrast = 1.74;
    imageryLayers.hue = 0;
    imageryLayers.saturation = 0.5;
    imageryLayers.gamma = 0.52;
	return $at.CesiumController.viewer;
}
$at.CesiumController.flyTo = function(center,onComplete){
	$at.CesiumController.viewer.camera.flyTo({
		destination : Cesium.Cartesian3.fromDegrees(center[0], center[1], center[2]),
		complete:onComplete
	});
}
$at.CesiumController.returnGuo = function(center,onComplete){
	$at.CesiumController.viewer.camera.flyTo({
		destination:new Cesium.Cartesian3(11774625.73689001,-1114014.9206093757,4016702.508886645),
		orientation : {
	        direction : new Cesium.Cartesian3(0,0.7071067811865476,-0.7071067811865476),
	        up : new Cesium.Cartesian3(0,0.7071067811865476,0.7071067811865476)
	    },
	    convert:false
	});
}

