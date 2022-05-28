import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { getPosts } from '../../redux/actions/post'
import {
  Container,
  Grow,Grid
} from '@material-ui/core'
import Posts from '../Posts/Posts'
import Form from '../Forms/Form'
import Navbar from '../Navbar'

function Home() {
  //how data management will look like without REDUX.
  const [currentId,setCurrentId] = useState(null);
  // const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId,dispatch])
  return (
    <>
      <Navbar></Navbar>
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
    </>
  )
}

export default Home;