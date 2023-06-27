// //react
// import React,{useState} from 'react';
// import { useHistory } from 'react-router-dom';
// //redux
// import { useDispatch } from 'react-redux';
// import { deleteAccount } from '../../../../redux/actions/auth';
// //css
// import {Paper, Typography,Grid,Button,
//   Dialog,DialogActions,DialogContent,DialogTitle,DialogContentText, Divider
// } from '@material-ui/core';
// import useStyle from './styles';

// //components
// import Details from './Details';
// import UserPosts from './UserPosts';

// //main
// const Profile = () => {
//   const user = JSON.parse(localStorage.getItem('profile'));
//   const id = user.result._id;
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const classes = useStyle();
//   const [open, setOpen] = useState(false);
  
//   // const stats = useSelector((state) => state.posts.stats);
//   // console.log(stats);
  
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleDelete = () => {
//     dispatch(deleteAccount(id,history));
//   }
  
  
//   const stats = JSON.parse(localStorage.getItem('stats'));


//   return (
//     <>
//       <Paper className={classes.profilePage} elevation={5}>
//         <Typography variant="h3" className={classes.profileHeading} style={{margin : '1.5rem'}}>
//           Profile
//         </Typography>

//         <Details stats={stats} />

//         <Typography variant="h3" className={classes.profileHeading} style={{margin : '1.5rem'}}>
//           Your Posts
//         </Typography>

//         <UserPosts posts={stats.myPosts} />

//         <Divider style={{margin:'1rem'}} />
//         <Typography variant='h4' color="secondary" style={{marginTop: '3rem'}}>
//           <b>Delete Account</b>
//         </Typography>
//         <Grid container spacing={4} style={{display:'flex',alignItems:'center',margin:'0.5rem'}}>
//           <Grid item xs={12} sm={12} md={6}>
//             <Typography variant='body1'>
//               <li>
//                 <b><i>All your data would be lost forever</i></b>
//               </li>
//             </Typography>
//           </Grid>
//           <Grid item xs={12}  sm={12} md={6}>
//             <Button color='secondary' variant='outlined' fullWidth onClick={handleClickOpen}>
//               Delete My Account
//             </Button>

//             <Dialog
//               open={open}
//               onClose={handleClose}
//               aria-labelledby="confirmDelete"
//               aria-describedby="alert-dialog-description"
//             >
//               <DialogTitle id="confirmDelete">{"Are you sure you want to delete your Account ?"}</DialogTitle>
//               <DialogContent>
//                 <DialogContentText id="alert-dialog-description">
//                   You cannot undo this action; Kindly be very sure about it.
//                 </DialogContentText>
//                 <DialogContentText>
//                   <b>We will miss you!!</b>
//                 </DialogContentText>
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={handleClose} color="primary" variant="text">
//                   cancel
//                 </Button>
//                 <Button onClick={handleDelete} color="secondary" autoFocus variant="contained">
//                   Delete
//                 </Button>
//               </DialogActions>
//             </Dialog>
//           </Grid>
//         </Grid>
//       </Paper>
//     </>
//   )
// }

// export default Profile;