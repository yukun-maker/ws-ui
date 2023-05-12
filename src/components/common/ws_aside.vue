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
import {mapMutations} from 'vuex'

export default {
  name: "ws_aside",
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  data() {
    return {
      menuData: [],
      homePageItem: {
        path: '/',
        label: '首页',
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    ...mapMutations(['updateBreadcrumbItems', 'updateHomeTags']),
    init() {
      this.menuData = this.$fakeData.getMenuList()
      this.$store.commit('updateMenuPathMap', this.updateStateMenuPathMap(this.menuData))
    },
    // 更新全局变量路径-菜单集合
    updateStateMenuPathMap(menuList) {
      let tarMap = new Map()
      menuList.forEach(item => {
        tarMap.set(item.path, item)
        if (item.children) {
          tarMap = new Map([...tarMap, ...this.updateStateMenuPathMap(item.children)])
        }
      })
      return tarMap
    },
    clickMenu(item) {
      this.$router.push(item.path)
      if (item.path !== '/') {
        // 面包屑
        this.$store.commit('updateBreadcrumbItems', this.generateBreadcrumb(item))
        // 顶部Tag
        this.updateHomeTags(this.createTags(item))
      } else {
        this.$store.commit('updateBreadcrumbItems', [])
      }
    },
    // 构造面包屑数组
    generateBreadcrumb(menuItem) {
      let breadcrumb = [{path: menuItem.path, label: menuItem.label}]
      if (menuItem.parentPath && menuItem.parentPath !== 'root') {
        const parentMenu = this.$store.state.tab.menuPathMap.get(menuItem.parentPath)
        breadcrumb = this.generateBreadcrumb(parentMenu).concat(breadcrumb)
      }
      return breadcrumb
    },
    // 构造顶部Tag
    createTags(menuItem) {
      let tarTags = []
      const currTags = this.$store.state.tab.homeTags
      if (currTags.length === 0) {
        tarTags.push(this.homePageItem)
      }
      if (currTags.findIndex(el => el.path === menuItem.path) === -1) {
        tarTags.push({ path: menuItem.path, label: menuItem.label })
      }
      return tarTags
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
