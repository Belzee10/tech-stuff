import httpClient from '../services/http-client.js';
import * as logger from 'loglevel';
import { filterObject } from '@/helpers';

/**
 * get all products
 */
export const getProducts = async () => {
  try {
    const res = await httpClient.get('/products/all');
    const result = res.data.map(item => filterObject(item, 'product'));
    return result;
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
    const result = res.data.map(item => filterObject(item, 'product'));
    return result;
  } catch (error) {
    logger.error(`PRODUCTS_BY_CATEGORY: **${error}**`);
    throw error.message;
  }
};

/**
 * search products by name
 * @param {String} query
 */
export const searchProducts = async query => {
  try {
    const res = await httpClient.get('/products/all', {
      params: {
        search: query
      }
    });
    const result = res.data.map(item => filterObject(item, 'product'));
    return result;
  } catch (error) {
    logger.error(`SEARCH_PRODUCTS: **${error}**`);
    throw error.message;
  }
};

/**
 * get a single product
 * @param {String} id
 */
export const getProduct = async id => {
  try {
    const res = await httpClient.get(`/products/details/${id}`);
    const result = filterObject(res.data, 'product');
    return result;
  } catch (error) {
    logger.error(`PRODUCTS_SINGLE: **${error}**`);
    throw error.message;
  }
};
