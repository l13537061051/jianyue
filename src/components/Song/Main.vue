<template>
  <div class="all">
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button>
          <img :src="imgSrc" alt class="vip" />
          会员专区
        </mt-button>
      </router-link>
      <mt-button slot="right" id="s1">
        畅享千万付费曲库！
        <img :src="imgSrc2" alt />
      </mt-button>
    </mt-header>
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button>
          <img :src="imgSrc" alt class="vip" />
          会员专区
        </mt-button>
      </router-link>
      <mt-button slot="right" id="s1">
        畅享千万付费曲库！
        <img :src="imgSrc2" alt />
      </mt-button>
    </mt-header>
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button>
          <img :src="imgSrc" alt class="vip" />
          会员专区
        </mt-button>
      </router-link>
      <mt-button slot="right" id="s1">
        畅享千万付费曲库！
        <img :src="imgSrc2" alt />
      </mt-button>
    </mt-header>
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button>
          <img :src="imgSrc" alt class="vip" />
          会员专区
        </mt-button>
      </router-link>
      <mt-button slot="right" id="s1">
        畅享千万付费曲库！
        <img :src="imgSrc2" alt />
      </mt-button>
    </mt-header>
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button>
          <img :src="imgSrc" alt class="vip" />
          会员专区
        </mt-button>
      </router-link>
      <mt-button slot="right" id="s1">
        畅享千万付费曲库！
        <img :src="imgSrc2" alt />
      </mt-button>
    </mt-header>
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button>
          <img :src="imgSrc" alt class="vip" />
          会员专区
        </mt-button>
      </router-link>
      <mt-button slot="right" id="s1">
        畅享千万付费曲库！
        <img :src="imgSrc2" alt />
      </mt-button>
    </mt-header>
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button>
          <img :src="imgSrc" alt class="vip" />
          会员专区
        </mt-button>
      </router-link>
      <mt-button slot="right" id="s1">
        畅享千万付费曲库！
        <img :src="imgSrc2" alt />
      </mt-button>
    </mt-header>
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button>
          <img :src="imgSrc" alt class="vip" />
          会员专区
        </mt-button>
      </router-link>
      <mt-button slot="right" id="s1">
        畅享千万付费曲库！
        <img :src="imgSrc2" alt />
      </mt-button>
    </mt-header>
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button>
          <img :src="imgSrc" alt class="vip" />
          会员专区
        </mt-button>
      </router-link>
      <mt-button slot="right" id="s1">
        畅享千万付费曲库！
        <img :src="imgSrc2" alt />
      </mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {
  data(){
    return{
      imgSrc:require("../../assets/song8.jpg"),
      imgSrc2:require("../../assets/song9.jpg")
    }
  }
};
</script>
<style scoped>
.mint-header {
  background-color: #fff;
}
.vip {
  width: 20px;
  height: 20px;
}
.mint-header .mint-button {
  color: #000 !important;
  font-size: 14px;
}
.mint-header #s1 {
  font-size: 12px;
  color: #ccc !important;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>