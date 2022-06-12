/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react'
import {Paper,Typography,CircularProgress,Divider} from '@material-ui/core'
import {useDispatch,useSelector} from 'react-redux';
import {useParams,useHistory} from 'react-router-dom';
import {getPost,getPostsBySearch} from '../../redux/actions/post'
import moment from 'moment';
import useStyles from './styles'
import Chip from '@material-ui/core/Chip';

import CommentSection from './CommentSection';

const PostDetails = () => {
  const { post,posts,isLoading } = useSelector((state)=> state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const {id} = useParams();


  useEffect(() => {
    dispatch(getPost(id))
    
  }, [id])
  useEffect(() => {
    if (post) {
      //we are looking for tags so as to get some other posts with same tags.
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    }
  }, [post]);

  if (!post) return null;

  const openPost = (_id) => history.push(`/posts/${_id}`);
  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }
  return (
    <>
    <Paper style={{ padding: '1.5rem', borderRadius: '1rem',marginBottom:'1rem' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h3">{post.title}</Typography>
          <Typography gutterBottom variant="body1"style={{marginTop:'0.5rem'}} color="textSecondary" component="h6">
            
              {post.tags.map((tag) => 
              <>
                <Chip key={tag} label={tag} spacing={1} style={{margin:'0.25rem'}} 
                      clickable variant="outlined" color="primary" />
              </>
              )}
            
          </Typography>
          
          
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          {/* <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography> */}
          <Divider style={{ margin: '20px 0' }} />
          <CommentSection post={post}></CommentSection>
        </div>

        <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1">Created by: {post.name}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
      
      </div>
      {!!recommendedPosts.length && (
        <div className={classes.section} style={{ marginTop:'2.5rem' }}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(({ title, name, likes, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{title}</Typography>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                {/* <Typography gutterBottom variant="subtitle2">{message}</Typography> */}
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <img src={selectedFile} alt={title} width="5rem" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
    </>
  )
}

export default PostDetails;