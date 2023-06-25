//react
import React,{useEffect} from 'react';
import { BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';

//css
import {Container} from '@material-ui/core'

//components
import Auth from './pages/Auth'
import Home from './pages/Home'
import Profile from './pages/Profile'
import PostDetail from './pages/PostDetails'
import Tags from './pages/Tags'
import Navbar from './components/NavbarUI'
import Footer from './components/Footer'
// import Email from './components/EmailVerify'
import ChangePassword from './pages/ChangePassword';
import ForgotPassword from './pages/ForgotPassword';
import BTP from './utils/BTP'
import Loading from './utils/FlashUI'

//__init__
const App = () => {
  const [load,setLoad] = React.useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {setLoad(false)},4000);
    return () => {
      clearInterval(timer);
    }  
  }, []);
  
  const user = JSON.parse(localStorage.getItem('profile'));
  if(load){
    return <Loading></Loading>
  }
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
              <Route path="/profile" exact component = {Profile} ></Route>
              <Route path="/tags/:name" exact component = {Tags} ></Route>
              <Route path="/auth/changepassword" exact component ={ChangePassword}></Route>
              <Route path="/auth/forgotpassword" exact component={ForgotPassword}></Route>
              <Route path="*" component={() =><Redirect to="/posts" />} ></Route>
            </Switch>
          <React.Suspense fallback={<Loading/>}>
            <BTP />
            <Footer/>
          </React.Suspense>  
        </Container>
      </Router>
    </>
  );
}

export default App;