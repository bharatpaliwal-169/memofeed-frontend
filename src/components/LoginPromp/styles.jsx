import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper:{
    padding: theme.spacing(2),
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  media:{
    maxHeight:'20rem',
    objectFit: 'center',
    width: '100%',
  }
}));