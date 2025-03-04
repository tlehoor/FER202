// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Hoặc App.css, tùy bạn đặt tên
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomThemeProvider } from './components/ThemeContext'; // Import
import { CartProvider } from './components/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <CustomThemeProvider>
        <CartProvider>
            <App />
        </CartProvider>
    </CustomThemeProvider>
  </React.StrictMode>
);

reportWebVitals();