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
  const user = appLocalStorage.getItem('user');
  if (user) config.headers.Authorization = `Bearer ${user.token}`;
  return config;
};

httpClient.interceptors.request.use(authInterceptor);

export default httpClient;
