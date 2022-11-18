/* eslint-disable react-hooks/exhaustive-deps */
//react
import React,{useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom';

//redux
import {useDispatch,useSelector} from 'react-redux';
import {getPost,getPostsBySearch} from '../../redux/actions/post'

//css
import {Card,Paper,Typography,Divider,Grid, CardMedia} from '@material-ui/core'
import moment from 'moment';
import useStyles from './styles'
import Chip from '@material-ui/core/Chip';

//component
import Loading from '../../components/Loading/Page'
// import CommentSection from './Comment';
const CommentSection = React.lazy(()=> import('./Comment'));

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
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    }
  }, [post]);

  if (!post) return null;

  const handleChipClick = (tag) => {
    history.push(`/tags/${tag}`);
  }
  const openPost = (_id) => history.push(`/posts/${_id}`);
  const recommendedPosts = posts.filter(({ _id,likes }) => _id !== post._id && likes.length > 5);

  return (
    <>
    {isLoading ? <Loading /> : (
        <Paper style={{ padding: '1.5rem', borderRadius: '1rem',marginBottom:'1rem' }} elevation={6}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h4" component="h4" className={classes.postTitle}>
              {post.title}
            </Typography>
            
            <Typography gutterBottom variant="body1"style={{marginTop:'0.5rem'}} color="textSecondary" component="h6">
                {post.tags.map((tag,index) => 
                <>
                  <Chip key={index} label={tag} spacing={1} style={{margin:'0.25rem'}} onClick={(e) => handleChipClick(tag)} 
                        clickable variant="outlined" color="primary" />
                </>
                )}
            </Typography>
            <Typography variant="h6" component="h6" style={{marginLeft:'0.5rem'}}>Liked by : 
              <span style={{color:'#488BBF',fontWeight:'bold'}}> {post.likes.length} people </span>
            </Typography>
            
            
            <Divider style={{ margin: '20px 0' }} />
            <Typography gutterBottom variant="body1" component="p" className={classes.content} >
              {post.message}
            </Typography>
            <Divider style={{ margin: '20px 0' }} />
            
            <Typography variant="h6">
              Created by: <span style={{color:'#488BBF',fontWeight:'bold'}}>{post.name}</span>
            </Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            
          </div>

          <div className={classes.imageSection}>
            <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            <React.Suspense fallback={<div>Loading Comments..... </div>}>
              <CommentSection post={post}></CommentSection>
            </React.Suspense>
          </div>
        </div>
        

        
        {!!recommendedPosts.length && (
          <div style={{ marginTop:'4rem' }}>
            <Typography variant="h4" style={{fontWeight: 'bold', color : '#09779A'}}>
              You might also like:
            </Typography>
            <Divider style={{margin : '1rem'}} />
            <div className={classes.recommendedPosts}>
              <Grid container spacing={1} alignItems="stretch">
                {recommendedPosts.map(({ title, name, likes, message, _id}) => (
                  <Grid item xs={12} sm={12} md={3}>
                    <Card elevation={3} style={{margin:'1rem',borderRadius:'1rem'}} key={_id}>
                      <div style={{ margin: '1.5rem', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                        
                        <Typography gutterBottom variant="h5" style={{ color: '#09779A',textTransform: 'capitalize'}}>
                          <span style={{fontWeight:'bold'}}>{title.length > 10 ? title.substring(0, 10)+'....' : title}</span>
                        </Typography>
                        
                        <Typography gutterBottom variant="body1" style={{marginTop: '0.5rem', marginBottom:'0.5rem'}}>
                          <span>{message.length > 60 ? message.substring(0, 60)+'....' : message}</span>
                        </Typography>
                        
                        <Typography gutterBottom variant="subtitle2" >
                        <span style={{fontWeight:'bold'}}> Creator</span> : 
                        <span style={{ color: '#09779A',textTransform: 'capitalize'}}>
                          {name}
                        </span>
                        </Typography>
                        
                        <Typography gutterBottom variant="subtitle1">
                          Likes: {likes.length} </Typography>
                      </div>
                    </Card>
                  </Grid>
                  
                ))}
              </Grid>
            </div>
          </div>
        )}
      </Paper>
    )}
    </>
  )
}

export default PostDetails;