//react 
import React,{useState} from 'react';

//redux
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import {deletePost,likePost} from '../../../redux/actions/post'

//css imports
import useStyles from './style';
import { Card, CardActions, CardContent,useMediaQuery,useTheme,
  CardMedia,Button,ButtonBase, Typography,Tooltip,
  Dialog,DialogActions,DialogContent,
  DialogContentText,DialogTitle } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Chip from '@material-ui/core/Chip';
import moment from 'moment';


const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  var count = 0;
  const handleChipClick = () => count++;
  
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('profile'));
  const userId = user?.result?._id;
  const [likes, setLikes] = useState(post?.likes);

  // const hasLikedPost = post.likes.find((like) => like === userId); //bug
  const hasLikedPost = likes.find((like) => like === userId); //solution to bug
  const handleLike = async () => {
    dispatch(likePost(post._id));
    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length >= 0) {
      return likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  // const Likes = () => {
  //   if (post?.likes?.length > 0) {
  //     return post.likes.find((like) => like === userId)
  //       ? (
  //         <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
  //       ) : (
  //         <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
  //       );
  //   }

  //   return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  // };

  const openPost = () => {
    history.push(`/posts/${post._id}`);
  }

  //confirm dialog box
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    dispatch(deletePost(post._id));
    setOpen(false);
  }

  return (
    <>
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase className={classes.cardAction} onClick={openPost}>
        <CardMedia className={classes.media} 
          image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
          title={post.title} 
        />
        
        <div className={classes.overlay}>
          <Typography variant="h6">
            {post.name}
          </Typography>
          <Typography variant="caption"> {moment(post.createdAt).fromNow()} </Typography>
        </div>
      </ButtonBase>
        <div className={classes.overlay2}>
          { user?.result?._id === post?.creator && (
            <Button style={{ color: 'white' }} size="small" onClick={() =>{
              setCurrentId(post._id);
            }}>
              {isMobile ? (
                <Tooltip title="Open Add post button" aria-label="add">
                  <EditIcon fontSize="small" />
                </Tooltip>
              ) : 
              <EditIcon fontSize="small" />
              }
            </Button>
          )}
        </div>
      
        <div className={classes.Chipdetails}>
            {post.tags.slice(0,3).map((tag,index) => 
              <Chip key={index} label={tag} onClick={handleChipClick} spacing={1} style={{margin:'0.1rem'}} color="primary" variant="outlined" />
            )}
        </div>

      <ButtonBase className={classes.cardAction} onClick={openPost}>
        <Typography className={classes.title} gutterBottom variant="h5" component="h5">
          {post.title.length > 20 ? post.title.substring(0, 15)+"..." : post.title}
        </Typography>
        
        <CardContent className={classes.contentBody}>
          <Typography variant="body1" color="textSecondary" component="p">
            {post.message.length > 65 ? post.message.substring(0,65)+" ....." : post.message}
          </Typography>
        </CardContent>
      </ButtonBase>      
    
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} 
        // onClick={()=> dispatch(likePost(post._id))}
        onClick={handleLike}
        >
          <Likes></Likes>
        </Button>
        {(user?.result?._id === post?.creator) && (
          <Button size="small" color="secondary" 
          onClick={handleClickOpen}
            // onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="medium" />
          </Button>
        )}

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="confirmDelete"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="confirmDelete">{"Are you sure you want to delete post?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You cannot undo this action; Kindly be very sure about it.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" variant="default">
              cancel
            </Button>
            <Button onClick={handleDelete} color="secondary" autoFocus variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>

      </CardActions>
    </Card>
    </>
  );
};

export default Post;