<template>
  <div class="parent">
     <banner></banner>
     <phlist></phlist>
     <phlist></phlist>
     <phlist></phlist>
     <phlist></phlist>
     <phlist></phlist>
     <phlist></phlist>
  </div>
</template>
<script>
import banner from "./banner"
import phlist from "./paihanglist"
export default {
  components:{
    banner,phlist
  }
}
</script>
<style scoped>
.parent{
  overflow-y :auto;
  height: 100%;
}
</style>