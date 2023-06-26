import React,{useState,useEffect} from 'react'
import {Link,useHistory,useLocation} from 'react-router-dom';
import decode from 'jwt-decode';

//redux
import {useDispatch} from 'react-redux'
import * as actionType from '../../redux/types/actionTypes'


import { Divider,Drawer,IconButton,Avatar,Button,Typography,Chip,
  List,ListItem,ListItemText} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles"

const DrawerUI = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push('/auth');
    setUser(null);
  };
  const handleProfile = () => {
    history.push("/profile")
  }

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

      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List className={classes.List}>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Typography variant='h5' className={classes.heading} >
                Memofeed
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider/>
          {user ? (
            <>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Avatar className={classes.purple} alt={user.result.name} src = {user.result.imageUrl}>
                    {user?.result?.name.charAt(0)}
                  </Avatar>

                  <Typography className={classes.userName} variant="h6">
                    {user?.result?.name}
                  </Typography>

                  <Typography variant='body1' component="div" style={{fontSize:'0.5rem',padding:'0.5rem'}}>
                    {user?.result?.verified ===true ? <Chip label="Verified &#x2714;" color="primary" /> :null}
                  </Typography>

                </ListItemText>
              </ListItem>
              <Divider />
              
              <ListItem onClick={handleProfile}>
                <ListItemText>
                  <Typography variant="h6" style={{marginBottom:'0.25rem',marginTop:'0.25rem'}}>
                    My Profile
                  </Typography>
                </ListItemText>
              </ListItem>

              <Divider />

              <Button className={classes.logout} variant="contained" 
                color="secondary" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Avatar >
                    U
                  </Avatar>
                  <Typography className={classes.userName} variant="h6">
                    Default User
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider/>

              <Button component={Link} to="/auth" variant="contained" color="primary">Login/Sign in</Button>
            </>
          )}
        </List>
      </Drawer>
      
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerUI