import '@src/styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@src/App';

import '@src/shared/icons/Icons';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
