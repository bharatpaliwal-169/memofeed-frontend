import { combineReducers } from "redux";
import posts from './post'
import authReducer from './auth'
export default combineReducers({
  posts,authReducer
});
