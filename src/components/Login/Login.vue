<template>
  <div class="login">
    <img class="logo" src="../../assets/logo.png">
    <div class="form" v-if="registe">
      <input type="Number" maxlength="11" v-model="phone" placeholder="请输入手机号">
      <input type="password" maxlength="30" v-model="upwd" placeholder="请输入密码">
      <button @click="login">登录</button>
      <p class="registe">没有账号？
        <span @click="Change">注册</span>
      </p>
    </div>
    <div class="form" v-else>
      <input type="Number" maxlength="11" placeholder="请输入手机号">
      <input type="password" maxlength="30" placeholder="设置登录密码,不少于6位">
      <input type="password" maxlength="30" placeholder="再次确认密码">
      <button>注册</button>
      <p class="registe">已有账号？
        <span @click="Change">登录</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: "",
      upwd: "",
      registe: true
    }
  },
  methods: {
    login() {
      let phone = this.phone
      let upwd = this.upwd
      let phoneReg = /^1[3-9]\d{9}$/g
      let upwdReg = /^[a-z0-9]{6,30}$/ig
      if (!phone || !upwd) {
        this.$toast("用户名或密码不能为空")
        return
      }
      if (!phoneReg.test(phone) && !upwdReg.test(upwd)) {
        this.$toast("用户名或密码格式不正确")
        return
      }
    },
    Change() {
      if (this.registe) {
        this.registe = false
      } else {
        this.registe = true
      }
    }
  }
}
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/png/bk.jpg") no-repeat;
  background-size: 100%;
  box-sizing: border-box;
}
.logo {
  margin: 0 auto;
  margin-top: 10%;
}
.form {
  color: #fff;
  margin: 0 auto;
  margin-top: 10%;
  width: 70%;
  height: 40%;
}
.form input {
  font-size: 15px;
  color: #fff;
  outline: none;
  border-radius: 50px;
  border: 1px solid #fff;
  width: 85%;
  background: transparent;
  padding: 0 20px;
  height: 15%;
  margin-top: 10%;
}
.form > input:nth-child(5) {
  margin-top: 5%;
}

.form input::-webkit-input-placeholder {
  color: #ccc;
}
.form input::-moz-input-placeholder {
  color: #ccc;
}
.form input::-ms-input-placeholder {
  color: #ccc;
}
.form button {
  width: 100%;
  height: 15%;
  margin-top: 10%;
  border: none;
  border-radius: 50px;
  background: linear-gradient(120deg, #53bdff, #1da0ef);
  color: #fff;
}
.registe {
  color: #fff;
  text-align: center !important;
}
.registe > span {
  color: #53bdff;
}
</style>