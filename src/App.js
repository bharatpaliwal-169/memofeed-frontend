import React,{useEffect} from 'react';
import {
  Container,
  AppBar,
  Typography,
  Grow,Grid
} from '@material-ui/core'

import useStyles from './styles';
import {useDispatch} from 'react-redux';
import { getPosts } from './redux/actions/post'

import Posts from './components/Posts/Posts'
import Form from './components/Forms/Form'


const App = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  
  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          MemoFeed
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
