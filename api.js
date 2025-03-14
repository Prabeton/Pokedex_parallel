const isDevelopment = process.env.NODE_ENV === 'development';

export const API_URL = isDevelopment
  ? 'http://localhost:3002'
  : 'https://twoj-deployed-json-server.com';

