import axios from 'axios';
import { apiBaseUrl } from '../environment';

const config = {
  baseUrl: apiBaseUrl
};

const httpClient = axios.create(config);

export default httpClient;
