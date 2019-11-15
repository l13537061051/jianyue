<template>
  <div id="parent">
    <span>00:00</span>
    <vue-slider v-model="value" style="width:70%;"></vue-slider>
    <span>03:42</span>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  components: {
    VueSlider
  },
  data () {
    return {
      value: 0
    }
  }
}
</script>
<style scope>
  .vue-slider-dot-handle{
    border: 2px solid #1da0ef;
  }
  .vue-slider-process,.vue-slider:hover .vue-slider-process{
    background: #1da0ef
  }
  .vue-slider-dot-tooltip-inner{
    opacity: 0;
  }
</style>