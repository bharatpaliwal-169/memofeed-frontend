import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper:{
    padding: theme.spacing(4),
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: '1rem',
    marginTop: '1rem'
  },
  media:{
    maxHeight:'15rem',
    objectFit: 'center',
    width: '100%',
  }
}));