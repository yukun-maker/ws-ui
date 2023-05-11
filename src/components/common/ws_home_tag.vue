<template>
  <div class="home_tag">
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="dark">
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: "ws_home_tag",
  data() {
    return {
      items: [
        { type: '', label: '标签一' },
        { type: '', label: '标签二' },
        { type: '', label: '标签三' },
        { type: '', label: '标签四' },
        { type: '', label: '标签五' }
      ]
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
