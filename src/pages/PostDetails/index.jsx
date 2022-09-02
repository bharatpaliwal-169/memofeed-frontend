/* eslint-disable react-hooks/exhaustive-deps */
//react
import React,{useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom';

//redux
import {useDispatch,useSelector} from 'react-redux';
import {getPost,getPostsBySearch} from '../../redux/actions/post'

//css
import {Card,Paper,Typography,Divider} from '@material-ui/core'
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
            <Typography gutterBottom variant="body1"style={{marginTop:'0.5rem'}} 
                        color="textSecondary" component="h6">
              
                {post.tags.map((tag,index) => 
                <>
                  <Chip key={index} label={tag} spacing={1} style={{margin:'0.25rem'}} 
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
            <Typography gutterBottom variant="h5">You might also like:</Typography>
            <Divider />
            <div className={classes.recommendedPosts}>
              {recommendedPosts.map(({ title, name, likes, selectedFile, _id,index }) => (
                <>
                  <Card elevation={3} style={{margin:'1rem',borderRadius:'1rem'}} key={index}>
                    <div style={{ margin: '1.5rem', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                      
                      <Typography gutterBottom variant="h6" style={{ color: '#09779A',textTransform: 'capitalize'}}>
                        <span style={{fontWeight:'bold'}}>{title.length > 20 ? title.substring(0, 20)+'....' : title}</span>
                      </Typography>
                      
                      <img src={selectedFile ? 
                        selectedFile : "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}
                          alt={title} width="200rem" />
                      
                      <Typography gutterBottom variant="subtitle2" >
                        Creator : <span style={{fontWeight:'bold'}}>{name}</span>
                      </Typography>
                      
                      <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                      
                    </div>
                  </Card>
                </>
                
              ))}
            </div>
          </div>
        )}
      </Paper>
    )}
    </>
  )
}

export default PostDetails;