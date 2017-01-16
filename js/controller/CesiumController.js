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
	Cesium.BingMapsApi.defaultKey = "AknGwyGtxa9zlcMazOG8GVPwpFATmyYf5GQOSwOMqTd-JTKe8h4Qwdu0WJRgQvfi";
    $at.CesiumController.viewer = new Cesium.Viewer("cesiumContainer",option);
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
		destination:new Cesium.Cartesian3(11774625.73689001,-1114014.9206093757,4616702.508886645),
		orientation : {
	        direction : new Cesium.Cartesian3(0,0.7071067811865476,-0.7071067811865476),
	        up : new Cesium.Cartesian3(0,0.7071067811865476,0.7071067811865476)
	    },
	    convert:false
	});
}

