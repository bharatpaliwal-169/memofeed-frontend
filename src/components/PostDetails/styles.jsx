import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '1.5rem',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '40rem',
    
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
    margin: '1rem',
    flex: 1,
    width: '100%',
  },
  imageSection: {
    flex : 2,
    // marginLeft: '10rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    // border: '1px solid black',
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
    // border: '1px solid red',
  },
  commentsInnerContainer: {
    height: '10rem',
    overflowY: 'auto',
    // marginRight: '2rem',
    // border: '1px solid black',
  },
}));