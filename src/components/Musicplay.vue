<template>
  <div id="bg">
    <div class="head">
      <router-link to="/">
        <img src="../assets/png/images3/xia.png" alt="">
      </router-link>
    <span class="title">
      <h4>后来</h4>
      <span>刘若英</span> >
    </span>
    <img src="../assets/png/images3/fenxiang.png" alt="">
    </div>
    <lyric></lyric>
    <div class="fixed">
      <div class="function">
        <img src="../assets/png/images3/xin.png" alt="">
        <img src="../assets/png/images3/xiazai.png" alt="">
        <img src="../assets/png/images3/video.png" alt="">
        <img src="../assets/png/images3/pinglun.png" alt="">
        <img src="../assets/png/images3/sandian.png" alt="">
      </div>
      <slider id="slider"></slider>
      <playitem></playitem>
    </div>
  </div>
</template>
<script>
import slider from "./slider";
import playitem from "./playitem";
import lyric from "./lyric";
export default {
  data(){
    return {
    }
  },
  methods:{
  },
components:{
  slider,playitem,lyric
  }
}
</script>
<style scoped>
.fixed{
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 10px auto;
}
#bg{
  width: 100%;
  height: 100%;
  background-image: url(../assets/png/bk.jpg);
  background-repeat:  no-repeat;
  background-size: 100% 100%;
  color: #fff;
}

#slider{
  margin:30px auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.head{
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head img{
  width: 20px;
  height:20px;
  margin: 10px;
}
.title{
  font-size: 14px;
  font-weight: 100;
}
h4{
  margin: 0;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 560;
}
.function{
  display: flex;
  justify-content: space-around;
} 
.function>img{
  width:30px;
  height:27px;
}
</style>