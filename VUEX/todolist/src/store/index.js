import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todolist: ['VUE', 'NUXT',]
  },
  mutations: {
    ADD_TODO: (state, Todo) => {
      state.todolist.push(Todo)
    },
    REMOVE_TODO: (state, Todo) => {
      state.todolist.splice(Todo, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
