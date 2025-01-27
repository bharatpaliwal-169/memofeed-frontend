//react
import React,{useState,useEffect} from 'react'
import {Link,useNavigate,useLocation} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

//redux
import {useDispatch} from 'react-redux'
import * as actionType from '../../redux/types/actionTypes'

//css
import { AppBar,Toolbar,
  Typography,useMediaQuery,useTheme,
  Button,Avatar,Chip,Tooltip
} from '@mui/material';

import Loading from '../Loading'
import useStyles from "./styles"
import { GlobalConstants } from '../../constants';

const DrawerUI = React.lazy(()=> import('./DrawerUI'));

const NavbarUI = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();

  const handleAuth = () => {
    console.log('handleAuth');
    history('/auth');
  }
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history('/auth');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if(token) {
      const decodedToken = jwtDecode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()){
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem('profile')));

  }, [location])

  return (
    <>
      <AppBar className={classes.appBar} position="static" color="inherit">
        
        <Toolbar>
          {/* branding */}
          <Typography component={Link} to="/" className={classes.heading} 
            variant="h3" >
            {GlobalConstants.brandName}
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
                    {GlobalConstants.logout}
                  </Button>
                </div>
              ) : (
                <Button onClick={handleAuth} variant="contained" color="primary">
                  {GlobalConstants.login}
                </Button>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavbarUI;