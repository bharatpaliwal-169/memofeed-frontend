import axios from 'axios';
const URL = 'http://localhost:5000/posts'; //backend route is here


export const fetchPosts = () => {
  return axios.get(URL)
}


export const CreatePost = (newPost) => {
  return axios.post(URL,newPost)
}