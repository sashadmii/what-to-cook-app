import './index.css';

// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line no-unused-vars
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"></meta>
    <App />
  </React.StrictMode>
);

reportWebVitals();
