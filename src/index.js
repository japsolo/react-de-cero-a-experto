import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';

const container = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>, 
  container
);
