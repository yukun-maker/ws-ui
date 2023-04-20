<template>
  <div class="asideContainer">
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="0">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-submenu v-for="item in menuData" :index="item.name" :key="item.name">
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item v-for="child in item.children" :index="child.name" :key="child.name">{{ child.label }}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "ws_aside",
  data() {
    return {
      menuData: [
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
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
