import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
import { changePassword } from '../../redux/actions/auth';
//css
import {Paper,Typography,Button,TextField,InputAdornment, IconButton} from '@material-ui/core'
import {Visibility,VisibilityOff} from '@material-ui/icons';
import useStyles from './styles'


const ChangePassword = () => {

  const classes = useStyles();
  const tokenkey = new URLSearchParams(window.location.search);

  const dispatch = useDispatch();
  const history = useHistory();

  const [formData,setformData] = useState({
    password : '', confirmPassword : '',token: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.token = tokenkey.get('token');
    console.log(formData);
    if(formData.password.length < 6 || formData.password.length>20 || formData.confirmPassword.length<6 || formData.confirmPassword.length>20){
      alert("Invalid Password! Please enter valid password");
    }
    if(formData.password !== formData.confirmPassword){
      alert("password and confirm password dose not match");
    }
    dispatch(changePassword(formData,history));
  }

  return (
    <>
      <Paper className={classes.mainPaper}>
        <Typography variant='h3' className={classes.title}>
          Change Password
        </Typography>

        <form onSubmit={handleSubmit} className={classes.form}>
          <Typography variant='body1' className={classes.bodyData}>
            * New password must have length between 6-20 characters. Please make a strong password.
          </Typography>
          
          <TextField name = "password" placeholder='enter new password' variant="outlined" type={showPassword ? "text" : "password"} 
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

          <TextField name = "confirmPassword" placeholder='re-enter new password' variant="outlined" type={showPassword ? "text" : "password"} 
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

          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Confirm
          </Button>
        </form>
      </Paper>
    </>
  )
}

export default ChangePassword;