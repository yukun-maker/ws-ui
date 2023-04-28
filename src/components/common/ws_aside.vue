<template>
  <div class="asideContainer">
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      background-color="rgb(50,65,87)"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
    >
      <h3>{{ isCollapse ? 'WS' : 'WS管理系统' }}</h3>
      <el-menu-item :index="menuData[0].name" :key="menuData[0].name" @click="clickMenu(menuData[0])">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </el-menu-item>
      <el-submenu v-for="item in menuData.filter(el => el.children)" :index="item.name" :key="item.name">
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item v-for="child in item.children"
                      :index="child.name"
                      :key="child.name"
                      @click="clickMenu(child)"
        >{{ child.label }}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "ws_aside",
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  data() {
    return {
      menuData: this.$fakeData.getMenuList()
    }
  },
  methods: {
    clickMenu(item) {
      if (this.$route.path !== item.path && (this.$route.path !== '/HomePage' || item.path !== '/')) {
        this.$router.push(item.path)
      }
    }
  }
}
</script>

<style scoped lang="less">
.el-menu {
  height: 100vh;
  border-right: none;
  h3 {
    color: white;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
