$at.EchartController = {};
var titleColor="rgba(255,255,255,0.3)";
var splitLineStyle="rgba(0,0,0,0.1)";
var axisLabelColor="#7f41ee";
var areaColor="#005494";
var legendColor="#9fa0a0";
$at.EchartController.init = function(){
//	$at.EchartController.page1Init();
//	$at.EchartController.page2Init();
//	$at.EchartController.page3Init();
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
	$at.EchartController.addEchart(document.getElementById("echart5"),option5);
	var option7 = $at.EchartController.level7(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart7"),option7);
	var option8 = $at.EchartController.level8(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart8"),option8);
	echart4.on('click', function (params) {
		$at.EchartController.page2_1Init();
//		$(".loading").show();
//		setTimeout(function(){
//			$at.AnimateController.level4.show();
//			$at.EchartController.page3Init();
//			$(".loading").hide();
//		},5000)
//		
	});
}
$at.EchartController.page2_1Init = function(){
	var option2_1 = $at.EchartController.level2_1(titleColor,splitLineStyle,axisLabelColor,areaColor);
	$at.EchartController.addEchart(document.getElementById("echart2_1"),option2_1);
	var option2_2 = $at.EchartController.level2_2(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart2_2"),option2_2);
	var option2_3 = $at.EchartController.level2_3(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart2_3"),option2_3);
	var option2_4 = $at.EchartController.level2_4(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart2_4"),option2_4);
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
	var option14 = $at.EchartController.level14(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart14"),option14);
}

$at.EchartController.addEchart = function(dom,option){
	var myChart = echarts.init(dom);
	myChart.setOption(option);
	return myChart;
}
$at.EchartController.level1 = function(titleColor,axisLabelColor,splitLineStyle,areaColor){
	var option = {
		title: {
	        text: '工厂良率',
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
	        text: '各工厂良率',
	        textStyle: {
                color: "#fff",
                fontSize: 18
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
	            data : ['周一','周二','周三','周四','周五','周六','周日'],
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
	        {
	            name:'邮件营销',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {}},
	            data:[120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	            name:'联盟广告',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {}},
	            data:[220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	            name:'视频广告',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {}},
	            data:[150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	            name:'直接访问',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {}},
	            data:[320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'搜索引擎',
	            type:'line',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            areaStyle: {normal: {}},
	            data:[820, 932, 901, 934, 1290, 1330, 1320]
	        }
	    ]
	};
	return option;
}
$at.EchartController.level4 = function(titleColor,axisLabelColor,splitLineStyle,areaColor){
	var option = {
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data: ['前端摄像机情况'],
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
	        data: ['数字800W','数字500W','数字300W(1280P)','数字200W(1080P)','数字13W(720P)','模拟700以上','模拟500或以下'],
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
	            name: '前端摄像机情况',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [820, 832, 901, 934, 1290, 1330, 1320],
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
						    value: '东城区',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '西城区',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '石景山区',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '丰台区',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '朝阳区 ',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '海淀区',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '延庆区',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '昌平区',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '顺义区',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '怀柔区',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '密云区',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '平谷区',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '通州区',
						    textStyle: {
						        fontSize:12,
						        color: "#fff"
						    }
						},
						{
						    value: '大兴区',
						    textStyle: {
						        fontSize:12,
						        color: "#fff"
						    }
						},
						{
						    value: '房山区',
						    textStyle: {
						        fontSize: 12,
						        color: "#fff"
						    }
						},
						{
						    value: '门头沟区',
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
	            data:[320, 360, 400, 380, 320, 290, 330, 420, 450, 410, 310, 380, 420, 510, 580, 490]
	        }
	    ]
	};
	return option; 
}
$at.EchartController.level7 = function(titleColor,axisLabelColor,splitLineStyle,areaColor,legendColor){
	var option = {
		title: {
	        text: 'After Repair Yield',
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
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
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
	            name:'还未覆盖',
	            type:'bar',
	            stack: '广告',
	            data:[220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290],
	            itemStyle: {
	                normal: {
	                    color: '#21426a'
	                }
	            }
	        },
	        {
	            name:'计划建设',
	            type:'bar',
	            stack: '广告',
	            data:[150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190],
	            itemStyle: {
	                normal: {
	                    color: '#356eb6'
	                }
	            }
	        },
	        
	        {
	            name:'筹备建设',
	            type:'bar',
	            stack: '搜索引擎',
	            data:[620, 732, 701, 734, 1090, 1130, 1120,620, 732, 701, 734, 1090],
	            itemStyle: {
	                normal: {
	                    color: '#e8640a'
	                }
	            }
	        },
	        {
	            name:'准备施工',
	            type:'bar',
	            stack: '搜索引擎',
	            data:[120, 132, 101, 134, 290, 230, 220,120, 132, 101, 134, 290],
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
		title: {
	        text: 'After Repair Yield',
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
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
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
	            name:'不覆盖',
	            type:'bar',
	            stack: '点位1',
	            data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90],
	            itemStyle: {
	                normal: {
	                    color: '#89abd5'
	                }
	            }
	        },
	        {
	            name:'还未覆盖',
	            type:'bar',
	            stack: '广告1',
	            data:[220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290],
	            itemStyle: {
	                normal: {
	                    color: '#21426a'
	                }
	            }
	        },
	        {
	            name:'计划建设',
	            type:'bar',
	            stack: '广告2',
	            data:[150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190],
	            itemStyle: {
	                normal: {
	                    color: '#356eb6'
	                }
	            }
	        },
	        
	        {
	            name:'筹备建设',
	            type:'bar',
	            stack: '搜索引擎1',
	            data:[620, 732, 701, 734, 1090, 1130, 1120,620, 732, 701, 734, 1090],
	            itemStyle: {
	                normal: {
	                    color: '#e8640a'
	                }
	            }
	        },
	        {
	            name:'准备施工',
	            type:'bar',
	            stack: '搜索引擎2',
	            data:[120, 132, 101, 134, 290, 230, 220,120, 132, 101, 134, 290],
	            itemStyle: {
	                normal: {
	                    color: '#ee8d03'
	                }
	            }
	        },
	        {
	            name:'正在施工',
	            type:'bar',
	            stack: '搜索引擎3',
	            data:[60, 72, 71, 74, 190, 130, 110,60, 72, 71, 74, 190],
	            itemStyle: {
	                normal: {
	                    color: '#f8bc00'
	                }
	            }
	        },
	        {
	            name:'等待上线',
	            type:'bar',
	            stack: '搜索引擎4',
	            data:[62, 82, 91, 84, 109, 110, 120,62, 82, 91, 84, 109],
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
$at.EchartController.level11 = function(titleColor,axisLabelColor,splitLineStyle,areaColor,legendColor){
	var option = {
		title: {
	        text: 'Array Fab Yield',
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
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
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
	            name:'筹备建设',
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
	            name:'准备施工',
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
	            name:'正在施工',
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
	            name:'等待上线',
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
	    [1,55,9,56,0.46,18,6,"良"],
	    [2,25,11,21,0.65,34,9,"优"],
	    [3,56,7,63,0.3,14,5,"良"],
	    [4,33,7,29,0.33,16,6,"优"],
	    [5,42,24,44,0.76,40,16,"优"],
	    [6,82,58,90,1.77,68,33,"良"],
	    [7,74,49,77,1.46,48,27,"良"],
	    [8,78,55,80,1.29,59,29,"良"],
	    [9,267,216,280,4.8,108,64,"重度污染"],
	    [10,185,127,216,2.52,61,27,"中度污染"],
	    [11,39,19,38,0.57,31,15,"优"],
	    [12,41,11,40,0.43,21,7,"优"],
	    [13,64,38,74,1.04,46,22,"良"],
	    [14,108,79,120,1.7,75,41,"轻度污染"],
	    [15,108,63,116,1.48,44,26,"轻度污染"],
	    [16,33,6,29,0.34,13,5,"优"],
	    [17,94,66,110,1.54,62,31,"良"],
	    [18,186,142,192,3.88,93,79,"中度污染"],
	    [19,57,31,54,0.96,32,14,"良"],
	    [20,22,8,17,0.48,23,10,"优"],
	    [21,39,15,36,0.61,29,13,"优"],
	    [22,94,69,114,2.08,73,39,"良"],
	    [23,99,73,110,2.43,76,48,"良"],
	    [24,31,12,30,0.5,32,16,"优"],
	    [25,42,27,43,1,53,22,"优"],
	    [26,154,117,157,3.05,92,58,"中度污染"],
	    [27,234,185,230,4.09,123,69,"重度污染"],
	    [28,160,120,186,2.77,91,50,"中度污染"],
	    [29,134,96,165,2.76,83,41,"轻度污染"],
	    [30,52,24,60,1.03,50,21,"良"],
	    [31,46,5,49,0.28,10,6,"优"]
	];
	
	var dataGZ = [
	    [1,26,37,27,1.163,27,13,"优"],
	    [2,85,62,71,1.195,60,8,"良"],
	    [3,78,38,74,1.363,37,7,"良"],
	    [4,21,21,36,0.634,40,9,"优"],
	    [5,41,42,46,0.915,81,13,"优"],
	    [6,56,52,69,1.067,92,16,"良"],
	    [7,64,30,28,0.924,51,2,"良"],
	    [8,55,48,74,1.236,75,26,"良"],
	    [9,76,85,113,1.237,114,27,"良"],
	    [10,91,81,104,1.041,56,40,"良"],
	    [11,84,39,60,0.964,25,11,"良"],
	    [12,64,51,101,0.862,58,23,"良"],
	    [13,70,69,120,1.198,65,36,"良"],
	    [14,77,105,178,2.549,64,16,"良"],
	    [15,109,68,87,0.996,74,29,"轻度污染"],
	    [16,73,68,97,0.905,51,34,"良"],
	    [17,54,27,47,0.592,53,12,"良"],
	    [18,51,61,97,0.811,65,19,"良"],
	    [19,91,71,121,1.374,43,18,"良"],
	    [20,73,102,182,2.787,44,19,"良"],
	    [21,73,50,76,0.717,31,20,"良"],
	    [22,84,94,140,2.238,68,18,"良"],
	    [23,93,77,104,1.165,53,7,"良"],
	    [24,99,130,227,3.97,55,15,"良"],
	    [25,146,84,139,1.094,40,17,"轻度污染"],
	    [26,113,108,137,1.481,48,15,"轻度污染"],
	    [27,81,48,62,1.619,26,3,"良"],
	    [28,56,48,68,1.336,37,9,"良"],
	    [29,82,92,174,3.29,0,13,"良"],
	    [30,106,116,188,3.628,101,16,"轻度污染"],
	    [31,118,50,0,1.383,76,11,"轻度污染"]
	];
	
	var dataSH = [
	    [1,91,45,125,0.82,34,23,"良"],
	    [2,65,27,78,0.86,45,29,"良"],
	    [3,83,60,84,1.09,73,27,"良"],
	    [4,109,81,121,1.28,68,51,"轻度污染"],
	    [5,106,77,114,1.07,55,51,"轻度污染"],
	    [6,109,81,121,1.28,68,51,"轻度污染"],
	    [7,106,77,114,1.07,55,51,"轻度污染"],
	    [8,89,65,78,0.86,51,26,"良"],
	    [9,53,33,47,0.64,50,17,"良"],
	    [10,80,55,80,1.01,75,24,"良"],
	    [11,117,81,124,1.03,45,24,"轻度污染"],
	    [12,99,71,142,1.1,62,42,"良"],
	    [13,95,69,130,1.28,74,50,"良"],
	    [14,116,87,131,1.47,84,40,"轻度污染"],
	    [15,108,80,121,1.3,85,37,"轻度污染"],
	    [16,134,83,167,1.16,57,43,"轻度污染"],
	    [17,79,43,107,1.05,59,37,"良"],
	    [18,71,46,89,0.86,64,25,"良"],
	    [19,97,71,113,1.17,88,31,"良"],
	    [20,84,57,91,0.85,55,31,"良"],
	    [21,87,63,101,0.9,56,41,"良"],
	    [22,104,77,119,1.09,73,48,"轻度污染"],
	    [23,87,62,100,1,72,28,"良"],
	    [24,168,128,172,1.49,97,56,"中度污染"],
	    [25,65,45,51,0.74,39,17,"良"],
	    [26,39,24,38,0.61,47,17,"优"],
	    [27,39,24,39,0.59,50,19,"优"],
	    [28,93,68,96,1.05,79,29,"良"],
	    [29,188,143,197,1.66,99,51,"中度污染"],
	    [30,174,131,174,1.55,108,50,"中度污染"],
	    [31,187,143,201,1.39,89,53,"中度污染"]
	];
	
	var schema = [
	    {name: 'date', index: 0, text: '日'},
	    {name: 'AQIindex', index: 1, text: 'AQI指数'},
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
	        data: ['北京', '上海', '广州'],
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
	        type: 'value',
	        name: '日期',
	        nameGap: 16,
	        nameTextStyle: {
	            color: '#fff',
	            fontSize: 14
	        },
	        max: 31,
	        splitLine: {
	            show: false
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#eee'
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
	        type: 'value',
	        name: 'AQI指数',
	        nameLocation: 'end',
	        axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: 12
                }
            },
	        nameGap: 20,
	        nameTextStyle: {
	            color: '#fff',
	            fontSize: 16
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#fff'
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
	            text: ['圆形大小：PM2.5'],
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
	            text: ['明暗：二氧化硫'],
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
	            name: '北京',
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
	        text: '各工厂良率',
	        textStyle: {
                color: "#fff",
                fontSize: 18
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
	            data : ['周一','周二','周三','周四','周五','周六','周日'],
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
	            name:'邮件营销',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {
	            	color:"#005494"
	            }},
	            data:[120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	            name:'联盟广告',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {
	            	color:"#356eb6"
	            }},
	            data:[220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	            name:'搜索引擎',
	            type:'line',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            areaStyle: {normal: {}},
	            data:[820, 932, 901, 934, 1290, 1330, 1320]
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
	    legend: {
	        x: 'center',
	        data:['某软件','某主食手机','某水果手机','降水量','蒸发量']
	    },
	    radar: [
	        {
	            indicator: [
	                {text: '品牌', max: 100},
	                {text: '内容', max: 100},
	                {text: '可用', max: 100},
	                {text: '功能', max: 100},
	                {text: '功能', max: 100},
	                {text: '功能', max: 100},
	                {text: '功能', max: 100},
	                {text: '功能', max: 100}
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
	                    value: [60,73,85,40,60,73,85,40],
	                    name: '某软件1'
	                },
	                {
	                    value: [30,23,85,40,30,23,85,40],
	                    name: '某软件2'
	                }
	                
	            ]
	        }
	    ]
	};
	return option;
}
$at.EchartController.level2_2 = function(titleColor,axisLabelColor,splitLineStyle,areaColor){
	var option = {
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data: ['前端摄像机情况'],
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
	        data: ['数字800W'],
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
	            name: '前端摄像机情况',
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
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data: ['前端摄像机情况'],
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
	        data: ['数字800W'],
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
	            name: '前端摄像机情况',
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
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data: ['前端摄像机情况'],
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
	        data: ['数字800W'],
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
	            name: '前端摄像机情况',
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
