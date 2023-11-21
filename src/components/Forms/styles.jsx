import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '1rem 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  fab : {
    position: 'fixed',
    top: '90%',
    left : '70%',
    height: '5rem',
    width : '5rem',
    alignItems: 'center',
    fontSize : '3rem',
    backgroundColor : '#09779A'
  }
}));