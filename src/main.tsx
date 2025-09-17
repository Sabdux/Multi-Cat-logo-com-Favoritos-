import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. A importação DEVE estar aqui
import { BrowserRouter } from 'react-router-dom'; 
import App from './App.tsx';
import { FavoritesProvider } from './context/FavoritesContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FavoritesProvider>
      {/* 2. O <BrowserRouter> DEVE envolver o <App /> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesProvider>
  </React.StrictMode>
);