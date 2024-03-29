//react
import React,{useState,useEffect} from 'react'
import {Link,useHistory,useLocation} from 'react-router-dom';
import decode from 'jwt-decode';

//redux
import {useDispatch} from 'react-redux'
import * as actionType from '../../redux/types/actionTypes'

//css
import { AppBar,Toolbar,CssBaseline,
  Typography,useMediaQuery,useTheme,
  Button,Avatar,Chip,Tooltip
} from "@material-ui/core";

// import DrawerUI from "./DrawerUI";
import useStyles from "./styles"
import Loading from '../Loading'

const DrawerUI = React.lazy(()=> import('./DrawerUI'));

const NavbarUI = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const handleAuth = () => {
    console.log('handleAuth');
    history.push('/auth');
  }
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push('/auth');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if(token) {
      const decodedToken = decode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()){
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem('profile')));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <CssBaseline />
        <Toolbar>
          <Typography component={Link} to="/" className={classes.heading} 
            variant="h3" >
            Memofeed
          </Typography>
          {isMobile ? (
            <React.Suspense fallback={<Loading />}>
              <DrawerUI />
            </React.Suspense>
          ) : (
            <div className={classes.toolbar}>

              {user ? (
                <div className={classes.profile}>
                  <Typography variant='body1' component="div" style={{fontSize:'0.5rem',padding:'0.5rem'}}>
                    {(user?.result?.verified ===true || user?.verified === true ) ? <Chip label="Verified &#x2714;" color="primary" /> :null}
                  </Typography>
                  
                  <Avatar className={classes.purple} alt={user?.result?.name} src = {user?.result?.imageUrl}>
                    {user?.result?.name?.charAt(0)}
                  </Avatar>
                  
                  <Tooltip title="visit your profile here">
                    <Typography className={classes.userName} variant="h5" component={Link} to="/profile">
                      {user?.result?.name}    
                    </Typography>
                  </Tooltip>

                  
                  <Button className={classes.logout} variant="contained" color="secondary" onClick={logout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <Button onClick={handleAuth} variant="contained" color="primary">Login/Sign-up</Button>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavbarUI;