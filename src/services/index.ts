import axios from 'axios';
import { getToken } from './firebase.service';

export const API_URL = 'http://127.0.0.1:4000/';

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
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
        const token = await getToken();
        localStorage.setItem('token', token);

        return $api.request(originalRequest);
      } catch (error) {
        console.log('REFRESH ERROR HTTP');
      }
    }
  }
);

export default $api;
