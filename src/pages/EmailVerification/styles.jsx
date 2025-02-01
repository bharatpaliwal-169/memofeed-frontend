import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  mainPaper :{
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    borderRadius:'1rem',
  },
  title:{
    textTransform : 'capitalize',
    fontWeight : 'bold',
    color : '#09779A',
    margin:'1rem'
    
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center"
  },
  submit: {
    margin: theme.spacing(4, 0, 2, 2),
  },
  bodyData:{
    padding: '0.5rem',
    fontWeight: '700',
    fontSize : '1.5rem'
  },
  bodyIcon:{
    padding : '1rem',
    fontSize: '10rem',
    color: "#09779A"
  }
}));