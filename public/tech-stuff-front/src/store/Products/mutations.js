import {
  SET_PRODUCTS,
  SET_PRODUCTS_ERROR,
  SET_VIEW
} from './mutation-types.js';

const mutations = {
  [SET_PRODUCTS]: (state, payload) => {
    state.products = payload.products;
  },

  [SET_PRODUCTS_ERROR]: (state, payload) => {
    state.errorProducts = payload.error;
  },

  [SET_VIEW]: (state, payload) => {
    state.view = payload.view;
  }
};

export default mutations;
