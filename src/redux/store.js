import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers'; // Your combined reducers file

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
