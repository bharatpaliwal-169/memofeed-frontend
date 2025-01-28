//react
import React, { useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getPostsBySearch } from '../../redux/actions/post';

//components
import Post from '../../components/feed/Post';
import Loading from '../../components/Loading'

//css
import { Paper,Typography, Grid2, Button } from '@mui/material';
import useStyle from './styles';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';


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

      <Button variant='text' component={Link} to="/feed" >
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
          <Grid2 container alignItems="stretch" spacing={3}>
          {posts?.map((post) => (
            <Grid2 key={post._id} item xs={12} sm={12} md={3}>
              <Post post={post} />
            </Grid2>
          ))}
        </Grid2>
        )}
      </Paper>
    </>
  )
}

export default Tags;