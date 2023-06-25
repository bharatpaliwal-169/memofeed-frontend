import React,{useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

//redux
import {useDispatch,useSelector} from 'react-redux'
import { changePasswordRequest } from '../../redux/actions/auth';
//css
import { Grid,Typography, Card,CardContent,Button,Divider,Tooltip
,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle
} from '@material-ui/core'; 
import useStyle from './styles';

import Notification from '../../components/Notification';

const Details = ({stats}) => {
  
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyle();


  const history = useHistory();
  const dispatch = useDispatch();
  const EMAIL_STATUS = useSelector((state) => state.auth)

  // confirmation box
  const [open,setOpen] = useState(false);
  // send change password request
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangePassword = () => {
    const formData = {
      email : user?.result?.email
    }
    dispatch(changePasswordRequest(formData,history));
    handleClose();
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
        <Notification snackType={snackType} snackOpen={true} snackMessage={snackMessage}/>
      )
    }
  }
  
  //UI
  return (
    <>
      <Grid container alignItems="stretch" spacing={3} style={{display:'flex',alignItems:'center'}}>
        <Grid item xs={12} sm={12} md={6}>
          <Card className={classes.profileCard} elevation={5}>
            <CardContent>
              <Typography variant='h5'>
                <b>User Details</b>                 
              </Typography>
              <Divider style={{marginTop:'1rem',marginBottom:'1rem'}} />
              <Typography variant='h6'>
                <b>Name :</b> {user?.result?.name}
              </Typography>
              
              <br />
              <Typography variant='h6'>
                <b>Email :</b> {user?.result?.email}
              </Typography>
              <br />
              <Button variant='contained' onClick={handleClickOpen} color="primary" 
                className={classes.changePswd}>
                Change Password 
              </Button>
              
              {/* dialog or modal */}
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="confirmCP"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="confirmCP">
                  {"Change Password"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Kindly confirm your email address: 
                    <span style={{fontWeight:'600',paddingLeft:'0.25rem',color:"ActiveCaption"}}>
                      {user?.result?.email}
                    </span>
                  </DialogContentText>

                  <DialogContentText>
                  </DialogContentText>
                </DialogContent>
                
                <DialogActions>
                  <Button onClick={handleClose} >
                    cancel
                  </Button>
                  <Button onClick={handleChangePassword} color="primary" autoFocus variant="outlined">
                    Confirm
                  </Button>
                </DialogActions>
              </Dialog>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Card className={classes.profileCard} elevation={5}>
            <CardContent>
              <Typography variant='h5'>
                <b>Stats</b>                
              </Typography>
              <Divider style={{marginTop:'1rem',marginBottom:'1rem'}} />
              
              <Typography variant='h6'>
                <b>Total Posts :</b> {stats?.totalPosts}                
              </Typography>
              <br />
              <Tooltip title="Sum total of all likes recieved on all posts" aria-label='Like'>
                <Typography variant='h6'>
                  <b>Popularity :</b> {stats?.totalLikes}
                </Typography>
              </Tooltip>
              <br />
              <Typography variant='h6'>
                <b>Total Views :</b> {stats?.popularity}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Details;