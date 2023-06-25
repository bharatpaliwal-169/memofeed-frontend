import * as api from '../../api'
import {AUTH, CHANGE_PASSWORD_REQUEST,CHANGE_PASSWORD_REQUEST_FAILURE,
  LOGOUT,CHANGE_PASSWORD_SUCCESS,CHANGE_PASSWORD_FAILURE
} from '../types/actionTypes';

export const login = (formData, history) =>async(dispatch) => {
  try {
    const {data} = await api.login(formData);
    dispatch({type: AUTH,data})
    history.push("/");
  } catch (error) {
    alert(error.message);
    window.location.reload();
    console.log(error);
  }
}

export const signup = (formData, history) =>async(dispatch) => {
  try {
    const {data} = await api.signup(formData);
    dispatch({type: AUTH,data})
    history.push("/");
  } catch (error) {
    alert(error.message);
    window.location.reload();
    console.log(error);
  }
}

export const deleteAccount = (id,history) => async(dispatch) => {
  try {
    await api.deleteAccount(id);
    localStorage.removeItem('profile');
    localStorage.removeItem('stats');
    history.push("/");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

export const changePasswordRequest = (formData) => async(dispatch) => {
  try {
    console.log("got cp req");
    const response = await api.changePasswordRequest(formData);
    console.log(response);
    if(response.status === 200){
      dispatch({type: CHANGE_PASSWORD_REQUEST,SNACK_TYPE:"SUCCESS"});
    }else{
      dispatch({type:CHANGE_PASSWORD_REQUEST_FAILURE,SNACK_TYPE:"ERROR"});
    }
  } catch (error) {
    // send a failure snackbar
    dispatch({type:CHANGE_PASSWORD_REQUEST_FAILURE,SNACK_TYPE:"ERROR"});
    console.error("changepswdReq : "+error.message);
  }
}

export const changePassword = (formData,history) => async(dispatch) => {
  try {
    console.info("password change")
    const response = await api.changePassword(formData);
    if(response.status === 202){
      dispatch({type : CHANGE_PASSWORD_SUCCESS,SNACK_TYPE:"SUCCESS"});
      dispatch({type : LOGOUT});
      history.push('/auth');
    }
  } catch (error) {
    dispatch({type: CHANGE_PASSWORD_FAILURE,SNACK_TYPE:"ERROR"})
    console.error("changePassword : " + error.message);
  }
  console.log("done")
}