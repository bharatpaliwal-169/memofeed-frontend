import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  mainPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    borderRadius: '0.5rem',
    marginTop : '2rem'
  },
  heading: {
    color: '#09779A',
    textDecoration: 'none',
    fontWeight: 'bold',
    textTransform : 'capitalize',
    letterSpacing: '2px'
  },
}));