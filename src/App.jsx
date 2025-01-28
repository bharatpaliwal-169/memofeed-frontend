//react
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

//css

import Loading from './components/FlashUI'

//pages
const Home = React.lazy(()=> import("./pages/Home"));
const Auth = React.lazy(()=> import("./pages/Auth"));
const Profile = React.lazy(()=> import("./pages/Profile"));
const PostDetail = React.lazy(()=> import("./pages/PostDetails"));
const Topics = React.lazy(()=> import("./pages/Topics"));
const EmailVerification = React.lazy(()=> import("./pages/EmailVerification"));
const Verification = React.lazy(()=>import("./pages/EmailVerification/Verified"));
const ChangePassword = React.lazy(()=>import("./pages/ChangePassword"));
const ForgotPassword = React.lazy(()=>import("./pages/ForgotPassword"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

//components
const Navbar = React.lazy(()=> import("./components/NavbarUI"));
const Footer = React.lazy(()=> import("./components/Footer"));
// const BTP = React.lazy(()=> import("./components/BTP"));

//__init__
const App = () => {
  const [load,setLoad] = useState(true);
  
  //flash screening...
  useEffect(() => {
    const timer = setTimeout(() => setLoad(false),2000);
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
        {/* <Container maxwidth="xl"> */}
          <Navbar />
          
          <React.Suspense fallback={<Loading />}>

            <Routes>
              <Route path="/"  element={<Navigate to="/feed" />} ></Route>
              <Route path="/feed"  element={<Home />}></Route>
              <Route path="/feed/search"  element = {<Home  />} ></Route>
              <Route path="/feed/:id"  element = {<PostDetail  />}></Route>
              <Route path="/auth"  element={!user ? <Auth  /> : <Navigate to="/feed"  />}></Route>
              <Route path="/profile"  element = { <Profile  />} ></Route>
              <Route path="/topics/:name"  element = { <Topics />} ></Route>
              <Route path="/auth/changepassword"  element ={ <ChangePassword  />}></Route>
              <Route path="/auth/forgotpassword"  element={ <ForgotPassword  />}></Route>
              <Route path="/auth/emailverification"  element={ <EmailVerification />}></Route>
              <Route path="/auth/verification"  element={(user ? ( <Verification  />) : <Navigate to="/feed" />)} ></Route>
              <Route path="/not-found"  element={<NotFound  />}></Route>
              <Route path="*" element={<Navigate to="/not-found" />} ></Route>
            </Routes>

            {/* <BTP /> */}
            <Footer />
          </React.Suspense>  
        {/* </Container> */}
      </Router>
    </>
  );
}

export default App;