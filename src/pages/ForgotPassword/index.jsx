import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

//redux
import { useDispatch,useSelector } from 'react-redux';
import { forgotPasswordRequest } from '../../redux/actions/auth';

//css
import {Container,Paper,Typography,Button,TextField, Box} from '@mui/material'
import useStyles from './styles'

import Notification from '../../components/Notification';
import { GlobalConstants } from '../../constants';

const ForgotPassword = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useNavigate();

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
      const snackMessage = snackType === "SUCCESS" ? GlobalConstants.mailSentSuccessMessage : GlobalConstants.mailSentFailureMessage;
      return (
        <>
          <Notification snackType={snackType} snackOpen={true} snackMessage={snackMessage}/>
          <Paper className={classes.mainPaper}>
            <Typography variant='body1' className={classes.bodyData}>
              {snackType==="SUCCESS"? GlobalConstants.checkInbox : GlobalConstants.tryAgain}
            </Typography>
          </Paper>
        </>
      )
    }
  }

  return (
    <Container maxWidth='xl'>
      <Paper className={classes.mainPaper}>
        <Typography variant='h3' className={classes.title}>
          {GlobalConstants.forgotPassword}
        </Typography>

        <form onSubmit={handleSubmit} className={classes.form}>
          <Typography variant='body1' className={classes.bodyData}>
            {GlobalConstants.forgotPasswordDesp}
          </Typography>

          <Box sx={{padding: '1rem'}}>
            <TextField name = "email" label="Email Address" placeholder='enter your email address' variant="outlined" 
                onChange={handleChange} fullWidth required 
            />

            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              {GlobalConstants.confirm}
            </Button>
          </Box>

        </form>
      </Paper>
    </Container>
  )
}

export default ForgotPassword;

