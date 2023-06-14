import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import state from './account/state';
import getters from './account/getters';
import mutations from './account/mutations';
import actions from './account/actions';



Vue.use(Vuex);

export default new Vuex.Store({
  plugins:[createPersistedState()],
  state,
  getters,
  mutations,
  actions, 
})
