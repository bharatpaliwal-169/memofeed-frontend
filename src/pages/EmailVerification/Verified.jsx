import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';

// redux
import { useDispatch,useSelector } from 'react-redux';
import { emailverification } from '../../redux/actions/auth';

// css
import {Paper,Typography,Button} from '@material-ui/core'
import useStyles from './styles'

import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

// import Notification from '../../components/Notification';

const Verified = () => {
  const [snackType,setSnackType] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const VERIFICATION_STATUS = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem('profile'));
  const tokenkey = new URLSearchParams(window.location.search);
  const token = tokenkey.get('token')
  
  const handleVerification = () => {
    dispatch(emailverification(token));
  }
  
  const handleExplore = () =>{
    history.push("/")
  }
  
  const setNewData = () => {
    user.verified = true;
    const newUser = {...user,verified:true}
    localStorage.setItem('profile',JSON.stringify(newUser));
  }
  
  useEffect(() =>{
    handleVerification();
  },[])
  // check status of email
  useEffect(() => {
    console.info(VERIFICATION_STATUS);
    setSnackType(VERIFICATION_STATUS?.authData?.SNACK_TYPE)
  }, [VERIFICATION_STATUS,snackType])

  useEffect(() => {
    setNewData();
  }, [snackType])
  
  return (
    <>
      <Paper className={classes.mainPaper}>
        <Typography variant='h4' className={classes.title}>
          Email Verification
        </Typography>
        
        <Typography variant='h1' component="div">
          {snackType==="SUCCESS" ? <CheckCircleIcon className={classes.bodyIcon} /> : <ErrorIcon className={classes.bodyIcon} color='secondary' />} 
        </Typography>
        
        <Typography variant='h6' className={classes.bodyData}>
          {snackType==="SUCCESS" ? "Your email is now verified successfully.": "Please try again."}
        </Typography>
      
        <Button fullWidth variant="outlined" color="primary" className={classes.submit} onClick={handleExplore}  >
          Explore Memofeed
        </Button>
      </Paper>      
    </>
  )
}

export default Verified;
