import httpClient from '../services/http-client.js';
import * as logger from 'loglevel';
import { filterObject } from '@/helpers';

/**
 * register
 * @param {Object} data
 */
export const register = async data => {
  try {
    const res = await httpClient.post('/signup', data);
    const result = filterObject(res.data.user, 'user');
    return result;
  } catch (error) {
    logger.error(`USER_REGISTER: **${error}**`);
    throw error.message;
  }
};

/**
 * login
 * @param {Object} data
 */
export const login = async data => {
  try {
    const res = await httpClient.post('/signin', data);
    const result = filterObject(res.data.user, 'user');
    return result;
  } catch (error) {
    logger.error(`USER_LOGIN: **${error}**`);
    throw error.message;
  }
};

/**
 * logout
 */
export const logout = async () => {
  try {
    const res = await httpClient.delete('/logout');
    return res;
  } catch (error) {
    logger.error(`USER_LOGOUT: **${error}**`);
    throw error.message;
  }
};

/**
 * get all users
 * @param {Object} params
 */
export const getUsers = async params => {
  try {
    const res = await httpClient.get('/users', { params });
    const result = res.data.data.map(item => filterObject(item, 'user'));
    return result;
  } catch (error) {
    logger.error(`USERS_ALL: **${error}**`);
    throw error.message;
  }
};

/**
 * delete user
 * @param {Number} id
 */
export const deleteUser = async id => {
  try {
    const res = await httpClient.delete(`/users/${id}`);
    return res;
  } catch (error) {
    logger.error(`USERS_DELETE: **${error}**`);
    throw error.message;
  }
};

/**
 * create user
 * @param {Object} data
 */
export const createUser = async data => {
  try {
    const res = await httpClient.post('/users', data);
    const result = filterObject(res.data, 'user');
    return result;
  } catch (error) {
    logger.error(`USERS_CREATE: **${error}**`);
    throw error.message;
  }
};

/**
 *
 * @param {Number} id
 * @param {Object} data
 */
export const editUser = async (id, data) => {
  try {
    const res = await httpClient.put(`/users/${id}`, data);
    const result = filterObject(res.data, 'user');
    return result;
  } catch (error) {
    logger.error(`USERS_EDIT: **${error}**`);
    throw error.message;
  }
};
