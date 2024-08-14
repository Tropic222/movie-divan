import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './app/store.js';
import App from './components/App.jsx';

import 'bear-react-carousel/dist/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <CssBaseline /> <App />
  </Provider>,
);
