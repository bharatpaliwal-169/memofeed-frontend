//react
import React from 'react';
//redux
import {useSelector} from 'react-redux';
//css
import {Grid2,Grow} from '@mui/material'
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
      <Grow in>
        <Grid2 container sx={{display:'flex',flexWrap:'wrap',justifyContent:"center",alignItems:"stretch",padding:'1rem',marginTop:'1rem'}} spacing={2} >
            {posts.map((post,index) => (
              <Grid2 key={index} item size={{xs:12,sm:12,md:6,lg:4,xl:4}}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid2>
            ))}
          
        </Grid2>
      </Grow>
    )
  );
} 
export default Posts;