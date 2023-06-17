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
  content : {
    textAlign: 'justify',
    lineHeight: '1.25em',
    fontSize: '1.25rem',
    padding:'1.5rem',
    margin : '1rem',
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
    marginTop: '1rem',
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


  mainPaper :{
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    borderRadius:'0.5rem',
  },
  title:{
    textTransform : 'capitalize',
    fontWeight : 'bold',
    color : '#09779A',
    marginTop:'1.5rem'
  },
  cardIcon:{
    margin:'-0.5rem 0 0 0.5rem',
    height : '1.25rem',
    width:'1.25rem'
  }
}));