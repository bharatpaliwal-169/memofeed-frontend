import axios from 'axios';
const DEV_URL = 'http://localhost:5000/'; 
// const PROD_URL = "https://memofeed-backend.onrender.com/";
const API = axios.create({
  // baseURL : PROD_URL
  baseURL : DEV_URL
});
API.interceptors.request.use((req)=>{
  if(localStorage.getItem('profile')){
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

//feed
export const fetchPost = (id) => API.get(`/feed/${id}`);
export const fetchPosts = (page) => API.get(`/feed?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/feed/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const CreatePost = (newPost) => API.post('/feed', newPost);
export const likePost = (id) => API.patch(`/feed/${id}/likePost`);
export const UpdatePost = (id, updatedPost) => API.patch(`/feed/${id}`, updatedPost);
export const DeletePost = (id) => API.delete(`/feed/${id}`);
export const comment = (value, id) => API.post(`/feed/${id}/commentPost`, { value });
export const getStatsForUser = (id) => API.get(`/feed/stats/${id}`);
//auth
export const login = (formData) => API.post('/auth/login', formData);
export const signup = (formData) => API.post('/auth/signup', formData);
export const deleteAccount = (id) => API.delete(`/auth/deleteAccount/${id}`);
export const changePasswordRequest = (formData) => API.post('/auth/changepswd/request',formData);
export const forgotPasswordRequest = (formData) => API.post('auth/forgotpswd/request',formData);
export const changePassword = (formData,token) => API.post(`/auth/changepassword/?token=${token}`,formData);
// export const forgotPassword = () => API.get('/auth/forgotpassword');
export const emailVerificationRequest = (formData) => API.post('/auth/verifyEmail',formData);
export const emailVerification = (token) => API.get(`/auth/verification/?token=${token}`);
