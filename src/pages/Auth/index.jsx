//react
import React,{useState} from 'react'
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

  const initialPasswordMetrics = {
    progress:0,
    strength:"",
    strengthColor:""
  }
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong","Strong","Strong","Strong"];
  const strengthColorLabels = ["error","warning","warning","success","success","primary","primary","primary","primary"];

  const [isSignup,setIsSignup] = useState(false);
  const [formData,setformData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [loading,setLoading] = useState(false);
  const [passwordMetric,setPasswordMetric] = useState(initialPasswordMetrics);
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
      let score = getStrength(e.target.value);
      console.log(score);
      if(score >= 5) score = 5;
      const strengthScore = strengthLabels[score];
      const strengthColorLabel = strengthColorLabels[score];
      setPasswordMetric({ ...passwordMetric, strength: strengthScore,strengthColor:strengthColorLabel,progress:((score/5)*100)});
      
      console.log("passwordMetrics : " + passwordMetric.progress + passwordMetric.strength + passwordMetric.strengthColor);
      
    }
  }
  
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleForgotPassword = () => {
    history("/auth/forgotpassword");
  }

  const getStrength = (password) =>{
    let score = 0;
    if (password.length >= 8) score += 1;  // Minimum length
    if (/[A-Z]/.test(password)) score += 1;  // Uppercase letter
    if (/[a-z]/.test(password)) score += 1;  // Lowercase letter
    if (/\d/.test(password)) score += 1;  // Number
    if (/[\W_]/.test(password)) score += 1;  // Special character
    return score;
  }

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

                    {formData.password && (
                      <Box sx={{flexGrow:1}} style={{margin:'1rem'}}>
                        <LinearProgress
                          variant="determinate"
                          value={passwordMetric.progress}
                          color={passwordMetric.strengthColor}
                          sx={{ height: 8, borderRadius: 5 }}
                        />
                        <Typography variant="body2" sx={{ mt: 1, textAlign: "center" }}>
                          Password Strength: {passwordMetric.strength}
                        </Typography>
                      </Box>
                    )}
                </FormControl>

                
                
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} disabled={passwordMetric.strength!="Good"}>
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