import { register, login, check, logout } from '@/api/auth';
import { Module } from 'vuex';
import { IRootState } from '@/store';
import { User, UserForm } from '@/types/user';
import { AxiosResponse, AxiosError } from 'axios';

interface IUser {
  user: User | null;
  login_error: AxiosError | null;
}

const user: Module<IUser, IRootState> = {
  namespaced: true,
  state: {
    user: null,
    login_error: null,
  },
  getters: {},
  actions: {
    async register({ commit }, data: UserForm) {
      try {
        const userResponse: AxiosResponse<User> = await register(data);
        commit('set_user', userResponse.data);
      } catch (e) {
        const response = (e as AxiosError).response;
        commit('set_user_error', response);
      }
    },
    async login({ commit }, data: UserForm) {
      try {
        const userResponse: AxiosResponse<User> = await login(data);
        commit('set_user', userResponse);
      } catch (e) {
        const response = (e as AxiosError).response;
        commit('set_user_error', response);
      }
    },
    async check({ commit }) {
      await logout();
      commit('set_user', check());
    },
  },
  mutations: {
    set_user(state, data: User | null) {
      state.user = data;
    },
    set_user_error(state, data: AxiosError | null) {
      state.login_error = data;
    },
  },
};


export default user;
