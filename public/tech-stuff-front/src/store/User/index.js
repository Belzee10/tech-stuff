import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

import appLocalStorage from '@/services/storage.js';

const state = {
  user: appLocalStorage.getItem('user') || null,
  users: [],
  errorUsers: '',
  errorRegister: '',
  errorLogin: ''
};

export default {
  state,
  getters,
  actions,
  mutations
};
