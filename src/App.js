//react
import React,{useEffect} from 'react';
import { BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
//css
import {Container} from '@material-ui/core'
//components
import Auth from './pages/Auth'
import Home from './pages/Home'
import PostDetail from './pages/PostDetails'
import Navbar from './components/NavbarUI'
import BTP from './utils/BTP'
import {Footer} from './components/Footer'
//functions
import {send} from './utils/notifications/notify';
// import Loading from './utils/WelcomeUI'

//__init__
const App = () => {
  
  useEffect(() => {
    const interval = setInterval(() => { send("MemoFeed", 
    "Welcome! Please explore and add your memories, happy Exploring!")}, 864000);
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
              <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}></Route>
              {/* <Route path="/test" exact component = {Loading}></Route> */}
              <Route path="*" component={() =><Redirect to="/posts" />} ></Route>
            </Switch>
          <BTP />
          <Footer/>
        </Container>
      </Router>
    </>
  );
}

export default App;