import {
  SET_PRODUCTS,
  SET_PRODUCTS_ERROR,
  SET_VIEW
} from './mutation-types.js';
import {
  getProducts,
  getProductsByCategory,
  searchProducts
} from '@/api/products.js';

const actions = {
  async fetchProducts({ commit }) {
    try {
      const products = await getProducts();
      commit({
        type: SET_PRODUCTS,
        products
      });
      return products;
    } catch (error) {
      commit({
        type: SET_PRODUCTS_ERROR,
        error
      });
    }
  },

  async fetchProductsByCategory({ commit }, id) {
    try {
      const products = await getProductsByCategory(id);
      commit({
        type: SET_PRODUCTS,
        products
      });
      return products;
    } catch (error) {
      commit({
        type: SET_PRODUCTS_ERROR,
        error
      });
    }
  },

  changeView({ commit }, view) {
    commit({
      type: SET_VIEW,
      view
    });
  },

  async searchProducts({ commit }, query) {
    try {
      const products = await searchProducts(query);
      commit({
        type: SET_PRODUCTS,
        products
      });
      return products;
    } catch (error) {
      commit({
        type: SET_PRODUCTS_ERROR,
        error
      });
    }
  }
};

export default actions;
