import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Weather from './Weather';

ReactDOM.render(
  <React.StrictMode>
    <Weather />
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
