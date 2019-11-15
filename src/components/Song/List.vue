<template>
  <div class="app">
    <ul class="clearfix">
      <li v-for="(item,index) in items" :key="index">
        <a href>
          <img :src="item.imgSrc" alt />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          imgSrc: require("../../assets/song1.jpg")
        },
        {
          imgSrc: require("../../assets/song2.jpg")
        },
        {
          imgSrc: require("../../assets/song3.jpg")
        },
        {
          imgSrc: require("../../assets/song4.jpg")
        },
        {
          imgSrc: require("../../assets/song5.jpg")
        },
        {
          imgSrc: require("../../assets/song6.jpg")
        },
        {
          imgSrc: require("../../assets/song7.jpg")
        }
      ]
    };
  }
};
</script>
<style scoped>
.app > ul {
  margin: 10px;
  padding: 0;
}
.app > ul>li{
  float: left;
}
.app li:nth-child(1),.app li:nth-child(2){
  width: 25%;
  padding-right: 5px;
}
.app li:nth-child(3){
  width: 47%;
}
.app li:nth-child(4),.app li:nth-child(5){
  width: 25%;
  padding-right: 5px;
}
.app li:nth-child(6){
  padding-right: 5px;
}
.app li:nth-child(6),.app li:nth-child(7){
  width: 22%;
}
.app li:nth-child(7){
  float: right;
  width: 23%;
}
.app li img{
  width: 100%;
  height: 80px;
}
</style>