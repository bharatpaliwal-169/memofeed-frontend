import {AUTH,CHANGE_PASSWORD_REQUEST,CHANGE_PASSWORD_REQUEST_FAILURE,
  LOGOUT,CHANGE_PASSWORD_FAILURE,CHANGE_PASSWORD_SUCCESS, FORGOT_PASSWORD_REQUEST, 
  FORGOT_PASSWORD_REQUEST_FAILURE, EMAIL_VERIFICATION_FAILURE, EMAIL_VERIFICATION_REQUEST, 
  EMAIL_VERIFICATION_REQUEST_FAILURE,
  EMAIL_VERIFICATION_SUCCESS,
  SHOW_NOTIFICATION,
  RESET_AUTH_STATE
} from '../types/actionTypes';

const authReducer = (state = {authData: null}, action) => {
  switch (action.type) {
    case AUTH: 
      localStorage.setItem('profile', JSON.stringify({...action?.data}));
      return {...state,authData: action?.data};
    case LOGOUT:
      localStorage.removeItem('profile');
      localStorage.removeItem('stats');
      return {...state,authData: null};
    
    case SHOW_NOTIFICATION:
      return {...state, notification: action.payload}
    
    case RESET_AUTH_STATE:
      return {...state, authStatus : "RESET"}
    // IT didn't work when I put it as CH || OH
    case CHANGE_PASSWORD_REQUEST:
      console.log("cp reducer :" + action.SNACK_TYPE);
      return {...state,authData:{SNACK_TYPE: action?.SNACK_TYPE}}
    case CHANGE_PASSWORD_REQUEST_FAILURE:
      return {...state,authData:{SNACK_TYPE: action?.SNACK_TYPE}}
    case CHANGE_PASSWORD_SUCCESS:
      console.log("cp reducer :" + action.SNACK_TYPE);
      return {...state,authData:{SNACK_TYPE: action?.SNACK_TYPE}}
    case CHANGE_PASSWORD_FAILURE:
      return {...state,authData :{SNACK_TYPE:action?.SNACK_TYPE}}
    case FORGOT_PASSWORD_REQUEST:
      console.log("cp reducer :" + action.SNACK_TYPE);
      return {...state,authData:{SNACK_TYPE: action?.SNACK_TYPE}}
    case FORGOT_PASSWORD_REQUEST_FAILURE:
      return {...state,authData:{SNACK_TYPE: action?.SNACK_TYPE}}
    case EMAIL_VERIFICATION_REQUEST:
      return {...state,authData:{SNACK_TYPE: action?.SNACK_TYPE}}
    case EMAIL_VERIFICATION_REQUEST_FAILURE:
      return {...state,authData:{SNACK_TYPE: action?.SNACK_TYPE}}
    case EMAIL_VERIFICATION_SUCCESS:
      return {...state,authData:{SNACK_TYPE: action?.SNACK_TYPE}}
    case EMAIL_VERIFICATION_FAILURE:
      return {...state,authData:{SNACK_TYPE: action?.SNACK_TYPE}}
    default:
      return state; 
  }
}
export default authReducer;