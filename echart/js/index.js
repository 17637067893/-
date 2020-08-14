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
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业"
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
})();


//折线图
(
  function(){
    var myChart = echarts.init(document.querySelector(".line .chart"));

  var   option = {
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
      series: [
          {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
          }
      ]
  };

  myChart.setOption(option);
  }
)();

