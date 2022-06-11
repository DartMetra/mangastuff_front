import axios from 'axios';

export const API_URL = 'http://127.0.0.1:4000/';

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  }
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const res = await axios.post(`${API_URL}user/auth/refresh`, { refreshToken: localStorage.getItem('refreshToken') });
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        return $api.request(originalRequest);
      } catch (error) {
        console.log('REFRESH ERROR HTTP');
      }
    }
  }
);

export default $api;
