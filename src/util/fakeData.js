import * as echarts from 'echarts'

export class fakeData {
  // 菜单列表
  static getMenuList() {
    return [
      {
        path: '/',
        label: '首页',
        icon: 's-home',
        name: 'homePage',
        parentPath: 'root'
      },
      {
        path: '/customer',
        label: '客户管理',
        icon: 'user',
        name:'customer',
        type: 'catalog',
        parentPath: 'root',
        children: [
          {
            path: '/customerList',
            name: 'customerList',
            label: '客户列表',
            icon: 'setting',
            url: 'customer/customerList',
            type: 'menu',
            parentPath: '/customer'
          },
          {
            path: '/commonCustomer',
            name: 'commonCustomer',
            label: '公海客户',
            icon: 'setting',
            url: 'customer/commonCustomer',
            type: 'menu',
            parentPath: '/customer'
          }
        ]
      },
      {
        path: '/order',
        label: '订单管理',
        icon: 's-order',
        name:'order',
        type: 'catalog',
        parentPath: 'root',
        children: [
          {
            path: '/allOrder',
            name: 'allOrder',
            label: '全部订单',
            icon: 'setting',
            url: 'order/allOrder',
            type: 'menu',
            parentPath: '/order'
          },
          {
            path: '/myOrder',
            name: 'myOrder',
            label: '我的订单',
            icon: 'setting',
            url: 'order/myOrder',
            type: 'menu',
            parentPath: '/order'
          }
        ]
      },
      {
        path: '/test',
        label: '测试',
        icon: 's-order',
        name:'test',
        type: 'catalog',
        parentPath: 'root',
        children: [
          {
            path: '/elementTest',
            name: 'elementTest',
            label: '单组件测试',
            icon: 'setting',
            url: 'test/elementTest',
            type: 'menu',
            parentPath: '/test'
          }
        ]
      }
    ]
  }
  // 首页表格
  static getHomePageTable() {
    return [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      date: '2016-05-04',
      name: '陈小龙',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-01',
      name: '马大帅',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      date: '2016-05-03',
      name: '刘晓妮',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '陈小龙',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-01',
      name: '马大帅',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      date: '2016-05-03',
      name: '刘晓妮',
      address: '上海市普陀区金沙江路 1518 弄'
    }]
  }
  // 首页系统公告
  static getNotices() {
    return [
      {
        id: 1,
        date: "2022-10-26 09:10",
        title: "【热点分享】潍坊文旅局长在淄博烧烤摊疯狂揽客",
        icon:'timer'
      },
      {
        id: 2,
        date: "2022-10-25 10:28",
        title: "【娱乐】李亚鹏回应被强制执行4千万",
        icon:'timer'
      },
      {
        id: 3,
        date: "2022-10-24 10:10",
        title: "【文旅】改善消费条件 增强消费后劲",
        icon:'timer'
      },
      {
        id: 4,
        date: "2022-10-23 12:01",
        title: "【外媒】拜登宣布美国进入紧急状态",
        icon:'timer'
      },
      {
        id: 5,
        date: "2022-10-22 11:00",
        title: "【内部分享】如何建立良好的客户关系",
        icon:'timer'
      },
      {
        id: 6,
        date: "2022-10-21 21:09",
        title: "【内部调整】组织架构调整",
        icon:'timer'
      },
      {
        id: 11,
        date: "2022-10-25 10:28",
        title: "【娱乐】李亚鹏回应被强制执行4千万",
        icon:'timer'
      },
      {
        id: 13,
        date: "2022-10-24 10:10",
        title: "【文旅】改善消费条件 增强消费后劲",
        icon:'timer'
      },
      {
        id: 14,
        date: "2022-10-23 12:01",
        title: "【外媒】拜登宣布美国进入紧急状态",
        icon:'timer'
      },
      {
        id: 15,
        date: "2022-10-22 11:00",
        title: "【内部分享】如何建立良好的客户关系",
        icon:'timer'
      },
      {
        id: 16,
        date: "2022-10-21 21:09",
        title: "【内部调整】组织架构调整",
        icon:'timer'
      },
    ]
  }
  // 首页柱状图
  static getBarOptions() {
    return {
      title: {
        text: '柱状图示例',
        left: 'center'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    }
  }
  // 首页折线图
  static getLineOptions() {
    // prettier-ignore
    const data = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];
    const dateList = data.map(function (item) {
      return item[0];
    });
    const valueList = data.map(function (item) {
      return item[1];
    });
    return {
      // Make gradient line here
      visualMap: [
        {
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 400
        },
        {
          show: false,
          type: 'continuous',
          seriesIndex: 1,
          dimension: 0,
          min: 0,
          max: dateList.length - 1
        }
      ],
      title: [
        {
          left: 'center',
          text: 'Gradient along the y axis'
        },
        {
          top: '55%',
          left: 'center',
          text: 'Gradient along the x axis'
        }
      ],
      tooltip: {
        trigger: 'axis'
      },
      xAxis: [
        {
          data: dateList
        },
        {
          data: dateList,
          gridIndex: 1
        }
      ],
      yAxis: [
        {},
        {
          gridIndex: 1
        }
      ],
      grid: [
        {
          bottom: '60%'
        },
        {
          top: '60%'
        }
      ],
      series: [
        {
          type: 'line',
          showSymbol: false,
          data: valueList
        },
        {
          type: 'line',
          showSymbol: false,
          data: valueList,
          xAxisIndex: 1,
          yAxisIndex: 1
        }
      ]
    };
  }
  // 首页散点图
  static getScatterOptions() {
    const data = [
      [
        [28604, 77, 17096869, 'Australia', 1990],
        [31163, 77.4, 27662440, 'Canada', 1990],
        [1516, 68, 1154605773, 'China', 1990],
        [13670, 74.7, 10582082, 'Cuba', 1990],
        [28599, 75, 4986705, 'Finland', 1990],
        [29476, 77.1, 56943299, 'France', 1990],
        [31476, 75.4, 78958237, 'Germany', 1990],
        [28666, 78.1, 254830, 'Iceland', 1990],
        [1777, 57.7, 870601776, 'India', 1990],
        [29550, 79.1, 122249285, 'Japan', 1990],
        [2076, 67.9, 20194354, 'North Korea', 1990],
        [12087, 72, 42972254, 'South Korea', 1990],
        [24021, 75.4, 3397534, 'New Zealand', 1990],
        [43296, 76.8, 4240375, 'Norway', 1990],
        [10088, 70.8, 38195258, 'Poland', 1990],
        [19349, 69.6, 147568552, 'Russia', 1990],
        [10670, 67.3, 53994605, 'Turkey', 1990],
        [26424, 75.7, 57110117, 'United Kingdom', 1990],
        [37062, 75.4, 252847810, 'United States', 1990]
      ],
      [
        [44056, 81.8, 23968973, 'Australia', 2015],
        [43294, 81.7, 35939927, 'Canada', 2015],
        [13334, 76.9, 1376048943, 'China', 2015],
        [21291, 78.5, 11389562, 'Cuba', 2015],
        [38923, 80.8, 5503457, 'Finland', 2015],
        [37599, 81.9, 64395345, 'France', 2015],
        [44053, 81.1, 80688545, 'Germany', 2015],
        [42182, 82.8, 329425, 'Iceland', 2015],
        [5903, 66.8, 1311050527, 'India', 2015],
        [36162, 83.5, 126573481, 'Japan', 2015],
        [1390, 71.4, 25155317, 'North Korea', 2015],
        [34644, 80.7, 50293439, 'South Korea', 2015],
        [34186, 80.6, 4528526, 'New Zealand', 2015],
        [64304, 81.6, 5210967, 'Norway', 2015],
        [24787, 77.3, 38611794, 'Poland', 2015],
        [23038, 73.13, 143456918, 'Russia', 2015],
        [19360, 76.5, 78665830, 'Turkey', 2015],
        [38225, 81.4, 64715810, 'United Kingdom', 2015],
        [53354, 79.1, 321773631, 'United States', 2015]
      ]
    ];
    return {
      backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
        {
          offset: 0,
          color: '#f7f8fa'
        },
        {
          offset: 1,
          color: '#cdd0d5'
        }
      ]),
      title: {
        text: 'Life Expectancy and GDP by Country',
        left: '5%',
        top: '3%'
      },
      legend: {
        right: '10%',
        top: '3%',
        data: ['1990', '2015']
      },
      grid: {
        left: '8%',
        top: '10%'
      },
      xAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        scale: true
      },
      series: [
        {
          name: '1990',
          data: data[0],
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
          },
          emphasis: {
            focus: 'series',
            label: {
              show: true,
              formatter: function (param) {
                return param.data[3];
              },
              position: 'top'
            }
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              {
                offset: 0,
                color: 'rgb(251, 118, 123)'
              },
              {
                offset: 1,
                color: 'rgb(204, 46, 72)'
              }
            ])
          }
        },
        {
          name: '2015',
          data: data[1],
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
          },
          emphasis: {
            focus: 'series',
            label: {
              show: true,
              formatter: function (param) {
                return param.data[3];
              },
              position: 'top'
            }
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              {
                offset: 0,
                color: 'rgb(129, 227, 238)'
              },
              {
                offset: 1,
                color: 'rgb(25, 183, 207)'
              }
            ])
          }
        }
      ]
    };
  }
}
