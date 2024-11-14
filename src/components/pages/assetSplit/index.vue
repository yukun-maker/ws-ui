<template>
  <div>
    <el-container class="asset-split-container">
      <el-header class="asset-split-header">
        <el-button class="asset-split-header-btn" type="primary" size="mini" round icon="el-icon-document-add">分配</el-button>
        <el-button class="asset-split-header-btn" type="primary" size="mini" round icon="el-icon-finished" @click="scrollToBottom">保存</el-button>
      </el-header>
      <el-main class="asset-split-main">
        <el-backtop class="test_back_top" target=".asset-split-main">
          <div
            style="{
              height: 100%;
              width: 100%;
              background-color: #f2f5f6;
              box-shadow: 0 0 6px rgba(0,0,0, .12);
              text-align: center;
              line-height: 40px;
              color: #1989fa;
            }"
          >UP
          </div>
        </el-backtop>
        <el-row class="split_box" style="height: 70%">
          <el-col :span="12" class="grid-content out_part">
            <el-card>
              <split-out></split-out>
            </el-card>
          </el-col>
          <el-col :span="12" class="grid-content in_part">
            <el-card>
              <splitIn></splitIn>
            </el-card>
          </el-col>
        </el-row>
        <el-row class="result_box1" style="height: 50%">
          <el-col class="grid-content">
            <resultComp></resultComp>
          </el-col>
        </el-row>
        <el-row class="result_box" style="height: 50%">
          <el-col class="grid-content">
            <resultComp></resultComp>
          </el-col>
        </el-row>
        <el-row class="result_box" style="height: 50%">
          <el-col class="grid-content">
            <resultComp></resultComp>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {
    splitOut: () => import('./splitOut'),
    splitIn: () => import('./splitIn'),
    resultComp: () => import('./resultComp'),
  },
  methods: {
    scrollToBottom() {
      const dom = document.getElementsByClassName('asset-split-main')[0]
      const dom1 = document.getElementsByClassName('result_box1')[0]
      console.log(dom.scrollHeight, dom1.offsetTop);
      dom.scrollTo({
        // top: dom1.offsetTop - dom.offsetTop,
        top: 2000,
        behavior: 'smooth'
      })
      // window.scrollTo({
      //   top: document.getElementsByClassName('asset-split-main')[0].scrollHeight,
      //   behavior: 'smooth'
      // })
    }
  }
}
</script>

<style scoped>
.grid-content {
  height: 100%;
}
.grid-content div {
  height: 100%;
}
.asset-split-container {
  height: 85vh;
  overflow: auto;
}
.asset-split-header {
  background-color: #66b1ff57;
  height: 40px !important;
  line-height: 40px;
  padding: 0 10px;
}
.asset-split-header-btn {
  font-size: 16px;
  /*color: #333333e3;*/
}
.asset-split-header-btn>i {
  font-size: 18px;
}
.asset-split-main {
  background-color: #E9EEF3;
  padding: 0px;
  /*height: 100%;*/
  /*overflow: auto;*/
}
/deep/ .el-card__body {
  padding: 5px;
  height: inherit;
}
</style>
