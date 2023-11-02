<!-- 首页 -->
<template>
  <div id="homePage">
    <el-row>
      <el-col :span="8">
        <!-- 用户信息 -->
        <el-card class="box-card">
          <div class="user">
            <img src="@/assets/images/astronaut.png"/>
            <div class="user-info">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间:<span>2023-04-27 15:27:26</span></p>
            <p>上次登录地点:<span>上海</span></p>
          </div>
        </el-card>
        <!-- 表格 -->
        <el-card class="box-card" style="margin-top: 10px">
          <el-table
            :data="tableData"
            style="width: 100%"
            height="40vh"
            :row-class-name="tableRowClassName"
            :infinite-scroll-disabled="loadMoreDisabled"
            v-el-table-infinite-scroll="loadMore"
          >
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </el-card>
        <!-- 柱状图 -->
        <el-card class="box-card" style="margin-top: 10px">
          <div ref="echarts_bar" style="height: 300px"></div>
        </el-card>
      </el-col>
      <el-col :span="16" style="padding-left: 10px">
        <!-- 系统公告 -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>系统公告</span>
          </div>
          <div style="height: 30vh; overflow-y: auto">
            <div v-for="item in systemData"
                 :key="item.id"
                 class="notice_item">
              <div>{{ item.title }}</div>
              <div><i :class="`el-icon-${item.icon}`"></i>{{ item.date }}</div>
            </div>
          </div>
        </el-card>
        <!-- 折线图 -->
        <el-card class="box-card" style="margin-top: 10px">
          <div ref="echarts_line" style="height: 400px"></div>
        </el-card>
        <!-- 散点图 -->
        <el-card class="box-card" style="margin-top: 10px">
          <div ref="echarts_scatter" style="height: 500px"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import elTableInfiniteScroll from 'el-table-infinite-scroll'

export default {
  name: "HomePage",
  directives: {
    'el-table-infinite-scroll': elTableInfiniteScroll
  },
  data() {
    return {
      tableData: this.$fakeData.getHomePageTable(),
      systemData: this.$fakeData.getNotices(),
      loadMoreDisabled: false
    }
  },
  mounted() {
    // 初始化图表
    this.initEcharts()
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    // 初始化图表
    initEcharts() {
      // 柱状图
      let myEcharts = echarts.init(this.$refs.echarts_bar);
      myEcharts.setOption(this.$fakeData.getBarOptions())
      // 折线图
      myEcharts = echarts.init(this.$refs.echarts_line);
      myEcharts.setOption(this.$fakeData.getLineOptions())
      // 散点图
      myEcharts = echarts.init(this.$refs.echarts_scatter);
      myEcharts.setOption(this.$fakeData.getScatterOptions())
    },
    loadMore() {
      console.log('loadMore');
      this.loadMoreDisabled = true
      this.$confirm('是否加载更多数据？', '提示', {
        type: 'warning',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        this.tableData = this.tableData.concat([{
          date: '2016-05-02',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '陈小龙2',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '马大帅2',
          address: '上海市普陀区金沙江路 1518 弄',
        }])
        // this.loadMoreDisabled = false
      }).catch(() => {
        this.loadMoreDisabled = false
      }).finally(() => {
        this.loadMoreDisabled = false
      })
    }
  }
}
</script>

<style lang="less">
#homePage {
  .user {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    padding-bottom: 20px;
    img {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      margin-left: 40px;
    }
    .user-info {
      margin-left: 40px;
      .name {
        font-size: 32px;
        margin-bottom: 10px;
      }
      .access {
        color: #999;
      }
    }
  }
  .login-info {
    p {
      line-height: 28px;
      font-size: 14px;
      color: #999999;
      span {
        color: #666666;
        margin-left: 20px;
      }
    }
  }
  .el-table .warning-row {
    background: oldlace;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
  .notice_item {
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(242,242,242);
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
