import React,{ useState} from 'react'
import {Fab,Modal} from "@material-ui/core"
import {Add} from '@material-ui/icons'
import useStyles from './style'
import Form from '../Forms/Form';
export default function AddPost() {
  const [open,setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles()

  return (
    <>
      <Fab onClick={handleOpen} className={classes.addPost}>
        <Add />
      </Fab>

      <Modal
        open={open}
        onClose={handleClose}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Form className={classes.modalContainer}></Form>
      </Modal>
    </>
  )
}
