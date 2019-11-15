import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'; //引入axios
import Qs from 'qs'; //引入qs
import VueAxios from 'vue-axios'
import Mint from 'mint-ui'; //引入mint-ui组件库
//import progressBar from 'vue-draggable-progressbar';   //引入进度条组件
//import Vant from 'vant'         //引入vant组件库

axios.defaults.baseURL = "http://176.122.15.230:4000"
axios.defaults.withCredentials = true;
Vue.prototype.axios = axios;

//Vue.use(VueAxios, axios); //注册axios

Vue.use(Qs); //注册qs
Vue.use(Mint); //注册mint
//Vue.use(progressBar);//注册progressBar

import 'mint-ui/lib/style.css'; //导入mint-ui
//import 'vant/lib/index.css';//导入vant
//Vue.use(vant);//注册vant



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')