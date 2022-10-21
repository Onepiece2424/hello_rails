import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createStore from './reducks/store/store'
import { Provider } from 'react-redux'

export const store = createStore();   // storeが作られる。

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
