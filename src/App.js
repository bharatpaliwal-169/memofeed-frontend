// import React,{useState,useEffect} from 'react';
import React,{useEffect} from 'react';
import { BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import {
  Container
} from '@material-ui/core'
// import {useDispatch} from 'react-redux';
// import { getPosts } from './redux/actions/post'
import Auth from './components/Auth'
import Home from './components/Home'
import Navbar from './components/Navbar'
import PostDetail from './components/PostDetails'
import BTP from './components/BTP'
// import AddPost from './components/AddPost'
import {send} from './components/notifications/notify';

const App = () => {
  // //how data management will look like without REDUX.
  // const [currentId,setCurrentId] = useState(null);
  // // const classes = useStyles();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId,dispatch])
  useEffect(() => {
    const interval = setInterval(() => { send("MemoFeed", 
    "Welcome! Please explore and add your stories, happy Exploring!")}, 864000);
    return () => clearInterval(interval);  
  }, []);
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <>
      <Router>
        <Container maxwidth="xl">
          <Navbar></Navbar>
            <Switch>
              <Route path="/" exact component={() => <Redirect to="/posts" />} ></Route>
              <Route path="/posts" exact component={Home}></Route>
              <Route path="/posts/search" exact component = {Home} ></Route>
              <Route path="/posts/:id" exact component = {PostDetail}></Route>
              {/* How will I prevent a logged in user to access this page and redirect it to main landing page */}
              <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}></Route>
            </Switch>
          <BTP />
        </Container>
      </Router>
      
      {/* <AddPost></AddPost> */}
    </>
  );
}

export default App;
