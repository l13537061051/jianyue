<template>
  <div id="search">
    <img src="../assets/png/images3/zuo.png">
      <div id="searching">
        <img id="que" src="../assets/png/images3/sousuo.png">
        <input type="text" v-model="va" @input="inp" placeholder="大田后生仔">
        <img id="close" v-show="val" @click="clo" src="../assets/png/images3/guanbi.png">
      </div>
    <span>搜索</span>
  </div>
</template>
<script>

export default {
  data(){
    return {
      va:"",
      val:false
    }
  },
  methods:{
    inp(){
      if(this.va==""){
        this.val=false;
      }else{
        this.val=true;
      }
    },
    clo(){
      this.va="";
      this.val=false;
    }
  },
  computed:{
    
    
  }
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
  #search>img,#search>span{
    margin: 0 auto;
  }
  #searching{
    display: inline-block;
    width:75%;
    height:23px;
    line-height: 23px;
    background: #fff;
    color:#000;
    font-size: 14px;
    border-radius:11px; 
    position: relative;
  }
  #searching>input{
    width: 80%;
    border: 0px;
    outline:none;
    text-align: left;
    position: absolute;
    left: 35px;top:0;bottom: 0;
    margin:auto 0;
  }
  #searching>#que{
    width:18px;
    height:18px;
    vertical-align: middle;
    position: absolute;
    left: 10px;top:0;bottom: 0;
    margin:auto 0; 
  } 
  #searching>#close{
    width:18px;
    height:18px;
    vertical-align: middle;
    position: absolute;
    right: 5px;top:0;bottom: 0;
    margin:auto 0;
  } 
  input::-webkit-input-placeholder{
    color:#ccc;
} 
</style>