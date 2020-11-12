import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import myStore from '../redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
