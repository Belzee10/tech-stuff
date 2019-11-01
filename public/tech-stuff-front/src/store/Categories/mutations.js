import { SET_CATEGORIES, SET_ERROR } from './mutation-types.js';

const mutations = {
  [SET_CATEGORIES]: (state, payload) => {
    state.categories = payload.categories;
  },
  [SET_ERROR]: (state, payload) => {
    state.errorCategories = payload.error;
  }
};

export default mutations;
