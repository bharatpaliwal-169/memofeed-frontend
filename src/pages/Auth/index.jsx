//react
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

//redux
import {useDispatch} from 'react-redux'
import {signup , login} from '../../redux/actions/auth'

//css
import {Container,Avatar,Paper,Grid,Typography,Button} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

//components
import useStyles from './style'
import Input from './input'
// const Input = React.lazy(()=> import('./input'));


const Auth = () =>{
  const initialState = {
    firstName: '',lastName: '',email: '',password: '',confirmPassword: ''
  };
  //state
  // const [success, setSuccess] = useState(false);
  const [isSignup,setIsSignup] = useState(false);
  const [formData,setformData] = useState(initialState);
  //support
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  //function
  const handleSubmit = (e) => {
    e.preventDefault();
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
                  <Input name = "firstName" label="firstName" handleChange={handleChange} autoFocus half required/>
                  <Input name = "lastName" label="lastName" handleChange={handleChange}  half required />
                </>
              )}
              <Input name = "email" label="email Address" type="email" handleChange={handleChange} required/>
              <Input name = "password" label="password" type="password" handleChange={handleChange} required/> 
              
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