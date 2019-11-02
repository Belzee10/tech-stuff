import { SET_CATEGORIES, SET_CATEGORIES_ERROR } from './mutation-types.js';
import { getCategories } from '@/api/categories.js';

const actions = {
  async fetchCategories({ commit }) {
    try {
      const categories = await getCategories();
      commit({
        type: SET_CATEGORIES,
        categories
      });
      return categories;
    } catch (error) {
      commit({
        type: SET_CATEGORIES_ERROR,
        error
      });
    }
  }
};

export default actions;
