<template>
  <div class="header-container">
    <div class="left-container">
      <el-button icon="el-icon-menu" size="medium" @click="collapseMenu"></el-button>
      <span class="breadcrumb-text">首页</span>
    </div>
    <div class="right-container">
      <el-dropdown>
        <span>
          <img class="profile_photo" src="@/assets/images/astronaut.png"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "ws_header",
  methods: {
    collapseMenu() {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style scoped lang="less">
  .header-container {
    background-color: #242f42;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-container {
      padding-left: 20px;
      .breadcrumb-text {
        color: white;
        font-size: 16px;
        margin-left: 10px;
      }
    }
    .right-container {
      padding-right: 20px;
      .profile_photo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
</style>
