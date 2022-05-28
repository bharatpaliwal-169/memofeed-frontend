import React,{useState,useEffect} from 'react';
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
import BTP from './components/BTP'
// import AddPost from './components/AddPost'

const App = () => {
  //how data management will look like without REDUX.
  const [currentId,setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId,dispatch])
  
  return (
    <>
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            MemoFeed
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={1}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
                
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
                
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
      <BTP />
      {/* <AddPost></AddPost> */}
    </>
  );
}

export default App;
