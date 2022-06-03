import {AUTH,LOGOUT} from '../types/actionTypes';
const authReducer = (state = {authData : null}, action) => {
  switch (action.type) {
    case AUTH: 
      console.log(action?.data);
      return state;
    case LOGOUT: 
      console.log("logout");
      return state;
    default:
      return state;
  }
}
export default authReducer;