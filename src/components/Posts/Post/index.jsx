//react 
import React,{useState} from 'react';

//redux
import { useDispatch } from 'react-redux';
import {useNavigate , useLocation} from 'react-router-dom'
import {deletePost,likePost} from '../../../redux/actions/post'

//css imports
import { Card, CardActions, CardContent,useMediaQuery,useTheme,
  CardMedia,Button,ButtonBase, Typography,Tooltip,Chip,
  Dialog,DialogActions,DialogContent,
  DialogContentText,DialogTitle } from '@mui/material';
  
import {ThumbUpAltOutlined} from '@mui/icons-material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';

import useStyles from './style';
import { GlobalConstants } from '../../../constants';

const Post = ({ post, setCurrentId }) => {

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const handleChipClick = (tag) => {
    history(`/tags/${tag}`);
  }

  const dispatch = useDispatch();
  const history = useNavigate();

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


  const openPost = () => {
    history(`/posts/${post._id}`);
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
          image={post.selectedFile || GlobalConstants.defaultImage } 
          title={post.title} height={240} width={160}
        />
        
        <div className={classes.overlay}>
          <Typography  variant="h6">
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
        
        {location.pathname.startsWith('/tags') ? (
          <></>
        ) : (
        <div className={classes.Chipdetails}>
          {post.tags.slice(0,3).map((tag,index) =>

            <Chip key={index} label={tag} onClick={(e) => handleChipClick(tag)} 
            spacing={1} style={{margin:'0.1rem'}} color="primary" variant="outlined" />
          )}
        </div>
        )}

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
        
        <Tooltip title= 'Hey! login to like this post' aria-label='Login' disableHoverListener={user ? true : false}>
          <span>
          <Button size="small" color="primary" disabled={!user?.result} 
            // onClick={()=> dispatch(likePost(post._id))}
            onClick={handleLike}
            >
              <Likes></Likes>
          </Button>
          </span>
        </Tooltip>

        {(user?.result?._id === post?.creator) && (
          <Button size="small" color="secondary" 
          onClick={handleClickOpen}
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
              {GlobalConstants.deleteAlertMessage}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" variant="default">
              {GlobalConstants.cancel}
            </Button>
            <Button onClick={handleDelete} color="secondary" autoFocus variant="contained">
              {GlobalConstants.delete}
            </Button>
          </DialogActions>
        </Dialog>

      </CardActions>
    </Card>
    </>
  );
};

export default Post;