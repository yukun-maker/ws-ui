import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import HomePage from '@/components/pages/HomePage'
import CustomerList from '@/components/pages/customer/CustomerList'
import CommonCustomer from '@/components/pages/customer/CommonCustomer'
import AllOrder from '@/components/pages/order/AllOrder'
import MyOrder from '@/components/pages/order/MyOrder'

Vue.use(Router)

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
        }
      ]
    }
  ]
})
