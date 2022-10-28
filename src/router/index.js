import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DanYi from '../views/danYi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/danYi',
    name: 'danYi',
    component: DanYi
  }
]

const router = new VueRouter({
  routes
})

export default router
