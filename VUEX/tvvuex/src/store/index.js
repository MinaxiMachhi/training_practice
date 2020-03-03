import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/*eslint-disable*/
export default new Vuex.Store({
  state: {
    totalTvCount: 10
  },
  mutations: {
    removeTv(state) {
      state.totalTvCount--
    }
  },
  actions: {
    removeTv({commit}) {
      commit('removeTv')
      // if (context.state.totalTvCount >= amount) {
      //   context.commit('removeTv', amount)
      // }
    }
  },
  modules: {
  }
})
