// //react
// import React,{useState,useEffect} from 'react';
// import {Link,useHistory,useLocation} from 'react-router-dom';
// import decode from 'jwt-decode';

// //redux
// import {useDispatch} from 'react-redux'
// import * as actionType from '../../redux/types/actionTypes'

// //css
// import {AppBar , Avatar, Button, Typography} from '@material-ui/core';
// import useStyles from './styles';
// import { Toolbar } from '@material-ui/core'


// export default function NavBar() {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const history = useHistory();

//   const logout = () => {
//     dispatch({ type: actionType.LOGOUT });
//     history.push('/auth');
//     setUser(null);
//   };

//   useEffect(() => {
//     const token = user?.token;
//     if(token) {
//       const decodedToken = decode(token);
//       if(decodedToken.exp * 1000 < new Date().getTime()){
//         logout();
//       }
//     }
//     setUser(JSON.parse(localStorage.getItem('profile')));

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [location])
  
//   return (
//     <>
//       <AppBar className={classes.appBar} position="static" color="inherit">

//         <div className={classes.brandContainer}>
//           <Typography component={Link} to="/" className={classes.heading} variant="h3" align="center">
//             Memofeed
//           </Typography>
//         </div>

//         <Toolbar className={classes.toolbar} >
//           {user ? (
//             <div className={classes.profile}>
//               <Avatar className={classes.purple} alt={user.result.name} src = {user.result.imageUrl}>
//                 {user.result.name.charAt(0)}
//               </Avatar>
//               <Typography className={classes.userName} variant="h6">
//                 {user.result.name}
//               </Typography>
//               <Button className={classes.logout} variant="contained" color="secondary" onClick={logout}>
//                 Logout
//               </Button>
//             </div>
//           ) : (
//             <Button component={Link} to="/auth" variant="contained" color="primary">Login/Sign in</Button>
//           )}
//         </Toolbar>

//       </AppBar>
//     </>
//   )
// }
