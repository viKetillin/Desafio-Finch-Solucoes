import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import './css/tailwindcss.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);