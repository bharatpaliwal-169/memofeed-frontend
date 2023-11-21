// react
import React,{useState,useRef} from 'react'
// import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {commentPost} from '../../redux/actions/post'


//css
import {Typography,TextField,Button} from '@material-ui/core'
import useStyles from './styles'

//components
const Promp = React.lazy(()=> import('../../components/LoginPromp'))

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
          <React.Suspense>
              <Promp msg=", You can make comment on this post."/>
          </React.Suspense>
        )}
      </div>
    </>
  )
}


export default CommentSection;