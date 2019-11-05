import { SET_USER, SET_REGISTER_ERROR } from './mutation-types.js';
import { register } from '@/api/user.js';

const actions = {
  async register({ commit }, data) {
    try {
      const user = await register(data);
      commit({
        type: SET_USER,
        user
      });
    } catch (error) {
      commit({
        type: SET_REGISTER_ERROR,
        error
      });
      throw error;
    }
  }
};

export default actions;
