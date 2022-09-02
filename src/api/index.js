import axios from 'axios';
// const DEV_URL = 'http://localhost:5000/auth'; 
// const PROD_URL = "https://memofeedbackend.herokuapp.com/"
const PROD_URL = "https://memofeed-backend.onrender.com/";
const API = axios.create({baseURL : PROD_URL});
API.interceptors.request.use((req)=>{
  if(localStorage.getItem('profile')){
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

//posts
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const CreatePost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const UpdatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const DeletePost = (id) => API.delete(`/posts/${id}`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
//auth
export const login = (formData) => API.post('/auth/login', formData);
export const signup = (formData) => API.post('/auth/signup', formData);
