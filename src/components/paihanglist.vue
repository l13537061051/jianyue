<template>
  <div class="phlist">
    <img class="leftimg" src="../assets/gedanpic.png" alt="">
    <div class="title">
      <div><span>1.</span><p class="over"><span>醒着醉</span></p> - 马良</div>
      <div><span>2.</span><p class="over"><span>这一生关于你的风景</span></p> - 枯木逢春</div>
      <div><span>3.</span><p class="over"><span>那女孩对我说</span></p> - 小阿七</div>
    </div>  
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .phlist{
    display: flex;
    justify-content: space-around;
    margin: 10px;
  }
  .leftimg{
    width: 30%;
    height: 27%;
    margin: auto;
    border-radius: 5px;
  }
  .title{
    text-align: left;
    vertical-align: middle;
    margin: auto;
    margin-right: 7%;    
  }
  .title>div{
    margin: 6% 0px;
    font-size: 14px;
    color:#888;
    vertical-align: middle;
    align-items: center;
    line-height: 1;
  }
  .over{
    margin: auto;
    display: inline-block;
    overflow: hidden;
    text-overflow:ellipsis;/*文本溢出显示省略号*/
    white-space:nowrap;/*文本不会换行（单行文本溢出）*/
    max-width:60%;
    vertical-align: top;
  }
  .title span{
    color:#444;
  }
</style>