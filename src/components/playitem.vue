<template>
  <div class="parent">
    <img src="../assets/png/images3/delect.png" alt="">
    <img src="../assets/png/images3/next.png" style="transform:rotate(180deg);">
    <div class="play">
      <img id="btn" src="../assets/png/images3/img_1.png" alt="">
    </div>
    <img src="../assets/png/images3/next.png" alt="">
    <img src="../assets/png/images3/ml.png" alt="">
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
img{
  width:28px;
  height:28px;
}
.parent{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height:15%;
  width: 100%;
}
.play{
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background: #fff;
  position: relative;
}
#btn{
position: absolute;
top:0;left:7px;
bottom: 0;right: 0;
margin:auto;
}
</style>
