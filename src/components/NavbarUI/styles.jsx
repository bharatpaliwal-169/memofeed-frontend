import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';

export default makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  appBar: {
    borderRadius: 5,
    margin: '',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    // border : "2px solid green"
  },
  heading: {
    cursor : 'pointer',
    color: '#09779A',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  toolbar: {
    // display: 'flex',
    // justifyContent: 'flex-end',
    // height: '',
    // width: '',
    // // marginLeft: '23rem',
    border : "2px solid green"
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    fontWeight : '700',
    textTransform : 'capitalize',
    color : '#0C64AC',
    textDecoration : 'none',
    "&:hover": {
      color: "#0C64EE",
    },
    marginRight:'0.5rem'
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },

  navLink:{
    textDecoration:"none",
    color: "blue",
    fontSize: "20px",
  },
  icon:{
      color: "#000",
      margin : "1rem",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: "#0461AE",
    textTransform: "uppercase",
    height: "3.5rem",
    width: "3.5rem",
  },
  List: {
    display : "flex",
    flexDirection : "column",
    alignItems: "center",
    justifyContent: "center",
    padding : "0.5rem",
  },
  logout:{
    marginTop:'0.25rem',
  },

  searchBox:{
    paddingLeft: '2rem',
  },

}));
