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

/**
 * get products by category
 * @param {Number} categoryId
 */
export const getProductsByCategory = async categoryId => {
  try {
    const res = await httpClient.get(`/products/product-by/${categoryId}`);
    return res.data;
  } catch (error) {
    logger.error(`PRODUCTS_BY_CATEGORY: **${error}**`);
    throw error.message;
  }
};
