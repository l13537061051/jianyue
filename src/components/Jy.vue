<template>
  <div class="home-page">
    <mt-tab-container class="mt-container-wrap" v-model="active">
      <mt-tab-container-item id="home">
        <home></home>
      </mt-tab-container-item>
      <mt-tab-container-item id="list">
        <Song></Song>  
      </mt-tab-container-item>
      <!-- <mt-tab-container-item id="musicplay">
      </mt-tab-container-item> -->
      <mt-tab-container-item id="mv">MV/视频组件</mt-tab-container-item>
      <mt-tab-container-item id="me">
        我的页面组件
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar class="mt-tab-wrap" v-model="active">
      <mt-tab-item id="home">
        <img slot="icon" src="../assets/shouye.png" v-if="active=='home'">
        <img slot="icon" src="../assets/shouye_no.png" v-else>     
        首页
      </mt-tab-item>
      <mt-tab-item id="list">
        <img slot="icon" src="../assets/liebiao.png" v-if="active=='list'">
        <img slot="icon" src="../assets/liebiao_no.png" v-else>
        曲库
      </mt-tab-item>
      <!-- <mt-tab-item id="musicplay">
        <router-link to="Musicplay">
          <img slot="icon" src="../assets/png/images1/ln_player_center_play.png" />
        </router-link>
      </mt-tab-item> -->
      <router-link to="Musicplay" style="background:#fff;" id="musicrouter">
        <img id="musicplay" src="../assets/png/images1/ln_player_center_play.png">
      </router-link>
      <mt-tab-item id="mv">
        <img slot="icon" src="../assets/shipin.png" v-if="active=='mv'">
        <img slot="icon" src="../assets/shipin_no.png" v-else>
        视频
      </mt-tab-item>
      <mt-tab-item id="me">
        <img slot="icon" src="../assets/wode.png" v-if="active=='me'">
        <img slot="icon" src="../assets/wode_no.png" v-else>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Home from "./Home.vue";
import Song from "../views/Song";
export default {
  data(){
    return {
      active:"home",
      // Musicplay:"/Musicplay"
    }
  },
  components:{
    "home":Home,
    Song
  },
  methods:{

  }

}
</script>
<style scoped>
#musicplay{
  width:38px;
  height:38px;
  padding: 7px;
  vertical-align: middle; 
}
#musicrouter{
  margin: auto; 
}
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
/* #musicplay{
  display: flex;
  justify-content: center;
  border-radius: 50%;
  background: #ddd;
} */
.mint-tabbar > .mint-tab-item,.mint-tabbar > .mint-tab-item.is-selected{
  background: #fff;
  margin: auto;
}
.mint-tabbar > .mint-tab-item{
  color: #ccc;
}
.mint-tabbar > .mint-tab-item.is-selected{
  font-weight: 560;
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
  background: #fff;
}
.mt-container-wrap mt-tab-container-item {
  height: 100%;
}
</style>