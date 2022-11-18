import * as api from '../../api'
import {AUTH} from '../types/actionTypes';

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