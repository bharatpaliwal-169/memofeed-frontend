import * as api from '../../api'

//Actions creators

export const getPosts = () => async (dispatch) => {
  
  try {
    const { data } = await api.fetchPosts(); // get res from api and destructure the data object
    
    dispatch({type : 'FETCH_ALL' , payload : data}); // action = {type: '', payload: [object] }
  } catch (error) {
    console.log(error.message);
    return {data : 'there is a problem fetching the data'}
  }

}

export const createPost = (post)=>  async (dispatch) => {
  try {
    const {data} = await api.CreatePost(post)

    dispatch({type: 'CREATE',payload: data});
  } catch (error) {
    console.log(error.message);
  }
}