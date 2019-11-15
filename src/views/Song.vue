<template>
  <div class="song">
    <Search/>
    <List/>
    <Main/>
  </div>
</template>
<script>
import Search from '@/components/Searching.vue';
import List from '@/components/Song/List.vue';
import Main from '@/components/Song/Main.vue';
export default {
  components:{
    Search,
    List,
    Main
  }
}
</script>