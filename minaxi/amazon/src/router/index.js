import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from '@/components/Home.vue'
import phones from '@/components/phones.vue'
import laptops from "@/components/laptops.vue"
import watches from '@/components/watches.vue'
import cartList from '@/components/cartList.vue'

Vue.use(BootstrapVue)


Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path:'/Redmi',
    name: 'phones',
    component: phones
  },
  {
    path: '/Apple',
    name: 'laptops',
    component: laptops
  },
  {
    path: '/Titan',
    name: 'watches',
    component: watches
  },
  {
    path: '/cartList',
    name: 'cartList',
    component: cartList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
