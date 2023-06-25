import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Notification = ({snackType,snackMessage,snackOpen}) => {
  const [open,setOpen] = React.useState(snackOpen)
  const Alert = (props) =>{
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClose = () =>{
    setOpen(false);
  }
  return (
    <>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}
        anchorOrigin={{ vertical:'top', horizontal:'center'}}
        >
        <Alert onClose={handleClose} severity={snackType.toString().toLowerCase()}>
          {snackMessage}
        </Alert>
      </Snackbar>
    </>
  )
}

export default Notification;

// "We have sent you an email, Please Check your inbox." : "Oh uoh! Something went wrong, Please try again later."