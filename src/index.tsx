import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Store from "./store/store";

const store = new Store();
export const Context = createContext({
  store,
});

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ store }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
