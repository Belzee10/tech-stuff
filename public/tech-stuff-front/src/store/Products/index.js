import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const state = {
  products: [],
  errorProducts: '',
  view: 'cards',
  product: null,
  errorProduct: ''
};

export default {
  state,
  getters,
  actions,
  mutations
};
