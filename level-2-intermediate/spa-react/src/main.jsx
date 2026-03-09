import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // On va garder un fichier de style global minimal

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);