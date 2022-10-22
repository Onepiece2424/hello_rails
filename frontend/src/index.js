import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createStore from './reducks/store/store'
import { Provider } from 'react-redux'
import * as History from 'history'
import {BrowserRouter as Router} from 'react-router-dom';

const history = History.createBrowserHistory();
export const store = createStore(history);   // storeが作られる。

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
