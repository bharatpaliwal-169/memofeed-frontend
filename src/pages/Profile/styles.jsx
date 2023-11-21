import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  profilePage: {
    marginTop: '2rem',
    marginBottom: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
  },
  // deskContainer: {
  //   display: 'flex',
  //   alignItems: 'row',
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  // },
  // phoneContainer: {
  //   display: 'flex',
  //   alignItems: 'center',
  // },
  profileHeading:{
    color: '#09779A',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  profileCard:{
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '0.75rem',
    padding: '2rem',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  cardHeading:{
    fontWeight: 'bold',
    color: '#09779C',
  },
  media: {
    height: 0,
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
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '1rem',
    textTransform: 'capitalize',
    color : '#09779A',
    fontWeight : '600',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  Chipdetails :{
    padding:'.5rem',
  }
}));