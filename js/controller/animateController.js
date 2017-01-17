$at.AnimateController = {};
$at.AnimateController.level1 = {};
$at.AnimateController.level2 = {};
$at.AnimateController.level3 = {};
$at.pageDom = {
	indexInfo:$(".indexInfo"),
	rightTable:$(".rightTable"),
	cesiumContainer:$("#cesiumContainer")
}

$at.AnimateController.level1.show = function(){
//	TweenMax.to($at.pageDom.indexInfo, 1, {y: "-100px",ease: Power0.easeNone});
//	TweenMax.to($at.pageDom.rightTable, 1, {x:"500px",ease: Power0.easeNone});
//	TweenMax.to($at.pageDom.cesiumContainer, 1, {top:"50px",width:"94%",ease: Power0.easeNone});
}
$at.AnimateController.level1.hide = function(){
	TweenMax.to($at.pageDom.indexInfo, 1, {y: "-100px",ease: Power0.easeNone});
	TweenMax.to($at.pageDom.rightTable, 1, {x:"500px",ease: Power0.easeNone});
	TweenMax.to($at.pageDom.cesiumContainer, 1, {top:"50px",width:"94%",ease: Power0.easeNone});
}
$at.AnimateController.level2.show = function(){
	
}
$at.AnimateController.level2.hide = function(){
	
}
$at.AnimateController.level3.show = function(){
	
}
$at.AnimateController.level3.hide = function(){
	
}
