//react
import React from 'react';
// import {Link} from 'react-router-dom';

//redux
import {useSelector} from 'react-redux';
//css
import {Grid,
  // Paper,Typography,Button
} from '@material-ui/core'
import useStyles from './styles'
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Post from './Post';
import Loading from '../Loading'

const Posts = ({setCurrentId}) => {
  const {posts,isLoading} = useSelector((state) => state.posts);
  const classes = useStyles()

  if(!posts.length && !isLoading) {
    return (
      <>
        {/* <Paper className={classes.mainPaper}>
          <Typography variant="h3" style={{fontWeight: 'bold',color: 'red'}} component="h3">
            No Such posts found!!
          </Typography>
          <Typography variant="subtitle1" component="body" style={{fontWeight: '500',color: 'gray'}}>
            Try searching with other better terms....
          </Typography>

          <Button variant='text' component={Link} to="/posts" >
            <ArrowBackIcon />
            <Typography variant="body">
              Go Back
            </Typography>
          </Button>
        </Paper> */}
        <Loading></Loading>
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