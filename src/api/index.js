import axios from 'axios';
const URL = 'http://localhost:5000/posts'; //backend route is here


export const fetchPosts = () => {
  return axios.get(URL)
}


export const CreatePost = (newPost) => {
  return axios.post(URL,newPost)
}

export const UpdatePost = (id,updatedPost) => {
  return axios.patch(`${URL}/${id}`,updatedPost) // this is how we will call an api with Dynamic ID.
}

export const DeletePost = (id) => {
  return axios.delete(`${URL}/${id}`);
}

export const likePost = (id) => {
  return axios.patch(`${URL}/${id}/likePost`)
}