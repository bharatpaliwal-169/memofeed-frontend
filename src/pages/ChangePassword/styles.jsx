import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainPaper :{
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    borderRadius:'0.5rem',
  },
  title:{
    textTransform : 'capitalize',
    fontWeight : 'bold',
    color : '#09779A',
    marginTop:'1.5rem'
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(4, 0, 2),
  },
  bodyData:{
    padding: '1rem',
    fontWeight: '700'
  }
}));