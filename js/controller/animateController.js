$at.AnimateController = {};
$at.AnimateController.level1 = {};
$at.AnimateController.level2 = {};
$at.AnimateController.level3 = {};
$at.pageDom = {
	indexInfo:$(".indexInfo"),
	rightTable:$(".rightTable"),
	cesiumContainer:$("#cesiumContainer"),
	
	page2Echart:$(".page2Echart"),
	
	page3Echart:$(".page3Echart")
}

$at.AnimateController.level1.show = function(onComplete){
	TweenMax.to($at.pageDom.indexInfo, 0.5, {y:"0px",ease: Power0.easeNone});
	TweenMax.to($at.pageDom.rightTable, 0.5, {x:"0px",ease: Power0.easeNone});
	TweenMax.to($at.pageDom.cesiumContainer, 0.5, {top:"150px",width:"70%",ease: Power0.easeNone});
	setTimeout(onComplete,500);
}
$at.AnimateController.level1.hide = function(){
	TweenMax.to($at.pageDom.indexInfo, 0.5, {y: "-100px",ease: Power0.easeNone});
	TweenMax.to($at.pageDom.rightTable, 0.5, {x:"500px",ease: Power0.easeNone});
	TweenMax.to($at.pageDom.cesiumContainer, 0.5, {top:"50px",width:"94%",ease: Power0.easeNone});
	setTimeout($at.AnimateController.level2.show,500)
}
$at.AnimateController.level2.show = function(){
	TweenMax.to($at.pageDom.page2Echart, 0.5, {opacity: "1",ease: Power0.easeNone});
	TweenMax.staggerFrom($at.pageDom.page2Echart.find(".page2Animate"), 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
}
$at.AnimateController.level2.hide = function(onComplete){
	TweenMax.to($at.pageDom.page2Echart, 0.5, {opacity: "0",ease: Power0.easeNone});
	setTimeout(function(){
		$at.AnimateController.level1.show(onComplete)
	},500)
}
$at.AnimateController.level3.show = function(){
	TweenMax.to($at.pageDom.page3Echart, 0.5, {x: "0",y: "0",ease: Power4.easeOut});
	TweenMax.to($at.pageDom.page3Echart, 0.5, {opacity: "1",ease: Power4.easeOut});
}
$at.AnimateController.level3.hide = function(){
	TweenMax.to($at.pageDom.page3Echart, 0.5, {opacity: "0",ease: Power4.easeIn});
	TweenMax.to($at.pageDom.page3Echart, 0.5, {x: "-1920",y: "1080",ease: Power4.easeIN});
}
