//react
import React,{useState,useEffect} from 'react'
import {Link,useNavigate,useLocation} from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

//redux
import {useDispatch} from 'react-redux'
import * as actionType from '../../redux/types/actionTypes'

//css
import { Divider,Drawer,IconButton,Avatar,Button,Typography,Chip,
  List,ListItem,ListItemText} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

import useStyles from "./styles"
import { GlobalConstants } from '../../constants';

const DrawerUI = () => {
  
  const [openDrawer, setOpenDrawer] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history('/auth');
    setUser(null);
  };
  const handleProfile = () => {
    history("/profile")
  }

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

      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>

        <List className={classes.List}>
          
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Typography variant='h5' className={classes.heading} >
                {GlobalConstants.brandName}
              </Typography>
              <Typography variant='caption' >
                {GlobalConstants.brandTagLine2}
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
                    {GlobalConstants.profile}
                  </Typography>
                </ListItemText>
              </ListItem>

              <Divider />

              <Button className={classes.logout} variant="contained" 
                color="secondary" onClick={logout}>
                {GlobalConstants.logout}
              </Button>
            </>
          ) : (
            <>
              
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Avatar >
                    <PersonIcon />
                  </Avatar>
                  <Typography className={classes.userName} variant="h6">
                    {GlobalConstants.defaultUser}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider/>

              <Button component={Link} to="/auth" variant="contained" color="primary">{GlobalConstants.login}</Button>
            </>
          )}
        </List>
      </Drawer>
      
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerUI;