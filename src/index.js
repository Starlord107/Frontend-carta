import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HeroUIProvider } from "@heroui/react";  
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <HeroUIProvider defaultTheme="light">
        <App />
      </HeroUIProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
