import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HeroUIProvider } from "@heroui/react";  

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <HeroUIProvider defaultTheme="light">
        <App />
      </HeroUIProvider>
  </React.StrictMode>
);

reportWebVitals();
