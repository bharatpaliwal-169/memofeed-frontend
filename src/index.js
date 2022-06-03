//react
import React from 'react';
import ReactDOM from 'react-dom';
//redux
import {createStore , applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk';
import {Provider } from 'react-redux'
import reducers from './redux/reducers'
//css and app
import './global.css';
import App from './App';

import {GoogleOAuthProvider} from '@react-oauth/google';

//redux store
const store = createStore(reducers, compose(applyMiddleware(thunk)))


ReactDOM.render(
  <GoogleOAuthProvider clientId='399679497476-8q075p3trk46pjpm764udan64djvv9b4.apps.googleusercontent.com'>         
    <Provider store={store} >
      <App />
    </Provider>
  </GoogleOAuthProvider>
  ,document.getElementById('root')
);