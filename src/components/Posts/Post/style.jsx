import { makeStyles } from '@mui/styles';

export default makeStyles({
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '0.25rem',
    height: '100%',
  },
  
  media: {
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },

  border: {
    border: 'solid',
  },
  
  fullHeightCard: {
    height: '100%',
  },
  
  overlay: {
    position: 'absolute',
    top: '1.25rem',
    left: '1.25rem',
    color: 'white',
  },

  overlay2: {
    position: 'absolute',
    top: '1.25rem',
    right: '1.25rem',
    color: 'white',
  },
  
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  
  title: {
    padding: '0 1rem',
    textTransform: 'capitalize',
    color : '#09779A',
    fontWeight : '700',
  },
  
  cardActions: {
    padding: '0 1rem 0.5rem 1rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  
  Chipdetails :{
    padding:'0.75rem',
  },
});