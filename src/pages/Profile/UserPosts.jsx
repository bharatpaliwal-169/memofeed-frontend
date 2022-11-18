import React from 'react'
import { useHistory } from 'react-router-dom';
import { Card, Grid, CardContent,CardMedia,ButtonBase, Typography } from '@material-ui/core'
import Chip from '@material-ui/core/Chip';
import moment from 'moment';
import useStyle from './styles';
const UserPosts = (props) => {
  const history = useHistory();
  const classes = useStyle();

  const openPost = (id) => {
    history.push(`/posts/${id}`);
    console.log(id);
  }
  const handleChipClick = () => {
    console.log("clicked");
  }
  return (
    <>
      <Grid container alignItems="stretch" spacing={3}>
        {props.posts.map( (post,index) => (
          <Grid item key={index} xs={12} sm={12} md={4}>
                <Card className={classes.card} raised elevation={6}>
                  <ButtonBase className={classes.cardAction} onClick={(e) => openPost(post._id)}>
                    <CardMedia className={classes.media} 
                      image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
                      title={post.title} 
                    />
                    
                    <div className={classes.overlay}>
                      <Typography variant="h6">
                        {post.name}
                      </Typography>
                      <Typography variant="caption"> {moment(post.createdAt).fromNow()} </Typography>
                    </div>
                  </ButtonBase>
                    
                    <div className={classes.Chipdetails}>
                        {post.tags.slice(0,3).map((tag,index) => 
                          <Chip key={index} label={tag} onClick={handleChipClick} spacing={1} style={{margin:'0.1rem'}} color="primary" variant="outlined" />
                        )}
                    </div>
                  <ButtonBase className={classes.cardAction} onClick={(e) => openPost(post._id)}>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h5">
                      {post.title.length > 20 ? post.title.substring(0, 15)+"..." : post.title}
                    </Typography>
                    
                    <CardContent className={classes.contentBody}>
                      <Typography variant="body1" color="textSecondary" component="p">
                        {post.message.length > 65 ? post.message.substring(0,65)+" ....." : post.message}
                      </Typography>
                    </CardContent>
                  </ButtonBase>      
                </Card>
          </Grid>
        ))}

      </Grid>
    </>
  )
}

export default UserPosts;