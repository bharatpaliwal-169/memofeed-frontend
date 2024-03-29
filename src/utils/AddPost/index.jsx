import React,{ Suspense , useState} from 'react'
import {Fab,Modal} from "@material-ui/core"
import {Add} from '@material-ui/icons'
import useStyles from './styles'
import Loading from '../FlashUI'
// import Form from '../../components/Forms';
const Form = React.lazy(() => import('../../components/Forms'));

export default function AddPost() {
  const [open,setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles()

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Fab onClick={handleOpen} className={classes.addPost}>
          <Add />
        </Fab>

        <Modal
          open={open}
          onClose={handleClose}
          
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Form className={classes.modalContainer} />
        </Modal>
      </Suspense>
    </>
  )
}
