import { SET_PRODUCTS, SET_PRODUCTS_ERROR } from './mutation-types.js';
import { getProducts } from '@/api/products.js';

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
  }
};

export default actions;
