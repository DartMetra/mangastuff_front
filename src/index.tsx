import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

import App from './App';
import Store from './store/store';
import { SApp } from './style';

const store = new Store();
export const Context = createContext({
  store,
});

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <Context.Provider value={{ store }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
