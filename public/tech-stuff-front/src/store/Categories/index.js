import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const state = {
  categories: [],
  errorCategories: ''
};

export default {
  state,
  getters,
  actions,
  mutations
};
