import React from 'react';
import ReactDOM from 'react-dom/client';

// Localization
import i18n from 'localization';

import App from './App';
import 'index.css';

i18n.init();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
