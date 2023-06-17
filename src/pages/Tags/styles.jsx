import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  mainPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    borderRadius: '1rem',
  },
  heading: {
    color: '#09779A',
    textDecoration: 'none',
    fontWeight: 'bold',
    textTransform : 'capitalize'
  },
}));