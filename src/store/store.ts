import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import axios from 'axios';
import { API_URL } from '../services/index';

export default class Store {
  user = {};
  isAuth = false;
  isAdmin = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }
  setAdmin(bool) {
    this.isAdmin = bool;
  }

  setUser(user) {
    this.user = user;
  }

  async login(email, password) {
    try {
      const res = await AuthService.login(email, password);

      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      this.setAdmin(res.data.isAdmin);
      console.log('store', this.isAdmin);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (e) {
      console.log(e.response?.data);
    }
  }

  async registration(email, password) {
    try {
      const res = await AuthService.registration(email, password);

      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      this.setAdmin(res.data.isAdmin);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (e) {
      console.log(e.response?.data);
    }
  }

  async logout() {
    try {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      this.setAdmin(false);
      this.setAuth(false);
      this.setUser({});
    } catch (e) {}
  }

  async checkAuth() {
    try {
      const res = await axios.post(`${API_URL}user/auth/refresh`, { refreshToken: localStorage.getItem('refreshToken') });
      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      this.setAdmin(res.data.isAdmin);
      console.log('STORE REF', this.isAdmin);

      this.setAuth(true);
      this.setUser(res.data.user);
      console.log(this.user.email);
    } catch (e) {
      console.log('REFRESH ERROR');
    }
  }
}
