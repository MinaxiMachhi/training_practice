import Vue from 'vue'
import Vuex from 'vuex'
import data from "@/posts/posts.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setPosts(state) {
      state.posts = data.getPosts()
    }
  },
  actions: {
    getPosts(context) {
      context.commit('setPosts')
    }
  },
  modules: {
  }
})
