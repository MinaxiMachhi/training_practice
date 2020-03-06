import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import data from '@/items/lists.js'
export default new Vuex.Store({
  state: {
    items:[],
    addToCart:[]
  },
  mutations: {
    setItems(state){
      state.items = data.getItems()
    }

  },
  actions: {
    getItems(context){
      context.commit('setItems')
      console.log()
    }
  },
  modules: {
  }
})
