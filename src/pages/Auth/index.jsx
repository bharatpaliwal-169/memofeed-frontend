//react
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

//redux
import {useDispatch} from 'react-redux'
import {signup , login} from '../../redux/actions/auth'

//css
import {Container,Paper,Grid2,TextField,Typography,FormControl,OutlinedInput,InputLabel,
  CircularProgress,Button,InputAdornment, IconButton,
  Box} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useStyles from './style'

//components
import Input from './input'
// import authLogo from '../../assets/Auth.svg';
import authBgCover from '../../assets/AuthBgCover.svg';
import { GlobalConstants } from '../../constants'

const Auth = () =>{
  
  //state
  const initialState = {
    firstName: '',lastName: '',email: '',password: ''
  };
  
  // const [success, setSuccess] = useState(false);
  const [isSignup,setIsSignup] = useState(false);
  const [formData,setformData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [loading,setLoading] = useState(false);
  
  //support
  const classes = useStyles();
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  
  //functions
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password.length < 6 && isSignup){
      alert('password must be at least 6 characters');
      return;
    }
    setLoading(true);
    if(isSignup) {
      dispatch(signup(formData,history));
    } else{
      dispatch(login(formData,history));
    }
  }

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleForgotPassword = () => {
    history("/auth/forgotpassword");
  }

  return (
    <>
      <Container component="main" maxwidth="xl" style={{border:'2px solid green'}}>
        {/* <Typography variant={"h2"}  style={{color: '#09779A',fontWeight: 'bold',textAlign: 'center'}}>
          {GlobalConstants.brandName}
        </Typography> */}
        <Paper className={classes.paper} elevation={2}>

          <Box component='section' sx={{display: { xs: "none", sm: "block" },flexGrow:1,width:'50%'}} 
            style={{border: '2px solid blue'}}
          >
            <img src={authBgCover} alt="AuthCover" className={classes.bgCover} />
          </Box>

          <Box component='section' sx = {{flexGrow:1,width:'50%'}} style={{alignItems:'center',textAlign:'center',padding:'1rem',border:'2px solid green'}}>
            {/* <img src={authLogo} alt="Authentication" className={classes.media} /> */}

            <Typography variant="h3" style={{letterSpacing:'1px',fontWeight:'bold',color:'#09779A',margin:'1.25rem 0 1.25rem 0'}}>
              {isSignup ? GlobalConstants.SignUp : GlobalConstants.Login}
            </Typography>

            <form onSubmit={handleSubmit} className={classes.form}>
              <Box sx={{flexGrow:1}}>
                {isSignup && (
                  <>
                    <Input name = "firstName" label="firstName" handleChange={handleChange} autoFocus required/>
                    <Input name = "lastName" label="lastName" handleChange={handleChange} required />
                  </>
                )}
                
                <Input name = "email" fullWidth
                  label="email Address" 
                  type="email" 
                  handleChange={handleChange} 
                  required
                />
                
                {/* <TextField name = "password" label="password" variant="outlined" type={showPassword ? "text" : "password"} 
                  onChange={handleChange} fullWidth required  autoComplete='false'
                  slotProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          >
                          {showPassword ? <VisibilityIcon />:<VisibilityOffIcon/>}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                /> */}
                
                <FormControl variant="outlined" fullWidth style={{margin:'0.5rem'}}>
                  <InputLabel htmlFor="outlined-password">{GlobalConstants.Password}</InputLabel>
                  <OutlinedInput
                    id="outlined-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChange}  required  autoComplete='false'
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword ? 'hide the password' : 'display the password'
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityIcon />:<VisibilityOffIcon/>}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

                
                {isSignup ? (
                  <Typography variant='caption' style={{padding:'0.75rem'}}>
                    {GlobalConstants.minPassRequired}
                  </Typography>
                ) : null}
                
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                  {isSignup ? GlobalConstants.SignUp : GlobalConstants.Login}
                  {loading ? (
                    <CircularProgress size={20} style={{color:'#fff'}} />
                  ) : null}
                </Button>
                
                
              </Box>
              
              

              <Grid2 container justifyContent="flex-start" style={{margin:"0.5rem"}}>
                <Grid2 item>
                  <Button variant='outlined' color='primary' onClick={switchMode}>
                    { isSignup ? GlobalConstants.alreadyHaveAccount : GlobalConstants.newAccount }
                  </Button>

                  {isSignup ? null :
                    (
                      
                      <Button variant='outlined' color='primary' onClick={handleForgotPassword} style={{margin:"0.5rem"}}>
                        {GlobalConstants.forgotPassword} ?
                      </Button>
                      
                    )
                  }
                </Grid2>
                
              </Grid2>
            </form>
        </Box>
        
        </Paper>
      </Container>
    </>
  )
}

export default Auth;