var $at = {};

$(function(){
	pageInit();
})
function pageInit(){
	var viewer = $at.CesiumController.init();
	$at.CesiumController.returnGuo();
	$at.AreaController.init(viewer);
}

