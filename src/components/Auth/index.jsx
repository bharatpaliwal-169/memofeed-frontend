//react
import React,{useState,
  // useEffect
} from 'react'
import {useDispatch} from 'react-redux'
// import { useHistory } from 'react-router-dom';


//css
import {Container,Avatar,Paper,Grid,Typography,Button} from "@material-ui/core"
import useStyles from './style'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input'


const Auth = () => {
  // const GOOGLE_CLIENT_ID = "399679497476-8q075p3trk46pjpm764udan64djvv9b4.apps.googleusercontent.com"
  //states
  const initialState = {
    firstName: '',lastName: '',email: '',password: '',confirmPassword: '',
  }
  const[FormData,setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup,setIsSignup] = useState(false);
  //css
  const classes = useStyles();
  //redux
  const dispatch = useDispatch();
  //functions
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({...FormData, [e.target.name]: e.target.value})
    console.log(FormData);
  }
  const handleChange = () => {}
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  }
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };


  return (
    <>
      <Container component="main" maxwidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar} >
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">
            {isSignup ? "Sign Up" : "Login"}
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input name = "firstName" label="firstName" handleChange={handleChange} autoFocus half />
                  <Input name = "lastName" label="lastName" handleChange={handleChange}  half />
                  
                </>
              )}
              <Input name = "email" label="email Address" type="email" handleChange={handleChange} />
              <Input name = "password" label="password" type={showPassword ? "text" : "password"} handleChange={handleChange} handleShowPassword={handleShowPassword}/> 
              
              {isSignup && (
                <>
                  <Input  name = "confirmPassword" label="repeat Password" type="password" handleChange={handleChange} />
                </>
              )}
            </Grid>

            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              {isSignup ? "Sign Up" : "Login"}
            </Button>
            
            <Grid container justifyContent="flex-end">
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