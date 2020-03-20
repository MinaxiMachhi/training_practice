import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    users: [],
    login:false,
    editUSER: ''
  },
  mutations: {
    editUSER(state,id) {
      console.log("iddddddddddd", id)
      Axios.get()
    }
  },
  actions: {
    editUser(context, id) {
      context.commit("editUSER", id)

    }
  },
  modules: {
  }
})
