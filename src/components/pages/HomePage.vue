<!-- 首页 -->
<template>
  <div id="homePage">
    <el-row>
      <el-col :span="8">
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
        <el-card class="box-card" style="margin-top: 10px">
          <el-table
            :data="tableData"
            style="width: 100%"
            height="40vh"
            :row-class-name="tableRowClassName">
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
      </el-col>
      <el-col :span="16">
        <el-card class="box-card" style="margin-left: 10px">
          <div slot="header" class="clearfix">
            <span>系统公告</span>
          </div>
          <div style="height: 20vh; overflow-y: auto">
            <div v-for="item in systemData"
                 :key="item.id"
                 class="notice_item">
              <div>{{ item.title }}</div>
              <div><i :class="`el-icon-${item.icon}`"></i>{{ item.date }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      tableData: this.$fakeData.getHomePageTable(),
      systemData: this.$fakeData.getNotices()
    }
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
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
