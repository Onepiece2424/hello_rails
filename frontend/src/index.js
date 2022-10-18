import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import createStore from './module/users/store'
import { Provider } from 'react-redux'

export const store = createStore();   // storeが作られる。

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
