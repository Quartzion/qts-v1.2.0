const VITE_PORT = `${import.meta.env.VITE_PORT}`;

export const getEnvMode = () => {
  return import.meta.env.MODE || 'development';
};

export const isProd = () => {
  return getEnvMode() === 'production';
};

export const getApiBaseUrl = () => {
  return isProd()
    ? import.meta.env.VITE_PROD_API_BASE_URL
    : import.meta.env.VITE_DEV_API_BASE_URL+VITE_PORT;
};