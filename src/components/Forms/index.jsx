//react
import React,{useState,useEffect} from 'react';
// import FileBase from 'react-file-base64'
import {useHistory,
  // Link
} from 'react-router-dom'
import axios from 'axios';
//redux
import {useDispatch,useSelector} from 'react-redux'
import {createPost,updatePost} from '../../redux/actions/post'

//css
import {Paper,Typography,TextField,Button,useMediaQuery,useTheme,
  Fab, Dialog,DialogContent,Divider,DialogTitle,CircularProgress
} from '@material-ui/core'
import {Add} from '@material-ui/icons'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import useStyles from './styles'
import Promp from '../LoginPromp';

const Form = ({currentId,setCurrentId}) => {
  //css
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  //data
  const user = JSON.parse(localStorage.getItem('profile'));
  const initialPostState = {
    // creator: '', 
    title: '', message: '', tags : '' , selectedFile : ''
  }
  const [postData , setPostData] = useState(initialPostState);

  //redux
  const dispatch = useDispatch();
  const post = useSelector((state) => currentId ? state.posts.posts.find((p)=> p._id === currentId) : null);
  const history = useHistory();
  
  //function handlers
  const handleSubmit = async(e) => {
    e.preventDefault();
    const validData = checkFormData(postData);
    if(!validData) {
      alert("Hey! try keeping title bit small and add your story (20-25 words atleast) and a tag.");
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
    setPostData(initialPostState);
  }

  const checkFormData = (data) => {

    // form data validations
    if(data.title.length <=30 && data.message.length >=50 && 
      data.tags.length !== 0 && data.tags.length <= 10 && data.message.length <= 5000){
      return true;
    }
    return false;
  }

  
  const [open,setOpen] = useState(false);
  const handleOpen = () =>{
    setOpen(true);
  }
  const handleClose = () =>{
    Clear();
    setOpen(false);
  } 

  const [img,setImg] = useState();
  const [uploading,setUploading] = useState(false);
  
  const handleUpload = () => {
    setUploading(true);
    const { files } = document.querySelector('input[ type="file" ]')
    // console.log('Image file', files[0]);
    
    const data = new FormData();
    data.append("file",files[0]);
    data.append("upload_preset",'memofeed');
    data.append("cloud_name","dudopiduu")
    uploadImgToCloud(data);
  }
  
  const uploadImgToCloud = async (data) => {
    try {
      const result = await axios.post('https://api.Cloudinary.com/v1_1/dudopiduu/image/upload',data);
      console.log("response from cloud :" + result.data.secure_url.toString());
      const res = result.data.secure_url.toString();
      setImg(res);
      // BUG _ ERROR
      // Note : here is when we will realise the imp of useEffect. In react imidate change in state does not happens.
      // it only happens in render cycles. here once data is fetched imidate change is not reflected instead aftersome time.
      // console.log(img);
    } catch (error) {
      console.log("Error in uploading img : " + error.toString());
      setUploading(false);
      alert("Please select an image to upload.");
    }
  }

  //useEffects
  useEffect(() => {
    console.log("Form.js: setPostData is called.")
    if(post) setPostData(post);
  }, [post])
  
  // to upload image
  useEffect(() => {
    console.log("Form.js : uploadingImg is called.")
    if(img) setPostData({...postData,selectedFile:img});
    setUploading(false);
    // console.log(img);
    // imp to add img as dep and not postData as it will lead to inf render of useeffect.
  },[img]);
  

  if(!user?.result?.name){
    return(
    <>
      {/* <Paper className={classes.paper} elevation={6}>
        <Typography variant="h5" align="left" >
          Hi there!  
          <Typography component={Link} to="/auth" variant="h5" color="primary" 
            style={{marginLeft:'0.5rem',marginRight:'0.5rem'}}>
            check in
          </Typography> 
          and you can like,comment and make new posts.
        </Typography>
      </Paper> */}
      <Promp />
    </>
    );
  }
  

  return (
    <React.Fragment>
      {isMobile ? (
        <React.Fragment>
          <Fab onClick={handleOpen} className={classes.fab} size="large" color="primary">
            <Add />
          </Fab>

          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            
            <DialogTitle id="form-dialog-title" style={{color : "#09779A",fontWeight : "bold",textAlign : "center"}}>
                {currentId ? `Editing "${post.title}" ` : 'Add your memory'}
            </DialogTitle>
            <Divider />
            <DialogContent className={`${classes.root} ${classes.form}`}>
              <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
              
                <TextField name="title" variant="outlined" label="Title (keep it short)" fullWidth required
                value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                
                <TextField name="message" variant="outlined" label="your story(atleast 2 lines)" fullWidth multiline required minminRows={4} 
                  value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth style={{textTransform : 'lowercase'}}
                  value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                
                {/* <div className={classes.fileInput}>
                  <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div> */}
                
                <div className={classes.fileInput}>
                  <input type="file" name="file" id="fileUpload1" accept="image/*" style={{marginBottom:'0.25rem'}} />
                  <label htmlFor="fileUpload1">
                    <Button variant="outlined" color="primary"  fullWidth onClick={handleUpload} startIcon={<CloudUploadIcon />}>
                      {uploading ? <CircularProgress size={20} style={{color:'#002884'}} /> : "Upload Image"}
                    </Button>
                  </label>
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
            </DialogContent>
          </Dialog>

        </React.Fragment>
      ) : (
        <>
          <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
              
              <Typography variant="h4" component="h4" style={{color : "#09779A",fontWeight : "600" }}>
                {currentId ? `Editing "${post.title}" ` : 'Add your memory'}
              </Typography>
              
              <TextField name="title" variant="outlined" label="Title (keep it short)" fullWidth required
              value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
              
              <TextField name="message" variant="outlined" label="your story(atleast 2 lines)" fullWidth multiline required minRows={4} 
                value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
              
              <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth 
                value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
              
              {/* <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
              </div> */}

              <div className={classes.fileInput}>
                <input type="file" name="file" id="fileUpload2" accept="image/*" style={{marginBottom:'0.25rem'}} />
                <label htmlFor="fileUpload2">
                  <Button variant="outlined" color="primary" fullWidth onClick={handleUpload} startIcon={<CloudUploadIcon />}>
                    {uploading ? <CircularProgress size={20} style={{color:'#002884'}} /> : "Upload Image"}
                    {img ? " : Completed" : null}
                  </Button>
                </label>
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
      )}
    </React.Fragment>
  )
}
export default Form;