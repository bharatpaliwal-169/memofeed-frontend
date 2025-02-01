import React,{useState} from 'react'

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Notification = ({snackType,snackMessage,snackOpen}) => {
  const [open,setOpen] = useState(snackOpen)

  const handleClose = () =>{
    setOpen(false);

  }
  return (
    <>
      <Snackbar open={open? open:false} autoHideDuration={3000} onClose={handleClose}
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