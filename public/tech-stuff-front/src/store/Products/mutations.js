import {
  SET_PRODUCTS,
  SET_PRODUCTS_ERROR,
  SET_VIEW,
  SET_PRODUCT,
  SET_PRODUCT_ERROR
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
  },

  [SET_PRODUCT]: (state, payload) => {
    state.product = payload.product;
  },

  [SET_PRODUCT_ERROR]: (state, payload) => {
    state.errorProduct = payload.error;
  }
};

export default mutations;
