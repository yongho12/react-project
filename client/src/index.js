import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import AppWithContext from "./components/AppWithContext";


import configureStore from "./store/store";
const store = configureStore();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWithContext />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);