const isProd = import.meta.env.MODE === 'production';
const VITE_PORT = `${import.meta.env.VITE_PORT}`;

const API_BASE_URL = isProd
  ? import.meta.env.VITE_PROD_API_BASE_URL
  : import.meta.env.VITE_DEV_API_BASE_URL+VITE_PORT;

export const createFollowUpRequest = async (furData) => {
  return await fetch(`${API_BASE_URL}/api/cwu`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(furData),
  });
};
