import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Jy from '../components/Jy.vue'
import Musicplay from '../components/Musicplay.vue'
import Paihang from '../components/paihang.vue'
import list from '../components/list.vue'
import search from '../components/search.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',component: Jy},
  {path: '/Musicplay',component: Musicplay},
  {path: '/Paihang',component: Paihang},
  {path: '/list',component: list},
  {path: '/search',component: search},
  {path: '/about',name: 'about',component: () => import('../views/About.vue')},
  {path:'/login',component: () => import('../components/Login/Login.vue')}
  
]

const router = new VueRouter({
  routes
})

export default router
