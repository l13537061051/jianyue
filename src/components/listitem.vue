<template>
  <div class="itemparent">
    <div class="mar">1</div>
    <div class="title">
      <p class="name">这一生关于你的风景</p>
      <p class="author">枯木逢春</p>
    </div>
    <div class="mar"><img src="../assets/png/images3/san.png" alt=""></div>    
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .itemparent{
    height:60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  p{
    height: 100%;
    margin: 3% 0;
    text-align: left;
    overflow: hidden;
    text-overflow:ellipsis;/*文本溢出显示省略号*/
    white-space:nowrap;/*文本不会换行（单行文本溢出）*/
    width:100%;
  }
  .title{
    font-size: 16px;
    width: 70%;
  }
  .author{
    font-size: 12px;
    color:#aaa;
  }
  .mar{
    margin: 20px;
    font-weight: 560;
    color: #aaa;
  }
  .mar>img{
    width:20px;
    height:20px;
  }
</style>