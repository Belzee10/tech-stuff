import axios from 'axios';
import { apiBaseUrl } from '../environment';
import appLocalStorage from './storage';

const config = {
  baseURL: apiBaseUrl
};

const httpClient = axios.create(config);

/**
 * Add interceptors to Axios
 * @param {*} config
 */
const authInterceptor = config => {
  const token = appLocalStorage.getItem('token');
  config.headers.Authorization = token;
  return config;
};

httpClient.interceptors.request.use(authInterceptor);

export default httpClient;
