<template>
  <div class="login_container">
    <div class="login_form">
      <p class="login_title">WS客户关系管理系统</p>
      <el-form
        :model="form"
        :rules="rules"
        status-icon
        label-width="90px"
        class="demo-ruleForm">
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="form.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="login_btn">
        <el-button type="primary" size="medium" @click="onLoginBtnClick">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: undefined,
        password: undefined,
      },
      rules: {
        username: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onLoginBtnClick() {
      if (this.form.username === 'admin' && this.form.password === '111111') {
        this.$router.push('/')
      } else {
        this.$alert('账号或密码错误', '提示')
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .login_container{
    width:100%;
    height: 100vh;
    background-color: rgba(242, 242, 242, 1);
    background-image: url(../../assets/images/login_bg.jpg);
    background-position: center bottom;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: 100vw 100vh;
    background-origin: border-box;
    border: none;
    border-radius: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    .login_form {
      width: 400px;
      margin: 0px auto 0px 60%;
      padding: 0 55px 15px 35px;
      background-color: #fff;
      border: none;
      border-radius: 5px;
      // 添加阴影效果
      box-shadow: 0 0 25px #cac6c6;
      .login_title {
        font-family: '微软雅黑 Bold', '微软雅黑';
        font-weight: 700;
        text-decoration: none;
        color: #2d71bb;
        font-size: 32px;
        margin-top: 50px;
        margin-bottom: 30px;
        text-align: center;
      }
      .login_btn {
        text-align: center;
      }
    }
  }
</style>
