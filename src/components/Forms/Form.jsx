import React,{useState,useEffect} from 'react';
import FileBase from 'react-file-base64'
import {Paper,Typography,TextField,Button} from '@material-ui/core'
import useStyles from './style'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {createPost,updatePost} from '../../redux/actions/post'

const Form = ({currentId,setCurrentId}) => {
  //css
  const classes = useStyles();
  //data
  const user = JSON.parse(localStorage.getItem('profile'));
  const [postData , setPostData] = useState({
    // creator: '', 
    title: '', message: '', tags : '' , selectedFile : ''
  });
  

  //redux
  const dispatch = useDispatch();
  const post = useSelector((state) => currentId ? state.posts.posts.find((p)=> p._id === currentId) : null);
  const history = useHistory();
  //function handlers
  const handleSubmit = async(e) => {
    e.preventDefault();
    const validData = checkFormData(postData);
    if(!validData) {
      alert("Hey! try keeping title bit small and your story somewhere around 20-25 words atleast.");
    }
    else if(currentId === 0 && validData) {
      //create Post
      dispatch(createPost({...postData,name: user?.result?.name},history));
    }
    else{
      //update post
      dispatch(updatePost(currentId,{...postData,name: user?.result?.name}));
    }
    
    Clear();
  }

  const Clear = () => {
    setCurrentId(null);
    setPostData({
    // creator: '',
    title: '', message: '', tags : '' , selectedFile : ''});
  }

  const checkFormData = (data) => {
    if(data.title.length <=30 && data.message.length >=50){
      return true;
    }
    return false;
  }


  //useEffects
  useEffect(() => {
    if(post) setPostData(post);
  }, [post])
  

  if(!user?.result?.name){
    return(
    <>
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h4" align="center" >
          Hey! Login/Signup and add up your story...
        </Typography>
      </Paper>
    </>
    );
  }

  return (
    <>
      <Paper className={classes.paper} elevation={6}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          {/* <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography> */}
          <Typography variant="h5">
            {currentId ? `Editing "${post.title}" ` : 'Add your memory'}
          </Typography>
          
          {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth 
            value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
           */}
          <TextField name="title" variant="outlined" label="Title (keep it short)" fullWidth required
          value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          
          <TextField name="message" variant="outlined" label="your story(atleast 2 lines)" fullWidth multiline required rows={4} 
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