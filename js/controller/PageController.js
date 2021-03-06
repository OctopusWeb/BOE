var $at = {};

$(function(){
	pageInit();

	$(".menu").eq(0).on("click",function(){
		$(".menu").eq(1).removeClass("infoBtnActive");
		$(".menu").eq(0).addClass("infoBtnActive");
		$at.AnimateController.menu($("#menu1"),$("#menu2"));
		$at.AnimateController.level2.hide(function(){
			$at.AreaController.show();
			$at.CesiumController.returnGuo();
		});
	})
	$(".menu").eq(1).on("click",function(){
		$(".menu").eq(0).removeClass("infoBtnActive");
		$(".menu").eq(1).addClass("infoBtnActive");
		$at.AnimateController.menu($("#menu2"),$("#menu1"));
	})
	$(".closed").on("click",function(){
		$at.AnimateController.level3.hide();
		$at.AnimateController.level3_2.show();
	})
	$(".closed2").on("click",function(){
		$at.AnimateController.level4.hide();
	})
	$(".bkBtn").on("click",function(){
		$at.AnimateController.level3_2.show();
	})
	$(".selected2").on("change",function(){
		var option14 = $at.EchartController.level14(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
		$at.EchartController.addEchart(document.getElementById("echart14"),option14);
	})
})
function pageInit(){
	var viewer = $at.CesiumController.init();
	$at.CesiumController.returnGuo();
	$at.AreaController.init(viewer);
	$at.EchartController.init();
	
	TweenMax.set($at.pageDom.page3Echart, {x: "-1920",y: "1080"});
	TweenMax.set($at.pageDom.page4Echart, {x: "-1920",y: "1080"});
	TweenMax.set($("#menu2"),{x: "4000px",ease: Power4.easeIN});
	TweenMax.set($("#menu2"),{opacity: "0",ease: Power4.easeIn});
}

