import {AUTH,LOGOUT,LOGIN,SIGNUP} from '../types/actionTypes';

const authReducer = (state = {authData: null}, action) => {
  switch (action.type) {
    case AUTH:
      console.log(action.data); 
      localStorage.setItem('profile', JSON.stringify({...action?.data}));
      return {...state,authData: action?.data};
    case LOGOUT: 
      localStorage.removeItem('profile');
      return {...state,authData: null};
    case LOGIN: 
      console.log("login");
      return state;
    case SIGNUP: 
      console.log("signup");
      return state;
    default:
    return state;
  }
}
export default authReducer;