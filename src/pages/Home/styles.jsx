import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 2,
    marginBottom: '1rem',
    display: 'flex',
    padding: '1rem',
  },
  pagination: {
    background : 'transparent',
    marginTop: '2rem',
    paddingLeft: '1rem',
  },
  gridContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
}));