$at.AnimateController = {};
$at.AnimateController.level1 = {};
$at.AnimateController.level2 = {};
$at.AnimateController.level3 = {};
$at.AnimateController.level3_2 = {};
$at.AnimateController.level4 = {};
$at.pageDom = {
	indexInfo:$(".indexInfo"),
	rightTable:$(".rightTable"),
	cesiumContainer:$("#cesiumContainer"),
	page2Echart:$(".page2Echart"),
	page3Echart:$(".page3Echart"),
	page3Echart_1:$(".page3Echart_1"),
	page3Echart_2:$(".page3Echart_2"),
	page4Echart:$(".page4Echart"),
	menu1:$(".menu1"),
	menu1:$(".menu2")
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
$at.AnimateController.level3_2.show = function(){
	TweenMax.to($at.pageDom.page3Echart_1, 0.5, {left: "0",opacity: "1",ease: Power4.easeOut});
	TweenMax.to($at.pageDom.page3Echart_2, 0.5, {left: "100%",opacity: "0",ease: Power4.easeOut});
}
$at.AnimateController.level3_2.hide = function(){
	TweenMax.to($at.pageDom.page3Echart_2, 0.5, {left: "0",opacity: "1",ease: Power4.easeIn});
	TweenMax.to($at.pageDom.page3Echart_1, 0.5, {left:"-100%",opacity: "0",ease: Power4.easeIN});
}
$at.AnimateController.level4.show = function(){
	TweenMax.to($at.pageDom.page4Echart, 0.5, {x: "0",y: "0",ease: Power4.easeOut});
	TweenMax.to($at.pageDom.page4Echart, 0.5, {opacity: "1",ease: Power4.easeOut});
}
$at.AnimateController.level4.hide = function(){
	TweenMax.to($at.pageDom.page4Echart, 0.5, {opacity: "0",ease: Power4.easeIn});
	TweenMax.to($at.pageDom.page4Echart, 0.5, {x: "-1920",y: "1080",ease: Power4.easeIN});
}
$at.AnimateController.menu = function(showMenu,hideMenu){
	TweenMax.to(showMenu, 0.5, {opacity: "1",ease: Power4.easeIn});
	TweenMax.to(showMenu, 0.5, {x: "0",ease: Power4.easeIN});
	TweenMax.to(hideMenu, 0.5, {x: "4000px",ease: Power4.easeIN});
	TweenMax.to(hideMenu, 0.5, {opacity: "0",ease: Power4.easeIn});
}
