import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Customer from '@/views/customer'
import Product from '@/views/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/Customer',
          name: 'Customer',
          component: Customer
        }, {
          path: '/Product',
          name: 'Product',
          component: Product
        }
      ]
    }
  ]
})
