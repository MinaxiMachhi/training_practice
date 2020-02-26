import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/posts',
    component: function () {
      return import('../views/Posts.vue')
    }
  },
  {
    path: '/vue-Bootstrape',
    component: function () {
      return import('../views/vue-bootstrape.vue')
    }
  },
  {
    path: '/form',
    name: 'form',
    component: function () {
      return import('../views/Form.vue')
    }
  },
  {
    path: '/validateForm',
    component: function () {
      return import('../views/validateForm.vue')
    }
  },
  {
    path: '/Carousel',
    component: function () {
      return import('../views/Carousel.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
