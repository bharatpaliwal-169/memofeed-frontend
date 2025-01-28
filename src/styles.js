import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: '0.25rem',
    margin: '1.25rem 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // border : "2px solid blue",
    // padding : "2rem",
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
}));


// flex-start","center","flex-end","stretch","baseline"].