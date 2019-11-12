<template>
  <div>
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="home">主页组件</mt-tab-container-item>
      <mt-tab-container-item id="list">列表/排行榜组件</mt-tab-container-item>
      <mt-tab-container-item id="mv">MV/视频组件</mt-tab-container-item>
      <mt-tab-container-item id="me">我的页面组件</mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar fixed v-model="active">
      <mt-tab-item id="home">
        <img slot="icon" src="../assets/shouye_no.png" alt="">
        首页
      </mt-tab-item>
      <mt-tab-item id="list">
        <img slot="icon" src="../assets/liebiao_no.png" alt="">
        曲库
      </mt-tab-item>
      <mt-tab-item id="mv">
        <img slot="icon" src="../assets/shipin_no.png" alt="">
        视频
      </mt-tab-item>
      <mt-tab-item id="me">
        <img slot="icon" src="../assets/wode_no.png" alt="">
        我的
      </mt-tab-item>

    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active:"home"
    }
  }
}
</script>
