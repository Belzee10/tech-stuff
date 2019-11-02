import { SET_PRODUCTS, SET_PRODUCTS_ERROR } from './mutation-types.js';

const mutations = {
  [SET_PRODUCTS]: (state, payload) => {
    state.products = payload.products;
  },
  [SET_PRODUCTS_ERROR]: (state, payload) => {
    state.errorProducts = payload.error;
  }
};

export default mutations;
