<template>
  <div class="hello">
    <el-container>
      <el-aside width="200px">
        <ws_aside></ws_aside>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
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
    ws_aside: () => import('./common/ws_aside')
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
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: left;
}
</style>
