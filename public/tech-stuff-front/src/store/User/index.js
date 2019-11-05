import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const state = {
  user: null,
  errorRegister: '',
  errorLogin: ''
};

export default {
  state,
  getters,
  actions,
  mutations
};
