import {
  SET_USER,
  SET_REGISTER_ERROR,
  SET_LOGIN_ERROR
} from './mutation-types.js';
import { register, login } from '@/api/user.js';

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
  },

  async login({ commit }, data) {
    try {
      const user = await login(data);
      commit({
        type: SET_USER,
        user
      });
    } catch (error) {
      commit({
        type: SET_LOGIN_ERROR,
        error
      });
      throw error;
    }
  }
};

export default actions;
