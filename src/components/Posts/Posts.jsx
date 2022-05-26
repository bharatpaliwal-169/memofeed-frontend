import React from 'react';
import {useSelector} from 'react-redux'
import {Grid , CircularProgress} from '@material-ui/core'
import useStyles from './styles'
import Post from './Post';
const Posts = () => {

  const posts = useSelector((state) => state.posts); // here this state is the global object that we stored in redux
  // and we are returning the state.posts // how do we know that it is  posts (see index.js in reducers we pass posts)
  const classes = useStyles()
  
  console.log(posts);
  return (
    !posts.length ? <CircularProgress/> : (
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    )
  );
} 
export default Posts;