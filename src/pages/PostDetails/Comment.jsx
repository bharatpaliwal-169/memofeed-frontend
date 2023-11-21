import React,{useState,useRef} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {Typography,TextField,Button,Paper} from '@material-ui/core'
import useStyles from './styles'
import {commentPost} from '../../redux/actions/post'


const  CommentSection = ({post}) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();
  const dispatch = useDispatch();
  const commentsRef = useRef();

  const [comment,setComment] = useState('');
  const [comments,setComments] = useState(post?.comments);

  const handleComment = async () => {
    // console.log(post);
    const TheComment = comment;
    setComment('');
    const newComments = await dispatch(commentPost(`${user?.result?.name}: ${TheComment}`, post._id));
    setComments(newComments);
    
    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  
  return (
    <>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h4">Comments</Typography>
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong className={classes.commentName}>{c.split(': ')[0]} : </strong>
              {c.split(':')[1]}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
        {user ? (
          <div style={{ width: '100%' }}>
            <Typography gutterBottom variant="h5"  style={{ marginTop: '1.5rem' }}>
              Write a comment
            </Typography>
            <TextField 
              fullWidth 
              minRows={4} 
              variant="outlined" 
              label="Comment here" 
              multiline
              value={comment} 
              onChange={(e) => setComment(e.target.value)} 
            />
            
            <br />
            
            <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} 
                    color="primary" variant="contained" onClick={handleComment}
            >
              Comment
            </Button>
          </div>
        ) : (
          <Paper elevation={6} style={{padding: '1.5rem'}}>
            <Typography variant="h5" align="left" >
              Hi there!  
              <Typography component={Link} to="/auth" variant="h5" color="primary" 
                style={{marginLeft:'0.5rem',marginRight:'0.5rem'}}>
                check in
              </Typography> 
              and you can like,comment and make new posts.
            </Typography>
          </Paper>
        )}
      </div>
    </>
  )
}


export default CommentSection;