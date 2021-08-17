import Vue from 'vue'
import Vuex from 'vuex'

import pageA from './modules/pageA'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pageA
  }
})
