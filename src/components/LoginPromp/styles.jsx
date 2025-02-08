import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper:{
    padding: '1rem',
    // textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: '0.5rem',
    marginTop: '1rem'
  },
  media:{
    maxHeight:'15rem',
    objectFit: 'center',
    width: '100%',
  }
}));