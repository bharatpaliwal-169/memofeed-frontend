//react
import React,{useEffect} from 'react';
import { BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';

//css
import {Container} from '@material-ui/core'


import Loading from './utils/FlashUI'

//pages
const Home = React.lazy(()=> import("./pages/Home"));
const Auth = React.lazy(()=> import("./pages/Auth"));
const Profile = React.lazy(()=> import("./pages/Profile"));
const PostDetail = React.lazy(()=> import("./pages/PostDetails"));
const Tags = React.lazy(()=> import("./pages/Tags"));
const EmailVerification = React.lazy(()=> import("./pages/EmailVerification"));
const Verification = React.lazy(()=>import("./pages/EmailVerification/Verified"));
const ChangePassword = React.lazy(()=>import("./pages/ChangePassword"));
const ForgotPassword = React.lazy(()=>import("./pages/ForgotPassword"));

//components
const Navbar = React.lazy(()=> import("./components/NavbarUI"));
const Footer = React.lazy(()=> import("./components/Footer"));
const BTP = React.lazy(()=> import("./utils/BTP"));

//__init__
const App = () => {
  const [load,setLoad] = React.useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {setLoad(false)},3600);
    return () => {
      clearInterval(timer);
    }  
  }, []);
  
  const user = JSON.parse(localStorage.getItem('profile'));
  if(load){
    return <Loading />
  }
  return (
    <>
      <Router>
        <Container maxwidth="xl">
          <React.Suspense fallback={<h1>MemoFeed</h1>}>
            <Navbar />
          </React.Suspense>

          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/" exact component={() => <Redirect to="/posts" />} ></Route>
              <Route path="/posts" exact component={props => <Home {...props} />}></Route>
              <Route path="/posts/search" exact component = {props => <Home {...props} />} ></Route>
              <Route path="/posts/:id" exact component = {props => <PostDetail {...props} />}></Route>
              <Route path="/auth" exact component={() => (!user ? (props=> <Auth {...props} />) : <Redirect to="/posts" />)}></Route>
              <Route path="/profile" exact component = {props => <Profile {...props} />} ></Route>
              <Route path="/tags/:name" exact component = {props => <Tags {...props}/>} ></Route>
              <Route path="/auth/changepassword" exact component ={props=> <ChangePassword {...props} />}></Route>
              <Route path="/auth/forgotpassword" exact component={props=> <ForgotPassword {...props} />}></Route>
              {/* <Route path="/auth/emailverification" exact component={() => (user ? <EmailVerification /> : <Redirect to="/posts" />)}></Route> */}
              <Route path="/auth/emailverification" exact component={props=> <EmailVerification {...props}/>}></Route>
              <Route path="/auth/verification" exact component={() => (user ? (props=> <Verification {...props} />) : <Redirect to="/posts" />)} ></Route>
              <Route path="*" component={() =><Redirect to="/posts" />} ></Route>
            </Switch>
            <BTP />
            <Footer />
          </React.Suspense>  
        </Container>
      </Router>
    </>
  );
}

export default App;