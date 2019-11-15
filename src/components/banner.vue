<template>
<div>
  <div class="fixed">
    <div id="banner">
      <img class="bank" src="../assets/png/images3/zuo.png">
      <div id="title">固定导航</div>
      <img class="bank" src="../assets/png/images3/zuo.png" style="opacity: 0;" > 
    </div>
  </div><div style="width:100%;height:40px;"></div>
</div>  
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .fixed{
    width: 100%;
    position: fixed;
  }
  #banner{
    width:100%;
    height:40px;
    background: #1da0ef;
    color:#fff;
    font-size: 18px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    text-align: center;   
  }
  .bank{
    height:70%;
    margin:0 10px;
  }
  #titie{
    text-align: center;
    margin: auto;
  }  
</style>