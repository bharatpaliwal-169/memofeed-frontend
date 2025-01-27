/* eslint-disable react-hooks/exhaustive-deps */
//react
import React,{useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom';

//redux
import {useDispatch,useSelector} from 'react-redux';
import {getPost,getPostsBySearch} from '../../redux/actions/post'

//css
import {Card,Paper,Typography,Divider,Grid2, CardContent,Tooltip} from '@mui/material'
import moment from 'moment';
import Chip from '@mui/material/Chip';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import PeopleIcon from '@mui/icons-material/People';
import CreateIcon from '@mui/icons-material/Create';
import useStyles from './styles'


//component
import Loading from '../../components/Loading/Page'
import { GlobalConstants } from '../../constants';
const CommentSection = React.lazy(()=> import('./Comment'));

const PostDetails = () => {
  // get data from redux state.
  const { post,posts,isLoading } = useSelector((state)=> state.posts);
  const dispatch = useDispatch();
  const history = useNavigate();
  const classes = useStyles();
  // to use value from url params eg : http/ ... / {..} <- these are params
  const {id} = useParams();


  //to get individual post
  useEffect(() => {
    dispatch(getPost(id))
  }, [id])

  //search functionality
  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    }
  }, [post]);


  if (!post) return null;

  // tags page
  const handleChipClick = (tag) => {
    history(`/tags/${tag}`);
  }
  
  // details page
  const openPost = (_id) => history(`/posts/${_id}`);
  
  // recommedations
  const recommendedPosts = posts.filter(({ _id,likes }) => _id !== post._id && likes.length > 5);

  //UI
  return (
    <>
      {isLoading ? <Loading /> : (
        <Paper className={classes.mainPaper} elevation={4}>
          
          <Typography variant="h3" className={classes.title}>
            {post.title}
          </Typography>

          <Divider style={{margin : '0.5rem'}} />

          <Typography gutterBottom variant="body1"style={{marginTop:'0.5rem'}} color="textSecondary" component="h6">
              {post.tags.map((tag,index) => 
              <>
                <Chip key={index} label={tag} spacing={1} style={{margin:'0.25rem'}} onClick={(e) => handleChipClick(tag)} 
                      clickable variant="outlined" color="primary" />
              </>
              )}
          </Typography>

          <Grid2 container spacing={3} alignItems="flex-end" style={{marginTop:'2rem',marginBottom:'2rem'}}>
            <Grid2 item md={2}></Grid2>
            
            <Grid2 item xs={12} md={3}>
              <Card elevation={0} style={{alignItems:'center'}}>
                <CardContent>
                  <Tooltip title="Author">
                    <Typography variant='h5'>
                        <CreateIcon size='md' className={classes.cardIcon} /> 
                        <span style={{paddingLeft:'0.25rem'}}>
                          <i>
                            {post.name}
                          </i>
                        </span> 
                    </Typography>
                  </Tooltip>
                </CardContent>
              </Card>
            </Grid2>
            
            <Divider orientation="vertical" flexItem />
            
            <Grid2 item xs={12} md={3}>
              <Card elevation={0} style={{alignItems:'center'}}>
                <CardContent>
                  <Tooltip title='Likes'>
                    <Typography variant='h5'>
                      <ThumbUpAltIcon size='md'className={classes.cardIcon} /> 
                        <span style={{paddingLeft:'0.25rem'}}>
                            {post.likes.length}
                        </span>
                    </Typography>
                  </Tooltip>
                </CardContent>
              </Card>
            </Grid2>

            <Divider orientation="vertical" flexItem />
            
            <Grid2 item xs={12} md={3}>
              <Card elevation={0} style={{alignItems:'center'}}>
                <CardContent>
                  <Tooltip title='views'>
                    <Typography variant='h5'>
                      <PeopleIcon size='md'className={classes.cardIcon} /> 
                        <span style={{paddingLeft:'0.25rem'}}>
                          {post.viewCount}
                        </span>
                    </Typography>
                  </Tooltip>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        
          <Grid2 container spacing={3} alignItems="stretch">
            <Grid2 item md={3}></Grid2>
            <Grid2 item xs={12} sm={12} md={6}>
              <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            </Grid2>
            <Grid2 item md={3}></Grid2>
          </Grid2>

          <Typography variant="body2">
            {GlobalConstants.creator} <span style={{color:'#488BBF',fontWeight:'bold'}}> {post.name} </span>
          </Typography>
          <Typography variant="subtitle1">{moment(post.createdAt).fromNow()}</Typography>
          
          <Typography gutterBottom variant="body1" component="p" className={classes.content} >
            {post.message}
          </Typography>

          <Divider />

          <Grid2 container spacing={4}>
            <Grid2 item md={1}></Grid2>
            <Grid2 item xs={12} md={7}>
              <React.Suspense fallback={<Loading />}>
                <CommentSection post={post}></CommentSection>
              </React.Suspense>
            </Grid2>
          </Grid2>

          {!!recommendedPosts.length && (
            <>
              <Typography variant="h4" style={{fontWeight: 'bold', color : '#09779A',marginTop:'2.5rem'}}>
                You might also like:
              </Typography>
              <Divider style={{margin : '1rem'}} />
                <Grid2 container spacing={3} alignItems="stretch">
                  {recommendedPosts.map(({ title, name, likes, message, _id}) => (
                    <Grid2 item xs={12} sm={12} md={3} key={_id}>
                      <Card elevation={3} style={{margin:'1rem',borderRadius:'1rem',cursor: 'pointer',padding:'1rem' }} 
                      key={_id} onClick={() => openPost(_id)}>
                          
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
                            Likes: {likes.length} 
                          </Typography>
                      </Card>
                    </Grid2>
                    
                  ))}
                </Grid2>
            </>
          )}


          <Typography variant="body2">
            {GlobalConstants.creator} <span style={{color:'#488BBF',fontWeight:'bold'}}> {post.name} </span>
          </Typography>
          <Typography variant="subtitle1">{moment(post.createdAt).fromNow()}</Typography>
        </Paper>
      )}
    </>
  )
}

export default PostDetails;