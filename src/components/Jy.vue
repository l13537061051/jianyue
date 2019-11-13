<template>
  <div>
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="home">
        <home></home>
      </mt-tab-container-item>
      <mt-tab-container-item id="list">列表/排行榜组件</mt-tab-container-item>
      <mt-tab-container-item id="mv">MV/视频组件</mt-tab-container-item>
      <mt-tab-container-item id="me" >
        <login></login>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar fixed v-model="active">
      <mt-tab-item id="home">
        <img slot="icon" src="../assets/shouye_no.png" alt="">
        首页
      </mt-tab-item>
      <mt-tab-item id="list">
        <img slot="icon" src="../assets/liebiao_no.png" alt="">
        曲库
      </mt-tab-item>
      <mt-tab-item id="mv">
        <img slot="icon" src="../assets/shipin_no.png" alt="">
        视频
      </mt-tab-item>
      <mt-tab-item id="me">
        <img slot="icon" src="../assets/wode_no.png" alt="">
        我的
      </mt-tab-item>

    </mt-tabbar>
  </div>
</template>

<script>
import Login from './Login/Login.vue'
import Home from "./Home.vue";
export default {
  data(){
    return {
      active:"home"
    }
  },
  components:{
    "home":Home,
    "login":Login
  }

}
</script>
<style scoped>
.home-page {
  height: 100%;
  display:flex;
  flex-direction: column;
}
.mt-container-wrap{
  /* flex: 1; */
  /* flex: 9; */
  height: 92%;
  overflow-y: scroll;
  margin-right: -10px;
  padding-right: 10px;
  /* padding: 0 10%; */
}
.mt-container-wrap >>> .mint-tab-container-wrap {
  height: 100%;
}
.home-page >>> .mt-tab-wrap {
  position:inherit;
  bottom: auto;
  left: auto;
  top: auto;
  right: auto;
  /* flex: 1; */
  height: 8%;
}
.mt-container-wrap mt-tab-container-item {
  height: 100%;
}
</style>