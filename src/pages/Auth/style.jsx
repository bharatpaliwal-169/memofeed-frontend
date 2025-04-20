import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    padding: theme.spacing(1),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: "0.5rem",
  },
  media:{
    width:'100%',
    maxHeight:"15rem",
    objectPosition:'center',
    objectFit:"contain"
  },
  bgCover:{
    width:'100%',
    maxHeight:"100%",
    objectPosition:'center',
    objectFit:"contain"
  },
  googleButton:{
    // background: "#4285F4",
    color: '#4285F4',
    padding: "0.5rem 3rem",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    // border: "1px solid #666",
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center'
  },
  

}));