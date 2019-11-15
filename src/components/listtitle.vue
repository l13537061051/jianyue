<template>
  <div class="listtitle">
    <img class="leftimg" src="../assets/gedanpic.png" alt="">
    <div class="title">
      <div class="lt"><h3>日系纯音作业必备，提高效率</h3></div>
      <div class="avatar"><img src="../assets/png/images3/avatar.png"><span>这里是昵称</span> ></div>
      <div class="tag"><span>学习</span><span>纯音乐</span><span>工作</span></div>
    </div>  
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .listtitle{
    display: flex;
    justify-content: space-around;
    padding:0 10px;
  }
  .leftimg{
    width: 145px;
    height: 130px;
    margin: auto;
    border-radius: 5px;
  }
  .avatar>img{
    width:28px;
    height:28px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .avatar>span{
    align-items: center;
    vertical-align: middle;
  }
  .tag>span{
    display: inline-block;
    margin: 0 5px;
    padding: 10px;
    background: #09aaff;
    border-radius: 5px;
    font-size: 12px;
  }
  .lt>h3{
    font-size: 18px;
    font-weight: 560;
    line-height: 30px;
    margin: 0 auto;
  }
  .title{
    text-align: left;
    vertical-align: middle;
    margin: auto;
    color:#fff;
    padding: 10px;
    padding-right: 5px;
  }
  .title>div{
    
    font-size: 14px;
    vertical-align: middle;
    align-items: center;
  }
  .avatar{
margin: 6% 0;
  }
</style>