import {AUTH,CHANGE_PASSWORD_REQUEST,CHANGE_PASSWORD_REQUEST_FAILURE,
  LOGOUT,CHANGE_PASSWORD_FAILURE,CHANGE_PASSWORD_SUCCESS
} from '../types/actionTypes';

const authReducer = (state = {authData: null}, action) => {
  switch (action.type) {
    case AUTH:
      // console.log(action.data); 
      localStorage.setItem('profile', JSON.stringify({...action?.data}));
      return {...state,authData: action?.data};
    case LOGOUT:
      localStorage.removeItem('profile');
      localStorage.removeItem('stats');
      return {...state,authData: null};
    
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
    default:
      return state;
  }
}
export default authReducer;