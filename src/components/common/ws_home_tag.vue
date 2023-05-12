<template>
  <div class="home_tag">
    <el-tag
      v-for="item in tags"
      :key="item.label"
      :closable="item.path !== '/'"
      @click="onTagClicked(item)"
      @close="onTagClosed(item)"
      :effect="item.path === $route.path || item.path === '/' && $route.path === '/HomePage' ? 'dark' : 'plain'">
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: "ws_home_tag",
  computed: {
    ...mapState({
      tags: state => state.tab.homeTags
    })
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['closeTag']),
    onTagClicked(tagItem) {
      this.$router.push(tagItem.path)
    },
    onTagClosed(tagItem) {
      this.closeTag(tagItem)
    }
  }
}
</script>

<style lang="less" scoped>
  .home_tag{
    position: relative;
    background: #fff;
    border-bottom: 1px solid #0000001f;
    box-shadow: 0 5px 10px #ddd;
    padding-bottom: 5px;
    padding-top: 5px;
    padding-left: 10px;
    .el-tag{
      font-size: 16px;
      margin-right: 10px;
      cursor:pointer
    }
  }
</style>
