import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const container = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>, 
  container
);
