import { FETCH_CATEGORIES } from './action-types.js';
import { SET_CATEGORIES, SET_ERROR } from './mutation-types.js';
import { getCategories } from '@/api/categories.js';

const actions = {
  [FETCH_CATEGORIES]: async ({ commit }) => {
    try {
      const categories = await getCategories();
      commit({
        type: SET_CATEGORIES,
        categories
      });
    } catch (error) {
      commit({
        type: SET_ERROR,
        error
      });
    }
  }
};

export default actions;
