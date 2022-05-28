import React,{useState} from 'react'
import {Container,Avatar,Paper,Grid,Typography,Button} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './style'
import Input from './input'

function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup,setIsSignup] = useState(false);
  const classes = useStyles();
  const handleSubmit = () => {}
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
            <Grid container justify="flex-end">
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

export default Auth