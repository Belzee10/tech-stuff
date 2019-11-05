import {
  SET_USER,
  SET_REGISTER_ERROR,
  SET_LOGIN_ERROR
} from './mutation-types.js';

const mutations = {
  [SET_USER]: (state, payload) => {
    state.user = payload.user;
  },

  [SET_REGISTER_ERROR]: (state, payload) => {
    state.errorRegister = payload.error;
  },

  [SET_LOGIN_ERROR]: (state, payload) => {
    state.errorLogin = payload.error;
  }
};

export default mutations;
