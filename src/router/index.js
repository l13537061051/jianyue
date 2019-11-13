import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Jy from '../components/Jy.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',component: Jy},
  {path: '/about',name: 'about',component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
