<template>
  <div>
    <div class="fixed">
      <searching></searching> 
        <mt-navbar class="page-part" v-model="active">
          <mt-tab-item id="t1">
            <span class="set">推荐</span>
          </mt-tab-item>
          <mt-tab-item id="t2">
            <span class="set">抖悦</span>
            </mt-tab-item>
          <mt-tab-item id="t3">
            <span class="set">MV</span>
            </mt-tab-item>
        </mt-navbar>
        
      </div><div class="bgb"></div>
      <mt-tab-container v-model="active"  :swipeable='true'>
        <mt-tab-container-item id="t1">
          <mt-cell style="background: transparent;"><tuijian style="margin-top:80px;"></tuijian></mt-cell>           
            <item></item>
            <gedan></gedan>
            <gedan></gedan> 
        </mt-tab-container-item>
        <mt-tab-container-item id="t2">
          <mt-cell>22222</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="t3">
          <mt-cell>33333</mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
  </div>
</template>
<script>
import Searching from "./Searching.vue"
import Tuijian from "./Tuijian.vue"
import Item from "./Item.vue"
import Gedan from "./gedan.vue"
export default {
  data(){
    return {
     active:"t1" 
    }
  },
  components:{
    "searching":Searching,
    "tuijian":Tuijian,
    "item":Item,
    "gedan":Gedan
  }
}
</script>
<style scoped>
  .fixed{
    position: fixed;
    width: 100%;
    z-index: 10;
  }
  .bgb{
    position: fixed;
    width: 100%;
    height: 120px;
    background: #1da0ef;

  }
  .mint-navbar .mint-tab-item{
    color:#eee;
    font-weight: 100;
  }
  .set{
    font-size: 14px;
    font-family: "微软雅黑";
   
  }
  .mint-navbar .mint-tab-item.is-selected{
    border-bottom: 3px solid #fff;
    color: #fff;
    margin-bottom: 3px;
    font-weight: 560;
    font-size: 15px;
  }
  
  .page-part{
    background: #1da0ef;
    color:#fff;
    height:40px;
    margin-top: -3px;
  }
  div.mint-cell-wrapper{
    background: #1da0ef;
    padding: 0;
  }

</style>
