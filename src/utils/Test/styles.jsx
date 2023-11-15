import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  page: {
    background : 'transparent',
    marginTop: '2rem',
    paddingLeft: '1rem',
    textAlign:'center',
    display: 'flex-row'
  },
  addHeading:{
    fontWeight: 'bold',
    color: '#09779A'
  },
  addInput:{
    outline: 'none',
    border: 'none',
    fontSize: '2rem',
    padding:'.25rem',
    margin:'0.5rem',
  }

}));