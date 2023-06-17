import React, { useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getPostsBySearch } from '../../redux/actions/post';

import Post from '../../components/Posts/Post';
import Loading from '../../components/Loading'

import { Paper,Typography, Grid, Button } from '@material-ui/core';
import useStyle from './styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Tags = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyle();

  useEffect(() => {
    dispatch(getPostsBySearch({ tags: name }));
  }, []);

  if (!posts.length && !isLoading){
    <Paper className={classes.mainPaper}>
      <Typography variant="h3" style={{fontWeight: 'bold',color: 'red'}} component="h3">
        No posts found :(
      </Typography>
      <Typography variant="subtitle1" component="body" style={{fontWeight: '500',color: 'gray'}}>
        Try other tags ......
      </Typography>

      <Button variant='text' component={Link} to="/posts" >
        <ArrowBackIcon />
        <Typography variant="body">
          Go Back
        </Typography>
      </Button>
    </Paper>
  }
  return (
    <>
      <Paper className={classes.mainPage} elevation={5}>

        <Typography variant="h2" className={classes.heading} style={{margin:'2rem'}}> 
          #{name} 
        </Typography>
        
        {isLoading ? <Loading /> : (
          <Grid container alignItems="stretch" spacing={3}>
          {posts?.map((post) => (
            <Grid key={post._id} item xs={12} sm={12} md={3}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
        )}
      </Paper>
    </>
  )
}

export default Tags;