<template>
  <div class="home">
    <el-container style="height: 100vh">
      <el-aside :width="isCollapse ? 'auto' : '200px'">
        <ws_aside></ws_aside>
      </el-aside>
      <el-container>
        <el-header>
          <ws_header></ws_header>
        </el-header>
        <ws_home_tag></ws_home_tag>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    ws_aside: () => import('./common/ws_aside'),
    ws_header: () => import('./common/ws_header'),
    ws_home_tag: () => import('./common/ws_home_tag')
  },
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  padding: 0;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: left;
}
.el-main {
  padding: 15px;
}
</style>
