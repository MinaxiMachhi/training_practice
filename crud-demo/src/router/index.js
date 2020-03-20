import Vue from 'vue'
import VueRouter from 'vue-router'
import users from '@/components/users.vue'
import posts from '@/components/posts.vue'
import addPost from '@/components/addPost.vue'
import addUser from '@/components/addUser.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/users',
    name: 'users',
    component: users
  },
  {
    path: '/posts',
    name: 'posts',
    component: posts
  },
  {
    path: '/addPost',
    name: 'addPost',
    component: addPost
  },
  {
    path: '/addUser',
    name: 'addUser',
    component: addUser
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
