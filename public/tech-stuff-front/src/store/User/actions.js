import {
  SET_USER,
  SET_USERS,
  DELETE_USER,
  ADD_USER,
  EDIT_USER,
  SET_USERS_ERROR,
  SET_REGISTER_ERROR,
  SET_LOGIN_ERROR,
  REMOVE_USER
} from './mutation-types.js';
import {
  register,
  login,
  logout,
  getUsers,
  deleteUser,
  createUser,
  editUser
} from '@/api/user.js';

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
  },

  async logout({ commit }) {
    try {
      await logout();
      commit({
        type: REMOVE_USER
      });
    } catch (error) {
      throw error;
    }
  },

  async fetchUsers({ commit }, params) {
    try {
      const users = await getUsers(params);
      commit({
        type: SET_USERS,
        users
      });
      return users;
    } catch (error) {
      commit({
        type: SET_USERS_ERROR,
        error
      });
    }
  },

  async deleteUser({ commit }, id) {
    try {
      await deleteUser(id);
      commit({
        type: DELETE_USER,
        userId: id
      });
    } catch (error) {
      commit({
        type: SET_USERS_ERROR,
        error
      });
    }
  },

  async createUser({ commit }, data) {
    try {
      const user = await createUser(data);
      commit({
        type: ADD_USER,
        user
      });
    } catch (error) {
      commit({
        type: SET_USERS_ERROR,
        error
      });
    }
  },

  async editUser({ commit }, { id, data }) {
    try {
      const user = await editUser(id, data);
      commit({
        type: EDIT_USER,
        user
      });
    } catch (error) {
      commit({
        type: SET_USERS_ERROR,
        error
      });
    }
  }
};

export default actions;
