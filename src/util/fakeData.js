
export class fakeData {
  // 菜单列表
  static getMenuList() {
    return [
      {
        path: '/',
        label: '首页',
        icon: 's-home',
        name: 'homePage',
      },
      {
        label: '客户管理',
        icon: 'user',
        name:'customer',
        children: [
          {
            path: '/customerList',
            name: 'customerList',
            label: '客户列表',
            icon: 'setting',
            url: 'customer/customerList'
          },
          {
            path: '/commonCustomer',
            name: 'commonCustomer',
            label: '公海客户',
            icon: 'setting',
            url: 'customer/commonCustomer'
          }
        ]
      },
      {
        label: '订单管理',
        icon: 's-order',
        name:'order',
        children: [
          {
            path: '/allOrder',
            name: 'allOrder',
            label: '全部订单',
            icon: 'setting',
            url: 'order/allOrder'
          },
          {
            path: '/myOrder',
            name: 'myOrder',
            label: '我的订单',
            icon: 'setting',
            url: 'order/myOrder'
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
    ]
  }
}
