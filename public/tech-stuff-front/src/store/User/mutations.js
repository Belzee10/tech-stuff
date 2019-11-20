import {
  SET_USER,
  SET_USERS,
  DELETE_USER,
  ADD_USER,
  EDIT_USER,
  SET_USERS_ERROR,
  SET_REGISTER_ERROR,
  SET_LOGIN_ERROR,
  REMOVE_USER
} from './mutation-types.js';

import appLocalStorage from '@/services/storage.js';
import httpClient from '@/services/http-client.js';

const mutations = {
  [SET_USER]: (state, payload) => {
    state.user = payload.user;
    appLocalStorage.setItem('user', payload.user);
  },

  [SET_REGISTER_ERROR]: (state, payload) => {
    state.errorRegister = payload.error;
  },

  [SET_LOGIN_ERROR]: (state, payload) => {
    state.errorLogin = payload.error;
  },

  [REMOVE_USER]: state => {
    state.user = null;
    appLocalStorage.removeItem('user');
    delete httpClient.defaults.headers.common['Authorization'];
  },

  [SET_USERS]: (state, payload) => {
    state.users = payload.users;
    state.pagination = {
      currentPage: payload.meta.current_page,
      lastPage: payload.meta.last_page
    };
  },

  [SET_USERS_ERROR]: (state, payload) => {
    state.errorUsers = payload.error;
  },

  [DELETE_USER]: (state, payload) => {
    state.users = state.users.filter(item => item.id !== payload.userId);
  },

  [ADD_USER]: (state, payload) => {
    state.users = [payload.user, ...state.users];
  },

  [EDIT_USER]: (state, payload) => {
    const index = state.users.findIndex(item => item.id === payload.user.id);
    state.users.splice(index, 1, payload.user);
  }
};

export default mutations;
