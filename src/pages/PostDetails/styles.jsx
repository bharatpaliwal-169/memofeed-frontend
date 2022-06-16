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
    // margin: '1rem',
    flex: 1,
    width: '100%',
  },
  imageSection: {
    flex : 2,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      paddingLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    marginTop: '2rem',
    color:'#488BBF',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    // border: '1px solid black'
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    borderRadius: '1rem',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '10rem',
    overflowY: 'auto',
  },
  postTitle: {
    textTransform : 'capitalize',
    fontWeight : '600',
    color : '#09779A',
  },
  commentName: {
    color : '#488BBF',
  },
}));