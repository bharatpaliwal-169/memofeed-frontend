//react
import React from 'react';
import {useSelector} from 'react-redux'
//css
import {Grid,Typography} from '@material-ui/core'
import useStyles from './styles'

import Post from './Post';
import Loading from '../Loading'

const Posts = ({setCurrentId}) => {

  const {posts,isLoading} = useSelector((state) => state.posts);
  const classes = useStyles()
  // console.log(posts);

  if(!posts.length && !isLoading) {
    return (
      <>
        <Typography variant="h3" style={{fontWeight: 'bold',color: 'red'}} component="h3">
          No Such posts found!!
        </Typography>
        <Typography variant="subtitle1" component="body" style={{fontWeight: '500',color: 'gray'}}>
          Try searching with other better terms....
        </Typography>
      </>
    )
  }
  return (
    isLoading ? <Loading /> : (
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
        {posts.map((post,index) => (
          <Grid key={index} item xs={12} sm={12} md={6} >
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
} 
export default Posts;