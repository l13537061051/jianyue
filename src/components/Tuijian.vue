<template>
  <div id="app">
    <mt-swipe :auto="4000" class="banner">
  <mt-swipe-item class="ban">
    <img src="../assets/lb1.jpg" large alt="">
  </mt-swipe-item>
  <mt-swipe-item class="ban">
    <img src="../assets/lb2.jpg" alt="">
  </mt-swipe-item>
  <mt-swipe-item class="ban">
    <img src="../assets/lb1.jpg" alt="">
  </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
   props:{

   },
   data(){
     return {

     }
   },
}
</script>
<style scoped>
.banner{
  width:355px;
  height:120px;
  margin: 0 auto;
  align-items: center;
  position: relative;
}
.ban{
  height:100%;
  width:100%;
}
.ban>img{
  width:100%;
  height:100%;
  margin: 0 auto;
}

</style>