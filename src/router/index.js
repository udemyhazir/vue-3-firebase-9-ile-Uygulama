import { createRouter, createWebHistory } from 'vue-router'
import {auth} from '../firebase/config'

import Home from '../views/Home.vue'
import Login from '../views/Login'
import Share from '../views/Share'
import Browse from '../views/Browse'

const kullaniciKontrol=(to,from,next)=>{

  let kullanici=auth.currentUser;

  if(!kullanici){
    next({name:'Login'})
  }else{
    next()
  }

}





const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/browse/:id',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/share',
    name: 'Share',
    component: Share,
    beforeEnter: kullaniciKontrol
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
