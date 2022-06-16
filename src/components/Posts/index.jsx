//react
import React from 'react';
import {useSelector} from 'react-redux'
//css
import {Grid} from '@material-ui/core'
import useStyles from './styles'

import Post from './Post';
import Loading from '../Loading'

const Posts = ({setCurrentId}) => {

  const {posts,isLoading} = useSelector((state) => state.posts);
  const classes = useStyles()
  console.log(posts);

  if(!posts.length && !isLoading) {
    return "NO POSTS!!"
  }
  return (
    isLoading ? <Loading /> : (
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
} 
export default Posts;