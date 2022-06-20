import { makeAutoObservable, observable } from 'mobx';
import axios from 'axios';
import { API_URL } from '../services';

import { getToken, getUser, googleLogin, loginEmail, registerEmail } from '../services/firebase.service';
import { updateMe } from '../services/user.service';

export default class Store {
  isAuth = false;
  user: any = {};
  loading = false;

  constructor() {
    makeAutoObservable(this);
    try {
      const saved = localStorage.getItem('storage');
      if (!saved) {
        throw new Error('Default values');
      }
      const { isAuth, user } = JSON.parse(saved);
      this.isAuth = isAuth;
      this.user = user;
    } catch (error) {
      this.isAuth = false;
      this.user = {};
    }

    console.log('NEW STORE WTF');
  }

  setLoading(bool: boolean) {
    console.log('LOADER', bool);
    this.loading = bool;
  }

  setUser(data) {
    this.user = data;
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  save() {
    localStorage.setItem('storage', JSON.stringify({ isAuth: this.isAuth, user: this.user }));
  }

  async loginGoogle() {
    console.log('LOGGOOGLE');
    try {
      const token = await googleLogin();

      localStorage.setItem('token', token);
      console.log('AUTH GOOGLE');
      this.setAuth(true);
      this.setUser(await getUser());
      console.log('USERAUTH', this.user, this.isAuth);
      this.save();
      await updateMe();
    } catch (e: any) {
      console.log('GOOGLE ERROR');
      console.log(e);
    }
  }

  async loginEmail(email, pass) {
    console.log('LOGEMAIL');
    try {
      const token = await loginEmail(email, pass);

      localStorage.setItem('token', token);

      this.setAuth(true);
      this.setUser(await getUser());
      this.save();
      await updateMe();
    } catch (e: any) {
      console.log(e);
    }
  }

  async registerEmail(email, pass) {
    console.log('REGEMAIL');
    try {
      const token = await registerEmail(email, pass);

      localStorage.setItem('token', token);

      this.setAuth(true);
      this.setUser(await getUser());
      this.save();
      await updateMe();
    } catch (e: any) {
      console.log(e);
    }
  }

  async logout() {
    try {
      console.log('LOGOUT');
      localStorage.removeItem('token');

      this.setAuth(false);
      this.setUser({});
      this.save();
    } catch (e) {}
  }

  async getToken() {
    console.log('GETTOKEN');
    try {
      const token = await getToken();

      localStorage.setItem('token', token);

      this.setAuth(true);
      this.setUser(await getUser());
      this.save();
    } catch (e: any) {
      console.log(e);
    }
  }
}

export const store = new Store();
