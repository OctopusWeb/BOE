$at.EchartController = {};
$at.EchartController.init = function(){
	var titleColor="rgba(255,255,255,0.3)";
	var splitLineStyle="rgba(0,0,0,0.1)";
	var axisLabelColor="#7f41ee";
	var areaColor="#005494";
	var legendColor="#9fa0a0";
	
	var option1 = $at.EchartController.level1(titleColor,splitLineStyle,axisLabelColor,areaColor);
	$at.EchartController.addEchart(document.getElementById("echart1"),option1);
	var option2 = $at.EchartController.level2(titleColor,splitLineStyle,axisLabelColor,areaColor);
	$at.EchartController.addEchart(document.getElementById("echart2"),option2);
	var option4 = $at.EchartController.level4(titleColor,splitLineStyle,axisLabelColor,areaColor);
	var echart4 = $at.EchartController.addEchart(document.getElementById("echart4"),option4);
	var option5 = $at.EchartController.level5(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart5"),option5);
	var option6 = $at.EchartController.level6(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart6"),option6);
	var option7 = $at.EchartController.level7(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart7"),option7);
	var option8 = $at.EchartController.level8(titleColor,splitLineStyle,axisLabelColor,areaColor,legendColor);
	$at.EchartController.addEchart(document.getElementById("echart8"),option8);
	echart4.on('click', function (params) {
		echart4Event(params)
	});
	function echart4Event(params){
		 console.log(params);
	}
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
		title: {
	        text: '各产品型号Array工厂良率',
	        textStyle: {
                color: "#fff",
                fontSize: 16
            }
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['破案数','降水量'],
	        textStyle:{
	        	color:axisLabelColor
	        }
	    },
	    calculable : true,
	    xAxis :{
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            splitLine:{
            	lineStyle:{
            		color:areaColor
            	}
            },
            axisLine:{
            	lineStyle:{
            		color:areaColor
            	}
            },
            axisLabel:{
            	textStyle:{
            		color: "#fff",
            		fontSize:12
            	}
            }
        },
	    yAxis : {
            type : 'value',
            splitLine:{
            	lineStyle:{
            		color:splitLineStyle
            	}
            },
            axisLine:{
            	lineStyle:{
            		color:axisLabelColor
            	}
            },
            axisLabel:{
            	textStyle:{
            		color: "#fff",
            		fontSize:12
            	}
            }
        },
	    series : [
	        {
	            type:'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
	            itemStyle:{
	            	normal:{
	            		color:areaColor
	            	}
	            },
	            markPoint : {
	                data : [
	                    {name : '150MP_MBP', value : 2.0, xAxis: 0, yAxis: 2.0},
	                    {name : '150MP_MBP', value : 2.0, xAxis: 1, yAxis: 4.9},
	                    {name : '150MP_MBP', value : 2.0, xAxis: 2, yAxis: 7.0},
	                    {name : '150MP_MBP', value : 2.0, xAxis: 3, yAxis: 23.2},
	                    {name : '150MP_MBP', value : 2.0, xAxis: 4, yAxis: 25.6},
	                    {name : '150MP_MBP', value : 2.0, xAxis: 5, yAxis: 76.7},
	                    {name : '150MP_MBP', value : 2.0, xAxis: 6, yAxis: 135.6},
	                    {name : '150MP_MBP', value : 2.0, xAxis: 7, yAxis: 162.2},
	                    {name : '150MP_MBP', value : 2.0, xAxis: 8, yAxis: 32.6},
	                    {name : '150MP_MBP', value : 2.0, xAxis: 9, yAxis: 20.0},
	                    {name : '150MP_MBP', value : 2.0, xAxis: 10, yAxis: 6.4},
	                    {name : '150MP_MBP', value : 2.0, xAxis: 11, yAxis: 3.3}
	
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
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
	                    color: '#005ca2'
	                }
	            }
	        }
	    ]
	};
	return option
}
$at.EchartController.level6 = function(titleColor,axisLabelColor,splitLineStyle,areaColor,legendColor){
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
$at.EchartController.level7 = function(titleColor,axisLabelColor,splitLineStyle,areaColor,legendColor){
	var option = {
		title: {
	        text: 'Befor Repair Yield',
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
	            stack: '点位',
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
	        },
	        {
	            name:'正在施工',
	            type:'bar',
	            stack: '搜索引擎',
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
	            stack: '搜索引擎',
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
