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
