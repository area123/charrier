import { Chatting } from '@/types/chatting';
import { Module } from 'vuex';
import { IRootState } from '@/store';
import { AxiosResponse } from 'axios';
import { write, list } from '@/api/chatting';

interface IChatting {
  message: Chatting[] | null;
  isLoading: boolean;
}

const chatting: Module<IChatting, IRootState> = {
  namespaced: true,
  state: {
    message: null,
    isLoading: false,
  },
  getters: {},
  actions: {
    async list({ commit }) {
      try {
        commit('startRequest');
        const chattingResponse = await list();
        commit('requestSuccess', chattingResponse.data);
      } catch (e) {
        commit('requestFailure');
      }
    },
    async write({ commit }, message: string) {
      try {
        commit('startRequest');
        await write(message);
        commit('notResponseSuccess');
      } catch (e) {
        commit('requestFailure');
      }
    },
  },
  mutations: {
    startRequest(state) {
      state.message = null;
      state.isLoading = true;
    },
    requestSuccess(state, message: Chatting[]) {
      state.message = message;
      state.isLoading = false;
    },
    notResponseSuccess(state) {
      state.message = null;
      state.isLoading = false;
    },
    requestFailure(state) {
      state.message = null;
      state.isLoading = false;
    },
  },
};

export default chatting;
