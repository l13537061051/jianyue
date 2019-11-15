<template>
  <div class="parent">
   <banner></banner>
   <div class="bg">
     <listtitle></listtitle>
     <listtitle2></listtitle2>
   </div>
   <listitem></listitem>     
   <listitem></listitem>     
   <listitem></listitem>     
   <listitem></listitem>     
   <listitem></listitem>     
   <listitem></listitem>     
   <listitem></listitem>     
  </div>
</template>
<script>
import banner from "./banner"
import listitem from "./listitem"
import listtitle from "./listtitle"
import listtitle2 from "./listtitle2"
export default {
  components:{
    banner,listitem,listtitle,listtitle2
  }
}
</script>
<style scoped>
  .parent{
    height: 100%;
    overflow-y: auto;
  }
  .bg{
    width:100%;
    height:36%;
    background: #1da0ef;
    /* background: url(../assets/gedanpic.png) no-repeat;
    background-size: cover;
    opacity: 0.5; */
  }
</style>