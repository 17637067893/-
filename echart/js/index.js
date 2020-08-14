var yearData = [
  {
    year: '2020',  // 年份
    data: [  // 两个数组是因为有两条线
         [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
         [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
  },
  {
    year: '2021',  // 年份
    data: [  // 两个数组是因为有两条线
         [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
     [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
  }
 ];

// 柱状图1模块
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      //鼠标悬浮的样式
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    //调整表格的大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "旅游",
          "教育",
          "游戏",
          "医疗",
          "电商",
          "社交",
          "金融"
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "35%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 数据变化
  var dataAll = [
    { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
    { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
  ];

  $(".bar h2 ").on("click", "a", function() {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();
//放到柱状图
(function(){
   // 实例化对象
   var myChart = echarts.init(document.querySelector(".bar1 .chart"));

   var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
   //配置项
   option = {
    grid: {
        top: "10",
        left: '22%',
        right: '10%',
        bottom: '3%',
        // containLabel: true
    },
    xAxis: {
        //不显示X轴 
        show:false,
        type: 'value',
        boundaryGap: [0, 0.01],
        lineStyle: {
          color: "rgba(255,255,255,0)"
          // width: 1,
          // type: "solid"
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,0)"
          }
        },
        //去掉刻度
        axisTick:{
          show:false
        },
        //文字颜色
        axisLabel:{
          color:'#4c9bfb'
        }
        
    },
    yAxis: [
      {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '韩国', '中国'],
        //不显示Y轴
        axisLine:{
          show:false
        },
        yAxisIndex:1,
        //不显示分割线
        splitLine:{
          show:false
        },
        //不显示刻度
        axisTick:{
          show:false
        },
        //文字颜色为白色
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255)",
            fontSize: "10"
          }
        },
    },
    {
      type: 'category',
      data: ['666', '777', '888', '555', '999', '666'],
      //不显示Y轴
      axisLine:{
        show:false
      },
      
     
      //文字颜色为白色
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255)",
          fontSize: "10"
        }
      },
  },
    ],
    series: [
      {
          name: '条',
          type: 'bar',
          data: [10, 20, 30, 40, 50, 60],
          //修改圆角
          itemStyle:{
            barBorderRadius:20,
            color:function(param){
              return myColor[param.dataIndex]
            }
          },
          //柱子 的距离
          barCategoryGap:50,
          barWidth:12,
          //珠子内显示的文字
          label:{
            show:true,
            //柱子内显示
            position:'inside',
            //显示的格式
            formatter:'{c}%',
            fontSize:8,
            padding: [2, 0, 0, 0]
            
          },
          yAxisIndex:0,
      },
      {
          name: '框',
          type: 'bar',
          barCategoryGap:50,
          barWidth:15,
          data: [100, 100, 100, 100, 100, 100],
          itemStyle:{
            color:'none',
            borderColor:'#00c1de',
            barBorderRadius:15
          },
          barWidth:10,
          yAxisIndex:1,
      }
  ]
};
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


//折线图
(
  function(){
    var myChart = echarts.init(document.querySelector(".line .chart"));

  var   option = {
     //更改折线的颜色
     color:['#00f2f1','#ed3f35'],
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: ['邮件营销', '联盟广告'],
          textStyle:{
            color:'#4c9bfb'
          },
          right:'10%'
      },
      grid: {
        top:'20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
          //显示边框
          show:true,
          borderColor:'#012f4a',//显示边框颜色
          containLabel:true //包含刻度文字在内
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
           //不显示分割线
            splitLine:{
              show:false
            },
            //不显示刻度
            axisTick:{
              show:false
            },
            //去除坐标轴
            axisLine:{
              show:false
            },
            axisLabel:{
              textStyle:{
                color: "rgba(255,255,255,.7)",
                 fontSize: "10"
              }
            }
            
      },
      yAxis: {
          type: 'value',
           //不显示刻度
           axisTick:{
            show:false
          },
          //去除坐标轴
          axisLine:{
            show:false
          },
          axisLabel:{
            textStyle:{
              color: "rgba(255,255,255,.7)",
               fontSize: "10"
            }
          },
          boundaryGap: false,
          //y轴分割线颜色
          splitLine:{
            lineStyle:{
              color:"#012fa"
            }
          },
      },
      series: [{
        name:'新增粉丝',
        data:yearData[0].data[0],
        type: 'line',
        //折线平滑显示
        smooth: true
      },{
        name:'新增游客',
        data:yearData[0].data[1],
        type: 'line',
        smooth: true
        }
      ]
  };

  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  
   //跟换数据
  $('.line h2').on('click','a',function(){
    console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    //重新渲染
    myChart.setOption(option);
  })
  }
)();



// 折线图——播放量
(function(){
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  var option = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        top:'0%',
        textStyle:{
          color:'rgba(255,255,255,.5)',
          fontSize:'12'
        }
    },
    grid: {
        left: '10',
        top:'30',
        right: '10',
        bottom: '10',
        // containLabel: true,
        //显示边框
        show:true,
        borderColor:'#012f4a',//显示边框颜色
        containLabel:true //包含刻度文字在内
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
            axisLabel:{
              textStyle:{
                color:"rgba(255,255,255,.6)",
                fontSize:12
              }
            },
            axisLine:{
              lineStyle:{
                color:'rgba(255,255,255,.2)'
              }
            },
            //隐藏刻度
            axisTick:{
              show:false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine:{
              show:false
            },
            //修改y轴文字颜色
            axisLabel:{
              textStyle:{
                color:"rgba(255,255,255,.6)",
                fontSize:12
              }
            },
              //修改y轴颜色
            axisLine:{
              lineStyle:{
                color:'rgba(255,255,255,.2)'
              }
            },
            //隐藏刻度
            axisTick:{
              show:false
            },
            splitLine:{
              lineStyle:{
                color:"rgba(255,255,255,.1)"
              }
            }
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            //修改折线的颜色
            lineStyle:{
              color:'green',
              width:'2'
            },
            //填充颜色
            areaStyle: {
              // 渐变色，只需要复制即可
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
        },
         //折线上小圆点
         // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        showSymbol:false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
      },
      data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
            smooth:true,
            
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {
                // 渐变色，只需要复制即可
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        showSymbol:false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "red",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
      },
      data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
            smooth:true
        }
      ]
  };
  
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
})();


(function(){
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  var option = {
    color: [
      "#065aab",
      "#066eab",
      "#0682ab",
      "#0696ab",
      "#06a0ab",
    ],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      //距离底部距离
        bottom: "0%",
        //小图标的大小
        itemWidth:10,
        itemHeight:10,
        textStyle:{
          color:'rgba(255,255,255,.5)',
          fontSize:'10'
        },
        data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            // emphasis: {
            //     label: {
            //         show: true,
            //         fontSize: '30',
            //         fontWeight: 'bold'
            //     }
            // },

            //图形所在的位置
            center:['50%','50%'],
            //修改内圆半径和外圆半径 百分比相对于就容器宽度
            radius:['40%','70%'],
            //不显示标签文字
            label:{show:false},
            //连线
            labelLine: {
                show: false
            },
            data: [
              { value: 1, name: "0岁以下" },
              { value: 4, name: "20-29岁" },
              { value: 2, name: "30-39岁" },
              { value: 2, name: "40-49岁" },
              { value: 1, name: "50岁以上" }
     ] ,
        }
    ]
};

  myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
})();

//南丁格尔玫瑰图
(function(){
  var myChart = echarts.init(document.querySelector(".pie1 .chart"));
   var option = {
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['云南', '北京', '山东', '河北', '江苏', '浙江'],
        itemWidth:10,
        itemHeight:10,
        textStyle:{
          color:"rgba(255,255,255,.5)"
        }
    },
    series: [
        {
            name: '面积模式',
            type: 'pie',
            //控制大小
            radius: ['10%', '70%'],

            center: ['50%', '40%'],
            // roseType: 'area',
            roseType: "radius",
            //修改引导线的长度
            labelLine:{
              length:5,
              length2:10
            },
            data: [
              { value: 20, name: '云南' },
              { value: 26, name: '北京' },
              { value: 24, name: '山东' },
              { value: 25, name: '河北' },
              { value: 20, name: '江苏' },
              { value: 25, name: '浙江' },
              // { value: 30, name: '四川' },
              // { value: 42, name: '湖北' }
            ]
        }
    ]
};
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();