<template>
  <div class="header-container">
    <div class="left-container">
      <el-button icon="el-icon-menu" size="medium" @click="collapseMenu"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.path">
          {{ item.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
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
import {mapState} from 'vuex'

export default {
  name: "ws_header",
  computed: {
    ...mapState({
      breadcrumbItems: state => state.tab.breadcrumbItemList
    })
  },
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
      display: flex;
      align-items: center;
      .el-breadcrumb {
        padding-left: 10px;
        /deep/ .el-breadcrumb__item{
          .el-breadcrumb__inner {
            font-weight: normal;
            &.is-link {
              color: #666;
            }
          }
          &:last-child {
            .el-breadcrumb__inner {
              color: #fff;
            }
          }
        }
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
