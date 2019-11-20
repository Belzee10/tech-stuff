import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

import appLocalStorage from '@/services/storage.js';

const state = {
  user: appLocalStorage.getItem('user') || null,
  users: [],
  errorUsers: '',
  errorRegister: '',
  errorLogin: '',
  pagination: {
    currentPage: 1,
    lastPage: 1
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
