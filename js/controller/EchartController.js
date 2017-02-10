$at.EchartController = {};
var titleColor="rgba(255,255,255,0.3)";
var splitLineStyle="rgba(0,0,0,0.1)";
var axisLabelColor="#7f41ee";
var areaColor="#005494";
var legendColor="#9fa0a0";
var pieLabelColor="#9fa0a0";
var pieColor="#21426a";
var pieColor1="#89abd5";
var pieColor2="#e7e8ea";
var pieColor3="#5c5f63";
var pieColor4="#89abd5";
var pieColor5="#356eb6";
$at.EchartController.init = function(){
	var option14 = $at.EchartController.level14(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart14"),option14);
}
$at.EchartController.page1Init = function(){
	var option1 = $at.EchartController.level1(titleColor,splitLineStyle,axisLabelColor,areaColor);
	$at.EchartController.addEchart(document.getElementById("echart1"),option1);
	var option2 = $at.EchartController.level2(titleColor,splitLineStyle,axisLabelColor,areaColor);
	$at.EchartController.addEchart(document.getElementById("echart2"),option2);
}
$at.EchartController.page2Init = function(){
	var option4 = $at.EchartController.level4(titleColor,splitLineStyle,axisLabelColor,areaColor);
	var echart4 = $at.EchartController.addEchart(document.getElementById("echart4"),option4);
	var option5 = $at.EchartController.level5(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	var echart7 = $at.EchartController.addEchart(document.getElementById("echart5"),option5);
	var option7 = $at.EchartController.level7(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	var echart8 = $at.EchartController.addEchart(document.getElementById("echart7"),option7);
	var option8 = $at.EchartController.level8(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart8"),option8);
	echart4.on('click', function (params) {
		$at.AnimateController.level3_2.hide();
		$at.EchartController.page2_1Init();	
	});
	echart7.on('click', function (params) {
		$at.AnimateController.level3_2.hide();
		$at.EchartController.page2_1Init();	
	});
	echart8.on('click', function (params) {
		$at.AnimateController.level3_2.hide();
		$at.EchartController.page2_1Init();	
	});
}
$at.EchartController.page2_1Init = function(){
	var option2_1 = $at.EchartController.level2_1(titleColor,splitLineStyle,axisLabelColor,areaColor);
	var echart2_1 = $at.EchartController.addEchart(document.getElementById("echart2_1"),option2_1);
	var option2_2 = $at.EchartController.level2_2(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart2_2"),option2_2);
	var option2_3 = $at.EchartController.level2_3(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart2_3"),option2_3);
	var option2_4 = $at.EchartController.level2_4(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart2_4"),option2_4);
	var option2_5 = $at.EchartController.level2_5(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart2_5"),option2_5);
	echart2_1.on('click', function (params) {
		$(".loading").show();
		setTimeout(function(){
			$at.AnimateController.level4.show();
			$at.EchartController.page3Init();
			$(".loading").hide();
		},5000)
	});
}

$at.EchartController.page3Init = function(){
	var option10 = $at.EchartController.level10(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart10"),option10);
	var option11 = $at.EchartController.level11(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart11"),option11);
	var option12 = $at.EchartController.level12(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart12"),option12);
	$.getJSON("data/echart13.json",function(data){
		var option13 = $at.EchartController.level13(titleColor,splitLineStyle,axisLabelColor,areaColor,data);
		$at.EchartController.addEchart(document.getElementById("echart13"),option13);
	})
	
}

$at.EchartController.addEchart = function(dom,option){
	var myChart = echarts.init(dom);
	myChart.setOption(option);
	return myChart;
}
$at.EchartController.level1 = function(titleColor,axisLabelColor,splitLineStyle,areaColor){
	var option = {
		title: {
	        text: 'shipping Qty平均值',
	        textStyle: {
                color: "#fff",
                fontSize: 18
            }
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        textStyle: {
                color: axisLabelColor
            }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis :{
	            type : 'category',
	            boundaryGap : true,
            	data : ['11月9日','11月10日 ','11月11日 ','11月12日 ','11月13日 ','11月14日 ','11月15日','11月16日 ','11月17日','11月18日','11月19日','11月20日 ','11月21日','11月22日','11月23日 ','11月24日'],
	            splitLine: {
				    lineStyle: {
				        color: titleColor
				    }
				},
	            axisLabel: {
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: titleColor
                    }
                }
	        },
	    yAxis : {
	            type : 'value',
	            splitLine: {
				    lineStyle: {
				        color: titleColor
				    }
				},
				axisLine: {
                    lineStyle: {
                        color: titleColor
                    }
                },
	            axisLabel: {
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    }
                }
	        },
	    series : [
	       {
	            name:'在线人数',
	            type:'bar',
	            barWidth : 16,
	            data:[1290, 1932, 1901, 1934, 2290, 2330, 1290,1290, 1932, 1901, 1934, 2290, 2330, 1290,1290, 1932],
	            itemStyle: {
	                normal: {
	                    color: areaColor
	                }
	            }
	        },
	        {
	            name:'活跃人数',
	            type:'line',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            areaStyle: {normal: {color: 'rgba(5,83,147,0.5)'}},
	            lineStyle: {
	                normal: {
	                	color: titleColor,
	                    width: 1
	                }
	            },
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top',
	                    textStyle: {
	                        color: "#fff",
	                        fontSize: 12
	                    }
	                }
	            },
	            data:[1290, 932, 901, 934, 1290, 1330, 1290,1290, 932, 901, 934, 1290, 1330, 1290,1290, 932]
	        }
	    ]
	}
	return option;
}
$at.EchartController.level2 = function(titleColor,axisLabelColor,splitLineStyle,areaColor){
	var option = {
	    title: {
	        text: '总厂良率平均值',
	        textStyle: {
                color: "#fff",
                fontSize: 18
            }
	    },
	    legend: {
	    	top:"5px",
	    	right:0,
	        data:['Array综合良率','CF综合良率','CELL综合良率'],
	        textStyle: {
	            color: '#fff',
	            fontSize: 12
	        }
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['11月9日','11月10日 ','11月11日 ','11月12日 ','11月13日 ','11月14日 ','11月15日','11月16日 ','11月17日','11月18日','11月19日','11月20日 ','11月21日','11月22日','11月23日 ','11月24日'],
	            splitLine: {
				    lineStyle: {
				        color: "titleColor"
				    }
				},
	            axisLabel: {
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: titleColor
                    }
                }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            splitLine: {
				    lineStyle: {
				        color: titleColor
				    }
				},
	            axisLabel: {
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: titleColor
                    }
                }
	        }
	    ],
	    series : [
//	        {
//	            name:'邮件营销',
//	            type:'line',
//	            stack: '总量',
//	            areaStyle: {normal: {}},
//	            data:[120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210]
//	        },
//	        {
//	            name:'联盟广告',
//	            type:'line',
//	            stack: '总量',
//	            areaStyle: {normal: {}},
//	            data:[220, 182, 191, 234, 290, 330, 310, 191, 234, 290, 330, 310]
//	        },
	        {
	            name:'Array综合良率',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {}},
	            data:[150, 232, 201, 154, 190, 330, 410, 201, 154, 190, 330, 410]
	        },
	        {
	            name:'CF综合良率',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {}},
	            data:[320, 332, 301, 334, 390, 330, 320, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'CELL综合良率',
	            type:'line',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            areaStyle: {normal: {}},
	            data:[820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320]
	        }
	    ]
	};
	return option;
}
$at.EchartController.level4 = function(titleColor,axisLabelColor,splitLineStyle,areaColor){
	var option = {
		title: {
	        text: '各产品型号Array工厂良率',
	        textStyle: {
                color: "#fff",
                fontSize: 16
            }
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data: ['Array工厂良率'],
	        textStyle: {
                color: legendColor
            }
	    },
	    grid: {
	        left: '1%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis:  {
	        type: 'value',
	        splitLine: {
			    lineStyle: {
			        color: splitLineStyle
			    }
			},
			axisLine: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            }
	    },
	    yAxis: {
	        type: 'category',
	        data: ['150MP_MBP','150MP_MQP','185MP_FRP','195MP_FBP','225MP_HPP','290MP_PAP','330MP_LMP','490MP_LMP'],
	        splitLine: {
			    lineStyle: {
			        color: splitLineStyle
			    }
			},
			axisLine: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            },
            axisTick: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
	    },
	    series: [
	        {
	            name: 'Array工厂良率',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [820, 832, 901, 934, 1290, 1330, 1320, 1320],
	            itemStyle: {
	                normal: {
	                    color: areaColor
	                }
	            }
	        }
	    ]
	};
	return option;
}
$at.EchartController.level5 = function(titleColor,axisLabelColor,splitLineStyle,areaColor,legendColor){
	var option = {
		title: {
	        text: 'Array Fab Yield',
	        textStyle: {
                color: "#fff",
                fontSize: 16
            }
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    grid: {
	        left: '5%',
	        right: '8%',
	        bottom: '10%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            splitLine: {
				    lineStyle: {
				        color: splitLineStyle
				    }
				},
				axisLine: {
                    lineStyle: {
                        color: axisLabelColor
                    }
                },
	            boundaryGap : false,
	            data : [
		            	{
						    value: '150MP_MBP',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '150MP_MQP',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '185MP_FRP',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '195MP_FBP',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '225MP_HPP ',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '290MP_PAP',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '330MP_LMP',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '490MP_LMP',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						}
					    ]
	        }
	    ],
	    yAxis : {
	    	type:"value",
	    	splitLine: {
			    lineStyle: {
			        color: splitLineStyle
			    }
			},
            axisLine: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            },
            axisTick: {
                lineStyle: {
                    color: axisLabelColor
                }
            }
        },
	    series : [
	        {
	            type:'line',
	            smooth: true,
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top',
	                    textStyle: {
	                        color: axisLabelColor,
	                        fontSize: 22
	                    }
	                }
	            },
	            areaStyle: {
		            normal: {
	                    color: areaColor
	                }
                },
                lineStyle: {
	                normal: {
	                	color: axisLabelColor,
	                    width: 2
	                }
	            },
	            data:[320, 360, 400, 380, 320, 290, 330, 420]
	        }
	    ]
	};
	return option; 
}
$at.EchartController.level7 = function(titleColor,axisLabelColor,splitLineStyle,areaColor,legendColor){
	var option = {
		title: {
	        text: 'Before/After Repair Yield',
	        textStyle: {
                color: "#fff",
                fontSize: 16
            }
	    }, 
	    legend: {
	        top: 5,
	        right:0,
	        data: ['Before_Q','Before_P','Before_S', 'After_Q', 'After_P', 'After_S'],
	        textStyle: {
	            color: '#fff',
	            fontSize: 12
	        }
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : {
            type : 'category',
            splitLine: {
			    lineStyle: {
			        color: splitLineStyle
			    }
			},
            axisLine: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            },
            axisTick: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            data : ['150MP_MBP','150MP_MQP','185MP_FRP','195MP_FBP','225MP_HPP','290MP_PAP','330MP_LMP','490MP_LMP']
	    },
	    yAxis :{
            type : 'value',
            splitLine: {
			    lineStyle: {
			        color: splitLineStyle
			    }
			},
            axisLine: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            axisLabel: {
                textStyle: {
                    color:  "#fff",
                    fontSize: 12
                }
            },
            axisTick: {
                lineStyle: {
                    color: axisLabelColor
                }
            }
        },
	    series : [
	        {
	            name:'Before_Q',
	            type:'bar',
	            stack: 'Before',
	            data:[220, 182, 191, 234, 290, 330, 310,220],
	            itemStyle: {
	                normal: {
	                    color: '#21426a'
	                }
	            }
	        },
	        {
	            name:'Before_P',
	            type:'bar',
	            stack: 'Before',
	            data:[150, 232, 201, 154, 190, 330, 410,150],
	            itemStyle: {
	                normal: {
	                    color: '#356eb6'
	                }
	            }
	        },
	        {
	            name:'Before_S',
	            type:'bar',
	            stack: 'Before',
	            data:[15, 23, 20, 15, 19, 33, 41,15],
	            itemStyle: {
	                normal: {
	                    color: '#356eb6'
	                }
	            }
	        },
	        
	        {
	            name:'After_Q',
	            type:'bar',
	            stack: 'After',
	            data:[620, 732, 701, 734, 1090, 1130, 1120,620],
	            itemStyle: {
	                normal: {
	                    color: '#e8640a'
	                }
	            }
	        },
	        {
	            name:'After_P',
	            type:'bar',
	            stack: 'After',
	            data:[120, 132, 101, 134, 290, 230, 220,120],
	            itemStyle: {
	                normal: {
	                    color: '#ee8d03'
	                }
	            }
	        },
	        {
	            name:'After_S',
	            type:'bar',
	            stack: 'After',
	            data:[12, 13, 10, 13, 29, 23, 22,12],
	            itemStyle: {
	                normal: {
	                    color: '#ee8d03'
	                }
	            }
	        }
	    ]
	};
	return option
}
$at.EchartController.level8 = function(titleColor,axisLabelColor,splitLineStyle,areaColor,legendColor){
	var option = {
		legend: {
	        top: 5,
	        right:0,
	        data: ['DCS','DDS','DGS', 'DOP', 'DSO', 'GCS',"GGS"],
	        textStyle: {
	            color: '#fff',
	            fontSize: 12
	        }
	    },
		title: {
	        text: 'Defect Detail',
	        textStyle: {
                color: "#fff",
                fontSize: 16
            }
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : {
            type : 'category',
            splitLine: {
			    lineStyle: {
			        color: splitLineStyle
			    }
			},
            axisLine: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            },
            axisTick: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            data : ['150MP_MBP','150MP_MQP','185MP_FRP','195MP_FBP','225MP_HPP','290MP_PAP','330MP_LMP','490MP_LMP']
	    },
	    yAxis :{
            type : 'value',
            splitLine: {
			    lineStyle: {
			        color: splitLineStyle
			    }
			},
            axisLine: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            axisLabel: {
                textStyle: {
                    color:  "#fff",
                    fontSize: 12
                }
            },
            axisTick: {
                lineStyle: {
                    color: axisLabelColor
                }
            }
        },
	    series : [
	       
	        {
	            name:'DCS',
	            type:'bar',
	            stack: 'DCS',
	            data:[120, 132, 101, 134, 90, 230, 210,120],
	            itemStyle: {
	                normal: {
	                    color: '#89abd5'
	                }
	            }
	        },
	        {
	            name:'DDS',
	            type:'bar',
	            stack: 'DDS',
	            data:[220, 182, 191, 234, 290, 330, 310,220],
	            itemStyle: {
	                normal: {
	                    color: '#21426a'
	                }
	            }
	        },
	        {
	            name:'DGS',
	            type:'bar',
	            stack: 'DGS',
	            data:[150, 232, 201, 154, 190, 330, 410,150],
	            itemStyle: {
	                normal: {
	                    color: '#356eb6'
	                }
	            }
	        },
	        
	        {
	            name:'DOP',
	            type:'bar',
	            stack: 'DOP',
	            data:[620, 732, 701, 734, 1090, 1130, 1120,620],
	            itemStyle: {
	                normal: {
	                    color: '#e8640a'
	                }
	            }
	        },
	        {
	            name:'DSO',
	            type:'bar',
	            stack: 'DSO',
	            data:[120, 132, 101, 134, 290, 230, 220,120],
	            itemStyle: {
	                normal: {
	                    color: '#ee8d03'
	                }
	            }
	        },
	        {
	            name:'GCS',
	            type:'bar',
	            stack: 'GCS',
	            data:[60, 72, 71, 74, 190, 130, 110,60],
	            itemStyle: {
	                normal: {
	                    color: '#f8bc00'
	                }
	            }
	        },
	        {
	            name:'GGS',
	            type:'bar',
	            stack: 'GGS',
	            data:[62, 82, 91, 84, 109, 110, 120,62],
	            itemStyle: {
	                normal: {
	                    color: '#f7dfa1'
	                }
	            }
	        }
	    ]
	};
	return option
}
$at.EchartController.level10 = function(titleColor,axisLabelColor,splitLineStyle,areaColor){
	var option = {
		title: {
	        text: 'Detect Count',
	        textStyle: {
                color: "#fff",
                fontSize: 18
            }
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	    	data: ['COP01', 'DOP01'],
	        textStyle: {
                color: "#fff"
            }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis :{
	            type : 'category',
	            boundaryGap : true,
            	data : ['2017-11-9','2017-11-10 ','2017-11-11 ','2017-11-12 ','2017-11-13 ','2017-11-14 ','2017-11-15','2017-11-16 ','2017-11-17','2017-11-18','2017-11-19','2017-11-20 ','2017-11-21','2017-11-22','2017-11-23 ','2017-11-24'],
	            splitLine: {
				    lineStyle: {
				        color: titleColor
				    }
				},
	            axisLabel: {
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: titleColor
                    }
                }
	        },
	    yAxis : {
	    		name: '千台',
	    		nameTextStyle: {
                    color: '#fff'
                },
	            type : 'value',
	            splitLine: {
				    lineStyle: {
				        color: titleColor
				    }
				},
				axisLine: {
                    lineStyle: {
                        color: titleColor
                    }
                },
	            axisLabel: {
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    }
                }
	        },
	    series : [
	       {
	            name:'COP01',
	            type:'bar',
	            barWidth : 16,
	            data:[1290, 1932, 1901, 1934, 2290, 2330, 1290,1290, 1932, 1901, 1934, 2290, 2330, 1290,1290, 1932],
	            itemStyle: {
	                normal: {
	                    color: areaColor
	                }
	            }
	        },
	        {
	            name:'DOP01',
	            type:'line',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            areaStyle: {normal: {color: 'rgba(5,83,147,0.5)'}},
	            lineStyle: {
	                normal: {
	                	color: titleColor,
	                    width: 1
	                }
	            },
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top',
	                    textStyle: {
	                        color: "#fff",
	                        fontSize: 12
	                    }
	                }
	            },
	            data:[1290, 932, 901, 934, 1290, 1330, 1290,1290, 932, 901, 934, 1290, 1330, 1290,1290, 932]
	        }
	    ]
	}
	return option;
}
$at.EchartController.level11 = function(titleColor,axisLabelColor,splitLineStyle,areaColor,legendColor){
	var option = {
		title: {
	        text: 'Array Fab Yield',
	        textStyle: {
                color: "#fff",
                fontSize: 16
            }
	    },
	    legend: {
	    	data: ['COP01','DOP01',"GOAOL","PXL02"],
	        textStyle: {
                color: "#fff"
            }
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : {
            type : 'category',
            splitLine: {
			    lineStyle: {
			        color: splitLineStyle
			    }
			},
            axisLine: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            },
            axisTick: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            data : ['2017-1','2017-2','2017-3','2017-4','2017-5','2017-6','2017-7','2017-8','2017-9','2017-10','2017-11','2017-12'],
	    },
	    yAxis :{
	    	name: '千台',
	    	nameTextStyle: {
                color: '#fff'
            },
            type : 'value',
            splitLine: {
			    lineStyle: {
			        color: splitLineStyle
			    }
			},
            axisLine: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            },
            axisTick: {
                lineStyle: {
                    color: axisLabelColor
                }
            }
        },
	    series : [
	        {
	            name:'COP01',
	            type:'bar',
	            stack: '搜索引擎',
	            barWidth : 16,
	            data:[620, 732, 701, 734, 1090, 1130, 1120,620, 732, 701, 734, 1090],
	            itemStyle: {
	                normal: {
	                    color: '#89abd5'
	                }
	            }
	        },
	        {
	            name:'DOP01',
	            type:'bar',
	            stack: '搜索引擎',
	            barWidth : 16,
	            data:[120, 132, 101, 134, 290, 230, 220,120, 132, 101, 134, 290],
	            itemStyle: {
	                normal: {
	                    color: '#356eb6'
	                }
	            }
	        },
	        {
	            name:'GOAOL',
	            type:'bar',
	            stack: '搜索引擎',
	            barWidth : 16,
	            data:[60, 72, 71, 74, 190, 130, 110,60, 72, 71, 74, 190],
	            itemStyle: {
	                normal: {
	                    color: '#21426a'
	                }
	            }
	        },
	        {
	            name:'PXL02',
	            type:'bar',
	            stack: '搜索引擎',
	            barWidth : 16,
	            data:[62, 82, 91, 84, 109, 110, 120,62, 82, 91, 84, 109],
	            itemStyle: {
	                normal: {
	                    color: '#003a66'
	                }
	            }
	        }
	    ]
	};
	return option
}
$at.EchartController.level12 = function(titleColor,axisLabelColor,splitLineStyle,areaColor,legendColor){
	var dataBJ = [
	    ["[BAE1S]-1rules",'5810',9,56,0.46,18,6,"良"],
	    ['[5810]-1rules','BAE1S',11,21,0.65,34,9,"优"],
	    ['[BAEV]-1rules','8800',7,63,0.3,14,5,"良"],
	    ['[BAEIT]-1rules','BAE2S',7,29,0.33,16,6,"优"],
	    ['[9800]-1rules','PXL00',24,44,0.76,40,16,"优"],
	    ['[DOP01]-1rules','1800',58,90,1.77,68,33,"良"],
	    ['[PXL00]-1rules','DOP01',49,77,1.46,48,27,"良"]
	];
	
	var schema = [
	    {name: 'date', index: 0, text: '日'},
	    {name: 'AQIindex', index: 1, text: 'RHS'},
	    {name: 'PM25', index: 2, text: 'PM2.5'},
	    {name: 'PM10', index: 3, text: 'PM10'},
	    {name: 'CO', index: 4, text: '一氧化碳（CO）'},
	    {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
	    {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
	];
	
	
	var itemStyle = {
	    normal: {
	        opacity: 0.8,
	        shadowBlur: 10,
	        shadowOffsetX: 0,
	        shadowOffsetY: 0,
	        shadowColor: 'rgba(0, 0, 0, 0.5)'
	    }
	};
	
	var option = {
	    color: [
	        '#005494', '#89abd5', '#80F1BE'
	    ],
	    legend: {
	        y: 'top',
	        data: ['北京'],
	        textStyle: {
	            color: '#fff',
	            fontSize: 16
	        }
	    },
	    grid: {
	        x: '10%',
	        x2: 150,
	        y: '18%',
	        y2: '10%'
	    },
	    tooltip: {
	        padding: 10,
	        backgroundColor: '#222',
	        borderColor: '#777',
	        borderWidth: 1,
	        formatter: function (obj) {
	            var value = obj.value;
	            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
	                + obj.seriesName + ' ' + value[0] + '日：'
	                + value[7]
	                + '</div>'
	                + schema[1].text + '：' + value[1] + '<br>'
	                + schema[2].text + '：' + value[2] + '<br>'
	                + schema[3].text + '：' + value[3] + '<br>'
	                + schema[4].text + '：' + value[4] + '<br>'
	                + schema[5].text + '：' + value[5] + '<br>'
	                + schema[6].text + '：' + value[6] + '<br>';
	        }
	    },
	    xAxis: {
	        type : 'category',
            axisTick : {show: false},
            data : ['5810','BAE1S','8800','BAE2S','PXL00','1800','DOP01'],
	        name: 'qq',
	        nameLocation: 'end',
	        nameGap: 20,
	        nameTextStyle: {
	            color: '#fff',
	            fontSize: 16
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#eee'
	            }
	        },
	        splitLine: {
	            show: false
	        }
	    },
	    yAxis: {
	       type : 'category',
            axisTick : {show: false},
            data : ['[BAE1S]-1rules','[5810]-1rules','[BAEV]-1rules','[BAEIT]-1rules','[9800]-1rules','[DOP01]-1rules','[PXL00]-1rules'],
	        name: 'qq',
	        nameLocation: 'end',
	        nameGap: 20,
	        nameTextStyle: {
	            color: '#fff',
	            fontSize: 16
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#eee'
	            }
	        },
	        splitLine: {
	            show: false
	        }
	    },
	    visualMap: [
	        {
	            left: 'right',
	            top: '10%',
	            dimension: 2,
	            min: 0,
	            max: 250,
	            itemWidth: 30,
	            itemHeight: 120,
	            calculable: true,
	            precision: 0.1,
	            text: ['选择参数1'],
	            textGap: 30,
	            textStyle: {
	                color: '#fff'
	            },
	            inRange: {
	                symbolSize: [10, 50]
	            },
	            outOfRange: {
	                symbolSize: [10, 50],
	                color: ['rgba(255,255,255,.2)']
	            },
	            controller: {
	                inRange: {
	                    color: ['#005494']
	                },
	                outOfRange: {
	                    color: ['#444']
	                }
	            }
	        },
	        {
	            left: 'right',
	            bottom: '5%',
	            dimension: 6,
	            min: 0,
	            max: 50,
	            itemHeight: 120,
	            calculable: true,
	            precision: 0.1,
	            text: ['选择参数2'],
	            textGap: 30,
	            textStyle: {
	                color: '#fff'
	            },
	            inRange: {
	                colorLightness: [1, 0.5]
	            },
	            outOfRange: {
	                color: ['rgba(255,255,255,.2)']
	            },
	            controller: {
	                inRange: {
	                    color: ['#005494']
	                },
	                outOfRange: {
	                    color: ['#444']
	                }
	            }
	        }
	    ],
	    series: [
	        {
	            name: '',
	            type: 'scatter',
	            itemStyle: itemStyle,
	            data: dataBJ
	        }
	    ]
	};
	return option
}
$at.EchartController.level13 = function(titleColor,axisLabelColor,splitLineStyle,areaColor,data){	
    var option = {
        title: {
            text: 'Sankey Diagram',
            textStyle: {
                color: "#fff",
                fontSize: 18
            }
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'sankey',
                layout:'none',
                data: data.nodes,
                links: data.links,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#eee'
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.5
                    }
                },
                label: {
	                normal: {
	                    show: true,
	                    textStyle: {
	                        color: "#fff",
	                        fontSize: 12
	                    }
	                }
	            },
            }
        ]
    }
    return option
 }
$at.EchartController.level14 = function(titleColor,axisLabelColor,splitLineStyle,areaColor){
	var option = {
	    title: {
	        text: '显示设备日志分析',
	        textStyle: {
                color: "#fff",
                fontSize: 18
            }
	    },
	    legend: {
	    	top:"5px",
	        data:['Array综合良率','CF综合良率','CELL综合良率'],
	        textStyle: {
	            color: '#fff',
	            fontSize: 12
	        }
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['1','2','3','4','5','6','7',"8","9","10","11","12",'13','14','15','16','17','18','19',"20","21","22","23","24"],
	            splitLine: {
				    lineStyle: {
				        color: titleColor
				    }
				},
	            axisLabel: {
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: titleColor
                    }
                }
	        }
	    ],
	    yAxis : [
	        {
	        	name:"台",
	        	nameTextStyle: {
                    color: '#fff'
                },
	            type : 'value',
	            splitLine: {
				    lineStyle: {
				        color: titleColor
				    }
				},
	            axisLabel: {
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: titleColor
                    }
                }
	        }
	    ],
	    series : [
	        {
	            name:'Array综合良率',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {
	            	color:"#005494"
	            }},
	            data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101]
	        },
	        {
	            name:'CF综合良率',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {
	            	color:"#356eb6"
	            }},
	            data:[220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191]
	        },
	        {
	            name:'CELL综合良率',
	            type:'line',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            areaStyle: {normal: {}},
	            data:[820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932,900]
	        }
	    ]
	};
	return option;
}

$at.EchartController.level2_1 = function(titleColor,axisLabelColor,splitLineStyle,areaColor){
	var option = {
	    tooltip: {
	        trigger: 'axis'
	    },
	    radar: [
	        {
	            indicator: [
	                {text: 'DCS', max: 100},
	                {text: 'DDS', max: 100},
	                {text: 'DGS', max: 100},
	                {text: 'DOP', max: 100},
	                {text: 'DSO', max: 100},
	                {text: 'GCS', max: 100},
	                {text: 'GGS', max: 100},
	                {text: 'GOA', max: 100},
	                {text: 'GOPCOP', max: 100},
	                {text: 'GSO', max: 100}
	            ],
	            center: ['50%','50%'],
	            radius: "80%"
	        }
	    ],
	    series: [
	        {
	            type: 'radar',
	             tooltip: {
	                trigger: 'item'
	            },
	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data: [
	                {
	                    value: [60,73,85,60,73,85,85,60,73,85],
	                    name: 'Before',
	                    label: {
	                        normal: {
	                            show: true,
	                            formatter:function(params) {
	                                return params.value;
	                            }
	                        }
	                    }
	                },
	                {
	                    value: [30,23,30,23,30,23,30,23,30,23],
	                    name: 'After',
	                    label: {
	                        normal: {
	                            show: true,
	                            formatter:function(params) {
	                                return params.value;
	                            }
	                        }
	                    }
	                }
	                
	            ]
	        }
	    ]
	};
	return option;
}
$at.EchartController.level2_2 = function(titleColor,axisLabelColor,splitLineStyle,areaColor){
	var option = {
		title: {
	        text: 'Before Repair Yield',
	        textStyle: {
                color: "#fff",
                fontSize: 18
            }
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '1%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis:  {
	        type: 'value',
	        splitLine: {
			    lineStyle: {
			        color: splitLineStyle
			    }
			},
			axisLine: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            }
	    },
	    yAxis: {
	        type: 'category',
	        data: ['150MP_MBP'],
	        splitLine: {
			    lineStyle: {
			        color: splitLineStyle
			    }
			},
			axisLine: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            },
            axisTick: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
	    },
	    series: [
	        {
	            name: '150MP_MBP',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [820],
	            itemStyle: {
	                normal: {
	                    color: areaColor
	                }
	            }
	        }
	    ]
	};
	return option;
}
$at.EchartController.level2_3 = function(titleColor,axisLabelColor,splitLineStyle,areaColor){
	var option = {
		title: {
	        text: 'After Repair Yield',
	        textStyle: {
                color: "#fff",
                fontSize: 18
            }
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '1%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis:  {
	        type: 'value',
	        splitLine: {
			    lineStyle: {
			        color: splitLineStyle
			    }
			},
			axisLine: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            }
	    },
	    yAxis: {
	        type: 'category',
	        data: ['150MP_MBP'],
	        splitLine: {
			    lineStyle: {
			        color: splitLineStyle
			    }
			},
			axisLine: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            },
            axisTick: {
                lineStyle: {
                    color: axisLabelColor
                }
            },
	    },
	    series: [
	        {
	            name: '150MP_MBP',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [820],
	            itemStyle: {
	                normal: {
	                    color: areaColor
	                }
	            }
	        }
	    ]
	};
	return option;
}
$at.EchartController.level2_4 = function(titleColor,axisLabelColor,splitLineStyle,areaColor){
	var option = {
	    title : {
	        text: 'Before Repair Yield',
	        x:'center',
	        textStyle:{
	        	color:"#fff"
	        }
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    series : [
	        {
	            name: '150MP_MBP',
	            type: 'pie',
	            radius : '70%',
	            center: ['50%', '50%'],
	            data:[
	                {value:335, name:'Before P',
		                itemStyle: {
			                normal: {
			                    color: pieColor1,
			                    shadowBlur: 100,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
		            	}
	            	},
	                {value:310, name:'Before Q',
		                itemStyle: {
			                normal: {
			                    color: pieColor2,
			                    shadowBlur: 100,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
		            	}
	            	},
	                {value:234, name:'Before S',
		                itemStyle: {
			                normal: {
			                    color: pieColor3,
			                    shadowBlur: 100,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
		            	}
	            	}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
	return option;
}
$at.EchartController.level2_5 = function(titleColor,axisLabelColor,splitLineStyle,areaColor){
	var option = {
	    title : {
	        text: 'After Repair Yield',
	        x:'center',
	        textStyle:{
	        	color:"#fff"
	        }
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    series : [
	        {
	            name: 'After Repair Yield',
	            type: 'pie',
	            radius : '70%',
	            center: ['50%', '50%'],
	            data:[
	                {value:335, name:'After P',
		                itemStyle: {
			                normal: {
			                    color: pieColor1,
			                    shadowBlur: 100,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
		            	}
	            	},
	                {value:310, name:'After Q',
		                itemStyle: {
			                normal: {
			                    color: pieColor2,
			                    shadowBlur: 100,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
		            	}
	            	},
	                {value:234, name:'After S',
		                itemStyle: {
			                normal: {
			                    color: pieColor3,
			                    shadowBlur: 100,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
		            	}
	            	}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
	return option;
}
