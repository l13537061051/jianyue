<template>
  <div class="login">
    <router-link to="/" class="out">
      <img src="../../assets/png/images3/out.png" />
    </router-link>
    <img class="logo" src="../../assets/logo.png" />
    <div class="login-reg">
      <span :class="regChange?'active':''" @click="Change(0)">登录</span>|
      <span :class="regChange?'':'active'" @click="Change(1)">注册</span>
    </div>
    <div class="form" v-if="regChange">
      <input
        type="Number"
        oninput="if(value.length>11)value=value.slice(0,11)"
        v-model="loginPhone"
        placeholder="请输入手机号"
      />
      <input type="password" maxlength="30" v-model="loginPwd" placeholder="请输入密码" />
      <button @click="login">登录</button>
    </div>
    <div class="form" v-else>
      <input
        type="Number"
        oninput="if(value.length>11)value=value.slice(0,11)"
        v-model="regPhone"
        placeholder="请输入手机号"
      />
      <input type="password" maxlength="30" v-model="regPwd" placeholder="设置登录密码,不少于6位" />
      <input type="password" maxlength="30" v-model="cpwd" placeholder="再次确认密码" />
      <button @click="reg">注册</button>
    </div>
  </div>
</template>
<script>
import Qs from "qs";

export default {
  data() {
    return {
      loginPhone: "", //登录的手机号
      loginPwd: "", //登录的密码
      regChange: true, //登录和注册表单切换
      status: 0, //记录状态
      regPhone: "", //注册的手机号
      regPwd: "", //注册的密码
      cpwd: "" //二次确认密码
    };
  },
  methods: {
    login() {
      let loginPhone = this.loginPhone;
      let loginPwd = this.loginPwd;
      let url = "/users/login";
      let obj = { loginPhone, loginPwd };
      if (!loginPhone || !loginPwd) {
        this.$toast("用户名或密码不能为空");
        return;
      }
      this.axios
        .post(url, Qs.stringify(obj))
        .then(res => {
          if (res.data.ok == 1) {
            this.$toast("登录成功");
            this.$router.push("/");
            localStorage.setItem("login", res.data.msg[0].uid);
          }
          if (res.data.ok == 0) {
            this.$toast(res.data.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    reg() {
      let regPhone = this.regPhone;
      let regPwd = this.regPwd;
      let cpwd = this.cpwd;
      let phoneReg = /^1[3-9]\d{9}$/g;
      let pwdReg = /^[\w]{6,30}$/g;
      let url = "/users/register";
      let obj = { regPhone, regPwd };
      if (!regPhone || !regPwd || !cpwd) {
        this.$toast("用户名或密码不能为空");
        return;
      }
      if (!phoneReg.test(regPhone) || !pwdReg.test(regPwd)) {
        this.$toast("用户名或密码格式错误");
        return;
      }
      if (regPwd !== cpwd) {
        this.$toast("两次输入密码不相同");
        return;
      }
      this.axios
        .post(url, Qs.stringify(obj))
        .then(res => {
          if (res.data.ok == 1) {
            this.$toast("注册成功");
            this.regChange = true;
          }
          if (res.data.ok == 0) {
            this.$toast(res.data.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    Change(i) {
      if (i == this.status) {
        return;
      } else {
        this.status = i;
      }
      this.regChange = this.regChange ? false : true;
    }
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/png/bk.jpg") no-repeat;
  background-size: 100%;
  box-sizing: border-box;
  position: relative;
}
.logo {
  margin: 0 auto;
  margin-top: 10%;
}
.form {
  color: #fff;
  margin: 0 auto;
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
.login-reg {
  color: #fff;
  width: 100%;
  margin: 0 auto;
  margin-top: 10%;
}
.login-reg > span:first-child {
  margin-right: 5%;
}
.login-reg > span:last-child {
  margin-left: 5%;
}
.active {
  color: #53bdff;
}
.out {
  position: absolute;
  top: 5%;
  left: 10%;
}
</style>