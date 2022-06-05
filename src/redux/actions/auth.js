import * as api from '../../api'
import {AUTH,
  // LOGIN,SIGNUP
} from '../types/actionTypes';

export const login = (formData, history) =>async(dispatch) => {
  try {
    const {data} = await api.login(formData);
    dispatch({type: AUTH,data})
    history("/");
  } catch (error) {
    console.log(error);
  }
}

export const signup = (formData, history) =>async(dispatch) => {
  try {
    const {data} = await api.signup(formData);
    dispatch({type: AUTH,data})
    history("/");
  } catch (error) {
    console.log(error);
  }
}