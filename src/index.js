import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import NavBar from './nav-bar.js';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <NavBar/>
    <App />
  </React.StrictMode>
);



