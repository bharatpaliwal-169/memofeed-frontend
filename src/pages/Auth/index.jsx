//react
import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

//redux
import {useDispatch} from 'react-redux'
import {signup , login} from '../../redux/actions/auth'

//css
import {Container,Typography,FormControl,OutlinedInput,InputLabel,
  CircularProgress,Button,InputAdornment, IconButton,Box,
  LinearProgress} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useStyles from './style'

//components
import Input from './input'
import authBgCover from '../../assets/AuthBgCover.svg';
import { GlobalConstants } from '../../constants'

const Auth = () =>{
  
  //state
  const initialState = {
    firstName: '',lastName: '',email: '',password: ''
  };
  const strengthLabels = ['weak','medium','good','strong','best'];
  const [isSignup,setIsSignup] = useState(false);
  const [formData,setformData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [loading,setLoading] = useState(false);
  const [strength,setStrength] = useState("");
  const [progress,setProgress] = useState(0)

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
      alert("password is too small")
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
    if(e.target.name = "password"){
      setStrength(getStrength(e.target.value));
      console.log(strength);
    }
  }
  
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleForgotPassword = () => {
    history("/auth/forgotpassword");
  }

  const getStrength = (password) =>{
    let indicator = 0;
    if(/[a-z]/.test(password)) indicator++;
    if(/[A-Z]/.test(password)) indicator++;
    if(/\d/.test(password)) indicator++;
    if(/[^a-zA-Z0-9]/.test(password)) indicator++;
    if(password.length >=10) indicator++;
    return strengthLabels[indicator];
  }
  useEffect(()=> {
    console.log(progress);
    setProgress(20 * Number(strengthLabels.indexOf[strength]));
  },[progress])
  return (
    <>
      <Container component="main" maxwidth="xl">
        <Box className={classes.paper}>
          <Box component='section' sx={{display: { xs: "none", sm: "block" },flexGrow:1,width:'50%'}}>
            <img src={authBgCover} alt="AuthCover" className={classes.bgCover} />
          </Box>

          {/* SIGNIN FORM */}
          <Box component='section' sx = {{flexGrow:1,width:'50%'}} style={{alignItems:'center',textAlign:'center',padding:'1rem'}}>

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
                  {isSignup ? (
                    // <Typography variant='caption' style={{padding:'0.75rem'}}>
                    //   {GlobalConstants.minPassRequired}
                    // </Typography>
                    
                    <LinearProgress variant="determinate" color='success' value={progress} style={{width: '100%',marginTop:'2rem'}} />
                  ) : null}
                </FormControl>

                
                
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                  {isSignup ? GlobalConstants.SignUp : GlobalConstants.Login}
                  {loading ? (
                    <CircularProgress size={20} style={{color:'#fff'}} />
                  ) : null}
                </Button>
                
                <Button variant='outlined' color='primary' onClick={switchMode} fullWidth style={{margin:"0.5rem"}}>
                  { isSignup ? GlobalConstants.alreadyHaveAccount : GlobalConstants.newAccount }
                </Button>

                {isSignup ? null :
                  (
                    
                    <Button color='primary' onClick={handleForgotPassword} style={{margin:"0.5rem"}}>
                      {GlobalConstants.forgotPassword} ?
                    </Button>
                    
                  )
                }
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Auth;