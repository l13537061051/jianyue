<template>
  <div id="search">
    <img src="../assets/che.png">
    <div id="searching">
      <router-link to="search" class="rlink">世间美好与你环环相扣</router-link>
    </div>
    <img src="../assets/gengduo.png" style="transform:rotate(45deg);">
  </div>
</template>
<script>

export default {

}
</script>
<style scope>
  #search{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    background:#1da0ef;
    color: #fff;
     /* position: fixed;   */
  }
  #search>img{
    width:20px;
    height:20px;
    margin: 0 auto;
  }
  #searching{
    display: inline-block;
    width:75%;
    height:23px;
    line-height: 23px;
    background: #fff;
    font-size: 14px;
    border-radius:11px; 
  }
  .rlink{
    color:#ccc;
    text-decoration:none;
  }
</style>