import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(2),
  },
  actionDiv: {
    textAlign: 'center',
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    marginBottom: '1rem',
  },
  section: {
    // margin: '1rem',
    flex: 1,
    width: '100%',
  },
  imageSection: {
    paddingLeft : '4rem',
    flex : 2,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      paddingLeft: 0,
    },
  },
}));