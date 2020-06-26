import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import data from './components/data.js';

console.log(data['records'][0]);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('button')
);
