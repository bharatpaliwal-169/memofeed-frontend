// import React,{useState,useEffect} from 'react';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {
  Container
} from '@material-ui/core'
// import {useDispatch} from 'react-redux';
// import { getPosts } from './redux/actions/post'
import Auth from './components/Auth'
import Home from './components/Home'
// import Navbar from './components/Navbar'
import BTP from './components/BTP'
// import AddPost from './components/AddPost'

const App = () => {
  // //how data management will look like without REDUX.
  // const [currentId,setCurrentId] = useState(null);
  // // const classes = useStyles();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId,dispatch])
  
  return (
    <>
      <Router>
        <Container maxwidth="lg">
            <Routes>
              <Route path="/" exact element={<Home/>} ></Route>
              <Route path="/auth" exact element={<Auth/>}></Route>
            </Routes>
          <BTP />
        </Container>
      </Router>
      
      {/* <AddPost></AddPost> */}
    </>
  );
}

export default App;
