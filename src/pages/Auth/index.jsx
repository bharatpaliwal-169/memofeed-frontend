//react
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

//redux
import {useDispatch} from 'react-redux'
import {signup , login} from '../../redux/actions/auth'

//css
import {Container,Avatar,Paper,Grid,TextField,Typography,
  CircularProgress,Button,InputAdornment, IconButton} from "@material-ui/core"
import {LockOutlined,Visibility,VisibilityOff} from '@material-ui/icons';
//components
import useStyles from './style'
import Input from './input'
// const Input = React.lazy(()=> import('./input'));


const Auth = () =>{
  const initialState = {
    firstName: '',lastName: '',email: '',password: ''
  };
  //state
  // const [success, setSuccess] = useState(false);
  const [isSignup,setIsSignup] = useState(false);
  const [formData,setformData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [loading,setLoading] = useState(false);
  //support
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  //function
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if(isSignup) {
      dispatch(signup(formData,history));
    } else{
      dispatch(login(formData,history));
    }
  }

  const handleChange = (e) => {
    if(e.target.name === 'password' && e.target.value.length < 6 && isSignup){
      alert('Password must be at least 6 characters long');
    }
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <>
      <Container component="main" maxwidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar} >
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">
            {isSignup ? "Sign Up" : "Login"}
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input name = "firstName" label="firstName" handleChange={handleChange} autoFocus half required/>
                  <Input name = "lastName" label="lastName" handleChange={handleChange}  half required />
                </>
              )}
              <Input name = "email" label="email Address" type="email" handleChange={handleChange} required/>
              
              <TextField name = "password" placeholder='password' variant="outlined" type={showPassword ? "text" : "password"} 
                onChange={handleChange} fullWidth required  style={{padding:'0.5rem'}}
                InputProps={{ // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              
              {isSignup ? (
                <Typography variant='caption' style={{padding:'0.75rem'}}>
                  * Keep your password at least 6 characters long.
                </Typography>
              ) : null}
              
            </Grid>
            
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              {isSignup && !loading ? "Sign Up " : "Login "}
              {loading ? (
                <CircularProgress size={20} style={{color:'#fff'}} />
              ) : null}
            </Button>

            <Grid container justifyContent="flex-start">
              <Grid item>
                <Button onClick={switchMode}>
                  { isSignup ? 'Already have an account? Login in' : "Don't have an account? Sign Up" }
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  )
}

export default Auth;