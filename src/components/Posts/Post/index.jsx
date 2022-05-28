//react - redux
import React from 'react';
import { useDispatch } from 'react-redux';
import {deletePost,likePost} from '../../../redux/actions/post'
//css imports
import useStyles from './style';
import { Card, CardActions, CardContent, CardMedia,Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
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
  
  return (
    <>      
    <Card className={classes.card}>
      <CardMedia className={classes.media} 
        image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
        title={post.title} 
      />
      
      <div className={classes.overlay}>
        <Typography variant="h6">
          Creator : {post.creator}
        </Typography>
        <Typography variant="caption"> {moment(post.createdAt).fromNow()} </Typography>
      </div>
      
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
          {/* <MoreHorizIcon fontSize="small" /> */}
          <EditIcon fontSize="small" />
        </Button>
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
        <Button size="small" color="primary" onClick={() => {dispatch(likePost(post._id))}} >
          <ThumbUpAltIcon fontSize="medium" /> &nbsp; {post.likeCount} 
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="medium" />
        </Button>
      </CardActions>
    </Card>
    </>
  );
};

export default Post;