// /* eslint-disable react-hooks/exhaustive-deps */
// //react
// import React,{useEffect} from 'react'
// import {useParams,useHistory} from 'react-router-dom';

// //redux
// import {useDispatch,useSelector} from 'react-redux';
// import {getPost,getPostsBySearch} from '../../redux/actions/post'

// //css
// import {Card,Paper,Typography,Divider,Grid, CardMedia} from '@material-ui/core'
// import moment from 'moment';
// import useStyles from './styles'
// import Chip from '@material-ui/core/Chip';

// //component
// import Loading from '../../components/Loading'

// // import CommentSection from './Comment';
// const CommentSection = React.lazy(()=> import('../../pages/PostDetails/Comment'));


// const PostDetails = () => {

//   const { post,posts,isLoading } = useSelector((state)=> state.posts);
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const classes = useStyles();
//   const {id} = useParams();

//   useEffect(() => {
//     dispatch(getPost(id))
//   }, [id])

//   useEffect(() => {
//     if (post) {
//       dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
//     }
//   }, [post]);

//   if (!post) return null;

//   const handleChipClick = (tag) => {
//     history.push(`/tags/${tag}`);
//   }
//   const openPost = (_id) => history.push(`/posts/${_id}`);
//   const recommendedPosts = posts.filter(({ _id,likes }) => _id !== post._id && likes.length > 5);

//   return (
//     <>
//       {isLoading ? <Loading /> : (
//         <Paper className={classes.mainPage} elevation={4}>
//           <Typography variant="h3" className={classes.title}>
//             {post.title}
//           </Typography>
//         </Paper>
//       )}
//     </>
//   )
// }

// export default PostDetails