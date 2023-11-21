import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';

//redux
import { useDispatch,useSelector } from 'react-redux';
import { forgotPasswordRequest } from '../../redux/actions/auth';

//css
import {Paper,Typography,Button,TextField} from '@material-ui/core'
import useStyles from './styles'

import Notification from '../../components/Notification';

const ForgotPassword = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const EMAIL_STATUS = useSelector((state) => state.auth);
  
  const [formData,setformData] = useState({
    email:''
  });
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    dispatch(forgotPasswordRequest(formData,history));
  }

  //snackbar
  const [snackType,setSnackType] = useState()
  const [showSnack,setShowSnack] = useState(false)
  
  
  // check status of email
  useEffect(() => {
    console.info(EMAIL_STATUS);
    setSnackType(EMAIL_STATUS?.authData?.SNACK_TYPE)
    setShowSnack(true)
  }, [EMAIL_STATUS,snackType])
  
  if(showSnack){
    if(snackType){
      const snackMessage = snackType === "SUCCESS" ? "We have sent you an email, Please Check your inbox." : "Oh uoh! Something went wrong, Please try again later.";
      return (
        <>
          <Notification snackType={snackType} snackOpen={true} snackMessage={snackMessage}/>
          <Paper className={classes.mainPaper}>
            <Typography variant='body1' className={classes.bodyData}>
              {snackType==="SUCCESS"? "Check your inbox." : "Please try again."}
            </Typography>
          </Paper>
        </>
      )
    }
  }
  return (
    <>
      <Paper className={classes.mainPaper}>
        <Typography variant='h3' className={classes.title}>
          Forgot Password
        </Typography>

        <form onSubmit={handleSubmit} className={classes.form}>
          <Typography variant='body1' className={classes.bodyData}>
            No Worries, We will help you recover your account.
          </Typography>
          <Typography variant='body1' className={classes.bodyData}>
            Please enter your email id here.
          </Typography>

          <TextField name = "email" placeholder='enter your email address' variant="outlined" 
              onChange={handleChange} fullWidth required  style={{padding:'0.5rem'}}
          />

          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Confirm
          </Button>

        </form>
      </Paper>
    </>
  )
}

export default ForgotPassword;

