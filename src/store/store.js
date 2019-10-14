import Vue from 'vue';
import Vuex from 'vuex';
import page from './page.js';
import other from './other.js';
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    page,
    other
  }
})
