//react
import React from 'react';
//redux
import {useSelector} from 'react-redux';
//css
import {Grid2,Box} from '@mui/material'
import useStyles from './styles'

import Post from './Post';
import Loading from '../Loading'

const Posts = ({setCurrentId}) => {
  const {posts,isLoading} = useSelector((state) => state?.posts);
  const classes = useStyles()

  if(!posts.length && !isLoading) {
    return (
      <>
        <Loading />
      </>
    )
  }
  return (
      isLoading ? <Loading /> : (
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 className={classes.mainContainer} container justifyContent="center" alignItems="stretch" spacing={3} sx={{ padding: 1 }} >
          
          {posts.map((post,index) => (
            
            <Grid2 key={index} item xs={12} sm={12} md={4} lg={4} xl={3} >
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid2>
          
          ))}
        
        </Grid2>
      </Box>
    )
  );
} 
export default Posts;