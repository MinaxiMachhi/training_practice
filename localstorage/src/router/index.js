import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Registration from '@/components/Registration.vue'
import Login from '@/components/Authentication/Login.vue'
import pageNotFound from '@/components/pageNotFound.vue'
import User from '@/components/User.vue'
import userDetails from '@/components/userDetails.vue'
Vue.use(VueRouter)
/*eslint-disable*/
const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/Registration',
    component: Registration,
    name: 'Registration'
  },
  {
    path: '/Login',
    component: Login,
    name: 'Login'
  },
  {
    path: '/User',
    component: User,
    name: 'User',
    meta: { requiresAuth: true },
    children: [
      { path: 'userDetails', component: userDetails, name: 'userDetails' }]
  },
  {
    path: '/userDetails',
    component: User,
    name: 'User',
    children: [
      { path: 'userDetails', component: userDetails, name: 'userDetails' }]
  },
  {
    path: '/*',
    component: pageNotFound,
    name: 'pageNotFound'
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem("email")
    if (token) {
      next()
    }
    else {
      next({ name: "Login" })
    }
  }
  else {
    next()
  }
})
export default router
