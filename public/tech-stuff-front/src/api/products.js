import httpClient from '../services/http-client.js';
import * as logger from 'loglevel';

/**
 * get all products
 */
export const getProducts = async () => {
  try {
    const res = await httpClient.get('/products/all');
    return res.data;
  } catch (error) {
    logger.error(`PRODUCTS_ALL: **${error}**`);
    throw error.message;
  }
};
