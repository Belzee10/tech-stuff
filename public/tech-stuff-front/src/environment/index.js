const { API_BASE_URL, NODE_ENV = '' } = process.env;

const environment = NODE_ENV.toLowerCase();
const apiBaseUrl = API_BASE_URL;

export { environment, apiBaseUrl };
