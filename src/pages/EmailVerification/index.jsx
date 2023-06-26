import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';

//redux
import { useDispatch,useSelector } from 'react-redux';
import { emailVerificationRequest } from '../../redux/actions/auth';

//css
import {Paper,Typography,Button} from '@material-ui/core'
import useStyles from './styles'
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import Notification from '../../components/Notification';

const EmailVerification = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const EMAIL_STATUS = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleSubmit = (e) => {
    const formData = {
      email : user?.result?.email
    }
    console.log(formData);
    e.preventDefault();
    dispatch(emailVerificationRequest(formData,history));
    console.log("email is sent");
  }
  const handleSkip = () => {
    history.push("/posts");
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
            <Typography variant='h3' className={classes.title}>
              Email Verification 
            </Typography>

            <Typography variant='h1' component="div">
              {snackType==="SUCCESS" ? <CheckCircleIcon className={classes.bodyIcon} /> : <ErrorIcon className={classes.bodyIcon} color='secondary' />} 
            </Typography>
            
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
        <Typography variant='h2' className={classes.title}>
          Email Verification 
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Typography variant='body1' className={classes.bodyData}>
            Please click "Confirm" and check your inbox.
          </Typography>
          {/* <Typography variant='body1' className={classes.bodyData}>
            *You will be given a "verified" badge.
          </Typography> */}
          <Button width="50%" variant="default" className={classes.submit} onClick={handleSkip}>
            Skip for now
          </Button>
          <Button type="submit" width="50%" variant="outlined" color="primary" className={classes.submit}>
            Confirm
          </Button>
        </form>
      </Paper>
    </>
  )
}

export default EmailVerification;

