import React,{useState} from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Notification = ({snackType,snackMessage,snackOpen}) => {
  const [open,setOpen] = useState(snackOpen)
  // const Alert = (props) =>{
  //   return <Alert elevation={6} variant="filled" {...props} />;
  // }
  const handleClose = () =>{
    setOpen(false);
  }
  return (
    <>
      <Snackbar open={open? open:false} autoHideDuration={5000} onClose={handleClose}
        anchorOrigin={{ vertical:'top', horizontal:'center'}}
        >
        <Alert onClose={handleClose} severity={snackType?.toString()?.toLowerCase()}>
          {snackMessage}
        </Alert>
      </Snackbar>
    </>
  )
}

export default Notification;

// "We have sent you an email, Please Check your inbox." : "Oh uoh! Something went wrong, Please try again later."