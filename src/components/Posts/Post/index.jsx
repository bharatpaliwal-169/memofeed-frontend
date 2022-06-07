//react - redux
import React from 'react';
import { useDispatch } from 'react-redux';
import {deletePost,likePost} from '../../../redux/actions/post'
//css imports
import useStyles from './style';
import { Card, CardActions, CardContent, CardMedia,Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
  //css
  const classes = useStyles();
  const handleChipClick = () => console.log("You clicked the chip");
  //redux
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    if (post?.likes?.length > 0) {
      return post.likes.find((like) => like === user?.result?._id)
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  return (
    <>      
    <Card className={classes.card}>
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
      
      <div className={classes.overlay2}>
        { user?.result?._id === post?.creator && (
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
            <EditIcon fontSize="small" />
          </Button>
        )}
      </div>
      
      <div className={classes.details}>
        <Stack direction="row" spacing={1}>
          {post.tags.map((tag) => 
          <>
            <Chip label={tag} onClick={handleChipClick} />
          </>
          )}
        </Stack>
      </div>

      <Typography className={classes.title} gutterBottom variant="h5" component="h3">
        {post.title}
      </Typography>
      
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => {dispatch(likePost(post._id))}} >
          <Likes></Likes>
        </Button>
        {(user?.result?._id === post?.creator) && (
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="medium" />
          </Button>
        )}
      </CardActions>
    </Card>
    </>
  );
};

export default Post;