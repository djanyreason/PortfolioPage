import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.jsx';
import store from './store';
import './styles.css';
import PortfolioTheme from './PortfolioTheme';
import { ThemeProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={PortfolioTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);
