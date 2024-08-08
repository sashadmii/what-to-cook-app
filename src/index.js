import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
