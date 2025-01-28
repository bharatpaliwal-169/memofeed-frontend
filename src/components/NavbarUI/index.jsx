//react
import React,{useState,useEffect} from 'react'
import {Link,useNavigate,useLocation} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

//redux
import {useDispatch} from 'react-redux'
import * as actionType from '../../redux/types/actionTypes'
import {getPostsBySearch } from '../../redux/actions/post';

//css
import { AppBar,Toolbar,Box,Container,
  Typography,useMediaQuery,useTheme,Button,
  Avatar,Tooltip,Menu,MenuItem,
  TextField,InputAdornment,IconButton 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Loading from '../Loading'
import useStyles from "./styles"
import { GlobalConstants } from '../../constants';
import Logo from "../../assets/M.svg";

const DrawerUI = React.lazy(()=> import('./DrawerUI'));
const settings = [{title: "My Profile",endpoint: "/profile"},{title: "Logout",endpoint: "/logout"}];

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

const NavbarUI = () => {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [search,setSearch] = useState('');
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const query = useQuery(); 


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    
  const handleAuth = () => {
    console.log('handleAuth');
    history('/auth');
  }
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history('/auth');
    setUser(null);
  };


  const handleKeyPress = (e) =>{
    if(e.keyCode === 13){ 
      searchPost();
    }
  }

  const searchPost = () => {
    if(!search){
      history("/");
    }
    else if(search.trim()){
      dispatch(getPostsBySearch({search}));
      history(`/feed/search?searchQuery=${search || 'none'}`);
    }
  }


  const handleMenuOptionCall = (option) => {
    history(option.toString());
    handleCloseUserMenu();
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
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" rel='noopener nofollow noreferrer preconnect'>
            <Box style={{ display: { xs: 'flex', md: 'none' },flexDirection: 'column',alignItems: 'center' }}>
                <img src={Logo} alt="Logo" fit="contain" width={64} height={64} />
            </Box>
          </Link>
          {isMobile ? (
            <React.Suspense fallback={<Loading />}>
              <DrawerUI />
            </React.Suspense>
          ) : (
            <>
              {/* SEARCH COMPONENT */}
              <Box component="div" sx={{flexGrow:1}} >
                <TextField
                  placeholder="Search…"
                  onKeyDown={handleKeyPress}
                  name="search"
                  variant="outlined"
                  fullWidth
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={classes.searchBox}
                  slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>,
                    },
                  }}
                />
              </Box>
              <Box sx={{ flexGrow: 100 }}></Box>
                {user ? (
                  <Box component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Tooltip title={GlobalConstants.openSettings}>
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar className={classes.purple} alt={user?.result?.name} src={user?.result?.imageUrl}>
                          {user?.result?.name?.charAt(0)}
                        </Avatar>
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="profile-menu"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {settings.map((setting) => (
                        <MenuItem key={setting}
                          onClick={() => handleMenuOptionCall(setting.endpoint)}
                        >
                          <Typography sx={{ textAlign: 'center' }}>{setting.title}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button onClick={handleAuth} variant="contained" color="primary">
                    {GlobalConstants.login}
                  </Button>
                )}
              
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavbarUI;




{/* <div className={classes.profile}>
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
                  </div> */}