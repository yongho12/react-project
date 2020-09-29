import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppWithContext from './components/AppWithContext';

ReactDOM.render(
  <React.StrictMode>
    <AppWithContext />
  </React.StrictMode>,
  document.getElementById('root')
);
