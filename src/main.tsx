import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ModernPortfolio from './ModernPortfolio';
import { Toaster } from 'react-hot-toast';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster position="top-center" reverseOrder={false} />
  </React.StrictMode>
);

