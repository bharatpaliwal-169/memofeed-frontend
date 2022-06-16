/* eslint-disable import/no-anonymous-default-export */
import {FETCH_ALL,CREATE,UPDATE,DELETE,LIKE,FETCH_BY_SEARCH,FETCH_POST,COMMENT} from '../types/actionTypes';
//we now use reducer as a object
export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        NumberOfPages: action.payload.NumberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.post };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === +action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    case LIKE:
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case UPDATE:
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETE:
      return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
    default:
      return state;
  }
};