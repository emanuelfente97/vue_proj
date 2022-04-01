import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Footer from '../components/Footer.vue'




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
  
    path: '/About',
    name: 'About',
 
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
