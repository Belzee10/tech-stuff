import httpClient from '../services/http-client.js';
import * as logger from 'loglevel';

/**
 * get all categories
 */
export const getCategories = async () => {
  try {
    const res = await httpClient.get('/categories/all');
    return res.data.data;
  } catch (error) {
    logger.error(`CATEGORIES_ALL: **${error}**`);
    return error;
  }
};
