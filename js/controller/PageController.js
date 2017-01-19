var $at = {};

$(function(){
	pageInit();
	$(".menu").eq(0).on("click",function(){
		$at.AnimateController.level2.hide(function(){
			$at.AreaController.show();
			$at.CesiumController.returnGuo();
		});
	})
	$(".closed").on("click",function(){
		$at.AnimateController.level3.hide()
	})
	TweenMax.set($at.pageDom.page3Echart, {x: "-1920",y: "1080"});
})
function pageInit(){
	var viewer = $at.CesiumController.init();
	$at.CesiumController.returnGuo();
	$at.AreaController.init(viewer);
	$at.EchartController.init();
}