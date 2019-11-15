<template>
  <div>
    <h4 class="title1">推荐歌单<span class="title2">更多 ></span></h4>
    <div class="row">
      <div class="td">
        <div class="img">
          <img src="../assets/gedanpic.png">
          <div class="title"><img src="../assets/png/images1/ln_player_center_play.png"><span>38.8万次</span></div>
        </div>
        <p>每日为你精选好歌</p>
      </div>
      <div class="td">
        <div class="img">
          <img src="../assets/gedanpic.png">
          <div class="title"><img src="../assets/png/images1/ln_player_center_play.png"><span>38.8万次</span></div>
        </div>
        <p>伤感|想你，思念的种子又开始了了</p>
      </div>
      <div class="td">
        <div class="img">
          <img src="../assets/gedanpic.png">
          <div class="title"><img src="../assets/png/images1/ln_player_center_play.png"><span>38.8万次</span></div>
        </div>
        <p>那些年，林夕写给张国荣唱的歌</p>
      </div> 
    </div> 
    <div class="row">
      <div class="td">
        <div class="img">
          <img src="../assets/gedanpic.png">
          <div class="title"><img src="../assets/png/images1/ln_player_center_play.png"><span>38.8万次</span></div>
        </div>
        <p>【流行】极致哈哈哈哈哈哈哈哈好好好好好</p>  
      </div>
      <div class="td">
        <div class="img">
          <img src="../assets/gedanpic.png">
          <div class="title"><img src="../assets/png/images1/ln_player_center_play.png"><span>38.8万次</span></div>
        </div>
        <p>【奥特曼】每个孩子的英雄</p>
      </div>
      <div class="td">
        <div class="img">
          <img src="../assets/gedanpic.png">
          <div class="title"><img src="../assets/png/images1/ln_player_center_play.png"><span>38.8万次</span></div>
        </div>
        <p>影视仙踪|千年修炼只为爱情</p>
      </div> 
    </div> 
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
 .title1{
   text-align: left;
   margin-left: 15px;
   margin-bottom: 10px;
 }
 .title2{
   font-weight: normal;
   font-size: 12px;
   color: #bbb;
   text-align: right;
   float: right;
   margin-right: 15px;
 }
 .row{
   display: flex;
   justify-content: space-around;
   align-items: center;
 }
 .td>p{
  text-align: left;
  margin-top: 3px;
  font-size: 13px;
  height:33px;
  line-height: 17px;
  width:100px; 
  overflow:hidden;
  display: -webkit-box;  
  text-overflow: ellipsis;  
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
 }
 .img{
   position: relative;
 }
 .img>img{
   border-radius: 2px;
   width:100px;
   height:100px;
 }
 .title{
  font-size: 12px;
  position: absolute;
  bottom: 5px;left: 10px;
  margin: 0 auto;
 }
 .title>img{
   width:15px;
   height:15px;
 }

</style>