import Vue from 'vue';
import Vuex from 'vuex';
import user from '@/store/modules/user';
import chatting from '@/store/modules/chatting';

Vue.use(Vuex);

export interface IRootState {

}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    chatting,
  },
});
