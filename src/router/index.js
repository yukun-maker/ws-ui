import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import HomePage from '@/components/pages/HomePage'
import CustomerList from '@/components/pages/customer/CustomerList'
import CommonCustomer from '@/components/pages/customer/CommonCustomer'
import AllOrder from '@/components/pages/order/AllOrder'
import MyOrder from '@/components/pages/order/MyOrder'
import ElementTest from '@/components/pages/test/ElementTest'
import AssetSplit from '@/components/pages/assetSplit'
import formItemCheckBox from '@/components/pages/test/formItemCheckBox'
import hugeDataTable from '@/components/pages/test/hugeDataTable'
import myTable from '@/components/pages/test/myTable'
import Login from '@/components/common/login'

Vue.use(Router)
// 解决菜单或路由重复跳转报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'HomePage',
      children: [
        {
          path: '/HomePage',
          name: 'homePage',
          component: HomePage
        }, {
          path: '/CustomerList',
          name: 'customerList',
          component: CustomerList
        }, {
          path: '/CommonCustomer',
          name: 'commonCustomer',
          component: CommonCustomer
        }, {
          path: '/AllOrder',
          name: 'allOrder',
          component: AllOrder
        }, {
          path: '/MyOrder',
          name: 'myOrder',
          component: MyOrder
        }, {
          path: '/elementTest',
          name: 'elementTest',
          component: ElementTest
        }, {
          path: '/assetSplit',
          name: 'assetSplit',
          component: AssetSplit
        }, {
          path: '/formItemCheckBox',
          name: 'formItemCheckBox',
          component: formItemCheckBox
        }, {
          path: '/hugeDataTable',
          name: 'hugeDataTable',
          component: hugeDataTable
        }, {
          path: '/myTable',
          name: 'myTable',
          component: myTable
        }
      ]
    }, {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ]
})
