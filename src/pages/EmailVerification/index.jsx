import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

//redux
import { useDispatch,useSelector } from 'react-redux';
import { emailVerificationRequest } from '../../redux/actions/auth';

//css
import {Paper,Typography,Button, Box, Container} from '@mui/material'
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useStyles from './styles'

import Notification from '../../components/Notification';
import { GlobalConstants } from '../../constants';

const EmailVerification = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useNavigate();

  const EMAIL_STATUS = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleSubmit = (e) => {
    const formData = {
      email : user?.result?.email
    }
    // console.log(formData);
    e.preventDefault();
    dispatch(emailVerificationRequest(formData,history));
    // console.log("email is sent");
  }
  const handleSkip = () => {
    history("/feed");
  }
  //snackbar
  const [snackType,setSnackType] = useState()
  const [showSnack,setShowSnack] = useState(false)
  
  
  // check status of email
  useEffect(() => {
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
            <Typography variant='h3' className={classes.title}>
              {GlobalConstants.emailVerification} 
            </Typography>

            <Typography variant='h2' component="div">
              {snackType==="SUCCESS" ? <CheckCircleIcon className={classes.bodyIcon} /> : <ErrorIcon className={classes.bodyIcon} color='secondary' />} 
            </Typography>
            
            <Typography variant='body2' className={classes.bodyData}>
              {snackType==="SUCCESS"? GlobalConstants.checkInbox : GlobalConstants.tryAgain}
            </Typography>

            <Button variant='outlined' color='success' onClick={handleSkip}> {GlobalConstants.exploreNow} </Button>
          </Paper>
        </>
      )
    }
  }
  return (
    <Container maxWidth="xl">
      <Paper className={classes.mainPaper}>
        <Typography variant='h3' className={classes.title}>
          {GlobalConstants.emailVerification} 
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Typography variant='body2' className={classes.bodyData}>
            {GlobalConstants.verifyBodyDesp}
          </Typography>
          <Button width="50%" variant="outlined" className={classes.submit} onClick={handleSkip}>
            {GlobalConstants.skipNow}
          </Button>
          <Button type="submit" width="50%" variant="contained" color="primary" className={classes.submit}>
            {GlobalConstants.confirm}
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default EmailVerification;

