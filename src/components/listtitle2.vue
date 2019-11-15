<template>
  <div class="banner">
    <div>
      <div><img src="../assets/png/images3/xin.png"><br><span>562</span></div>
      <div><img src="../assets/png/images3/pinglun.png"><br><span>78</span></div>
      <div><img src="../assets/png/images3/xiazai.png"><br><span>下载</span></div>
      <div><img src="../assets/png/images3/fenxiang.png"><br><span>分享</span></div>
    </div>  
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .banner{
    margin-top: 5px;
  }
  .banner>div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:#fff;
    font-size: 14px;
  }
  .banner img{
    width: 26px;
    height:26px;
    margin:4px auto;
    display: inline-block;
  }
  .banner span{
    text-align: right;
    margin: 0 auto;
  }
</style>