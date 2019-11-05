import httpClient from '../services/http-client.js';
import * as logger from 'loglevel';
import { filterObject } from '@/helpers';

/**
 * get all categories
 */
export const getCategories = async () => {
  try {
    const res = await httpClient.get('/categories/all');
    const result = res.data.data.map(item => filterObject(item, 'category'));
    return result;
  } catch (error) {
    logger.error(`CATEGORIES_ALL: **${error}**`);
    throw error.message;
  }
};
