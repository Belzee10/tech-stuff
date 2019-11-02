import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const state = {
  products: [],
  errorProducts: ''
};

export default {
  state,
  getters,
  actions,
  mutations
};
