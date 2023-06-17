import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  appBar: {
    borderRadius: 10,
    margin: '1.75rem 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
  },
  heading: {
    cursor : 'pointer',
    color: '#09779A',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    marginLeft: '23rem',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    fontWeight : 'bold',
    textTransform : 'capitalize',
    color : '#0C64AC',
    textDecoration : 'none',
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
      color: "#000"
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: "#0461AE",
    textTransform: "uppercase",
  },
  List: {
    alignItems: "center",
    justifyContent: "center",
  },
}));