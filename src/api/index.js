import axios from 'axios';
// const URL = 'http://localhost:5000/posts'; //backend route is here
// const AUTH_URL = 'http://localhost:5000/auth'; //

const API = axios.create({baseURL : 'http://localhost:5000/'});
API.interceptors.request.use((req)=>{
  if(localStorage.getItem('profile')){
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

// export const fetchPosts = () => {return axios.get(URL)}
// export const CreatePost = (newPost) => {return axios.post(URL,newPost)}
// export const UpdatePost = (id,updatedPost) => {
//   return axios.patch(`${URL}/${id}`,updatedPost) // this is how we will call an api with Dynamic ID.
// }
// export const DeletePost = (id) => {return axios.delete(`${URL}/${id}`);}
// export const likePost = (id) => {return axios.patch(`${URL}/${id}/likePost`)}


// export const login = (formData) => {
//   return axios.post(`${AUTH_URL}/login`,formData);
// }
// export const signup = (formData) => {
//   return axios.post(`${AUTH_URL}/signup`,formData);
// }

// export const fetchPosts = () => API.get('/posts');
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const CreatePost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const UpdatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const DeletePost = (id) => API.delete(`/posts/${id}`);
export const login = (formData) => API.post('/auth/login', formData);
export const signup = (formData) => API.post('/auth/signup', formData);
