//react
import React from 'react';
import ReactDOM from 'react-dom';

//css n app
import './global.css';
import App from './App';

//redux
import { Provider } from 'react-redux'
import reducers from './redux/reducers'
import { createStore , applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store} >
      <App />
  </Provider>
  ,document.getElementById('root')
);