//react
import * as React from 'react';

import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/styles';

//css n app
import './global.css';
import App from './App';
import theme from './theme';
import store from './redux/store';

//redux
import { Provider } from 'react-redux';

//o-Auth
import {GoogleOAuthProvider} from "@react-oauth/google";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <GoogleOAuthProvider clientId='276564143769-dupkvtlkaca8e41tjo28og8a2lppau7m.apps.googleusercontent.com'>
        <Provider store={store} >
          <App />
        </Provider>
      </GoogleOAuthProvider>
    </ThemeProvider>
    ,
);