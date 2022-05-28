import React,{useState,useEffect} from 'react';
import FileBase from 'react-file-base64'
import {Paper,Typography,TextField,Button} from '@material-ui/core'
import useStyles from './style'
import {useDispatch,useSelector} from 'react-redux'

import {createPost,updatePost} from '../../redux/actions/post'

const Form = ({currentId,setCurrentId}) => {
  //css
  const classes = useStyles();
  //data
  const [postData , setPostData] = useState({
    creator: '', title: '', message: '', tags : '' , selectedFile : ''
  });
  

  //redux
  const dispatch = useDispatch();
  const post = useSelector((state) => currentId ? state.posts.find((p)=> p._id === currentId) : null);

  //function handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId) {
      //update post
      dispatch(updatePost(currentId,postData));
      
    }
    else{
      //create Post
      dispatch(createPost(postData));
    }
    // console.log(postData);
    Clear();
  }

  const Clear = () => {
    setCurrentId(null);
    setPostData({creator: '', title: '', message: '', tags : '' , selectedFile : ''});
  }


  //useEffects
  useEffect(() => {
    if(post) setPostData(post);
  }, [post])
  
  return (
    <>
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          {/* <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography> */}
          <Typography variant="h5">
            {currentId ? `Editing "${post.title}" ` : 'Creating a Memory'}
          </Typography>
          
          <TextField name="creator" variant="outlined" label="Creator" fullWidth 
            value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
          
          <TextField name="title" variant="outlined" label="Title" fullWidth 
          value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          
          <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} 
            value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
          
          <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth 
            value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
          
          <div className={classes.fileInput}>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
          </div>
          
          <Button className={classes.buttonSubmit} 
            variant="contained" color="primary" size="large" 
            type="submit" fullWidth>
            {currentId ? `Update this Memory ` : 'Add to Feed'}
          </Button>
          <Button variant="contained" color="secondary" 
            size="small" onClick={Clear} fullWidth>
            Clear
          </Button>
        </form>
    </Paper>
    </>
  )
}
export default Form;