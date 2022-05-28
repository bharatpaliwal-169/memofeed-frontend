import * as api from '../../api'
import {FETCH_ALL,CREATE,UPDATE,DELETE,LIKE} from '../types/actionTypes';
//Actions creators

export const getPosts = () => async (dispatch) => {
  
  try {
    const { data } = await api.fetchPosts(); // get res from api and destructure the data object
    
    dispatch({type : FETCH_ALL , payload : data}); // action = {type: '', payload: [object] }
  } catch (error) {
    console.log(error.message);
    return {data : 'there is a problem fetching the data'}
  }

}

export const createPost = (post)=>  async (dispatch) => {
  try {
    const {data} = await api.CreatePost(post)
    console.log(data);
    console.log(post);
    dispatch({type: CREATE,payload: data});
  } catch (error) {
    console.log(error.message);
  }
}

//update
export const updatePost = (id,post)=> async (dispatch) => {
  try {
    const {data} = await api.UpdatePost(id,post);
    dispatch({type: UPDATE,payload: data});
  } catch (error) {
    console.log(error.message);
  }
}

//delete
export const deletePost = (id,post)=> async (dispatch) => {
  try {
    await api.DeletePost(id,post);
    dispatch({type: DELETE,payload: id});
  } catch (error) {
    console.log(error.message);
  }
}

//likePost
export const likePost = (id)=> async (dispatch) => {
  try {
    const {data} = await api.likePost(id);
    dispatch({type: LIKE,payload: data});
  } catch (error) {
    console.log(error.message);
  }
}