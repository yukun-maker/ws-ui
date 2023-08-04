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
        <div v-if="$store.state.tab.homeTags && $store.state.tab.homeTags.length > 1">
          <ws_home_tag></ws_home_tag>
        </div>
        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

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
  created() {
    this.initTags()
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapMutations(['updateHomeTags']),
    initTags() {
      const currTags = this.$store.state.tab.homeTags
      const sessionTags = window.sessionStorage.getItem('tags')
      if ((!currTags || currTags.length === 0) && sessionTags) {
        this.updateHomeTags(JSON.parse(sessionTags))
      }
    }
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
