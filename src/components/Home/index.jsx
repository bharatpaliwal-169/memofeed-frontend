import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { getPosts } from '../../redux/actions/post'
import {
  Container,
  Grow,Grid,
  // Button
} from '@material-ui/core'
import Posts from '../Posts/Posts'
import Form from '../Forms/Form'
import Navbar from '../Navbar'
import {send} from '../notifications/notify';

function Home() {
  //how data management will look like without REDUX.
  const [currentId,setCurrentId] = useState(null);
  // const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());    
  }, [currentId,dispatch]);
    
  useEffect(() => {
    const interval = setInterval(() => { send("MemoFeed", 
    "Welcome! Please explore and add your stories, happy Exploring!")}, 8640000);
    return () => clearInterval(interval);  
  }, []);
    
  // const handleClick = () => {
  //   send("MemoFeed", "Welcome! Please explore and add your stories, happy Exploring!");
  // }

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
              {/* <Button variant="outlined" onClick={handleClick}>Notify me</Button> */}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  )
}

export default Home;