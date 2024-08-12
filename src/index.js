



import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { TranslationProvider } from './contexts/TranslationContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TranslationProvider> 
        <App />
      </TranslationProvider>
    </Router>
  </React.StrictMode>
);
