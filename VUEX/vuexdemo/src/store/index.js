import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    users: [
      { name: 'Minaxi' },
      { name: 'Nency' }
    ],
    updatedName: ''
  },
  mutations: {
    increment(state) {
      state.count++
    },
    newName(state,nm) {
      state.updatedName = nm
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
  },
  modules: {
  }
})
