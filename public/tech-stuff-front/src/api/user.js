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
