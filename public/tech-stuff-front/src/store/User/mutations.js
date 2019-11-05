import { SET_USER, SET_REGISTER_ERROR } from './mutation-types.js';

const mutations = {
  [SET_USER]: (state, payload) => {
    state.user = payload.user;
  },

  [SET_REGISTER_ERROR]: (state, payload) => {
    state.errorRegister = payload.error;
  }
};

export default mutations;
