import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    // outline : '1px solid pink',
  },
  smMargin: {
    margin: theme.spacing(2),
  },
  actionDiv: {
    textAlign: 'center',
  },
  mainPaper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '1rem',
  },
}));