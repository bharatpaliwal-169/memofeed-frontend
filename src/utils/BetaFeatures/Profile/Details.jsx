import React from 'react'
import { Grid,Typography, Card,CardContent,Button,Divider,Tooltip} from '@material-ui/core';
import useStyle from './styles';

const Details = ({stats}) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyle();
  console.log(stats);
  return (
    <>
      <Grid container alignItems="stretch" spacing={3} style={{display:'flex',alignItems:'center'}}>
        <Grid item xs={12} sm={12} md={6}>
          <Card className={classes.profileCard} elevation={5}>
            <CardContent>
              <Typography variant='h5'>
                <b>User Details</b>                 
              </Typography>
              <Divider style={{marginTop:'1rem',marginBottom:'1rem'}} />
              <Typography variant='h6'>
                <b>Name :</b> {user?.result?.name}
              </Typography>
              
              <br />
              <Typography variant='h6'>
                <b>Email :</b> {user?.result?.email}
              </Typography>
              <br />
              <Button variant='contained' color="primary" className={classes.changePswd}> Change Password </Button>
              {/* dialog or modal */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Card className={classes.profileCard} elevation={5}>
            <CardContent>
              <Typography variant='h5'>
                <b>Stats</b>                
              </Typography>
              <Divider style={{marginTop:'1rem',marginBottom:'1rem'}} />
              
              <Typography variant='h6'>
                <b>Total Posts :</b> {stats?.totalPosts}                
              </Typography>
              <br />
              <Tooltip title="Sum total of all likes recieved on all posts" aria-label='Like'>
                <Typography variant='h6'>
                  <b>Popularity :</b> {stats?.totalLikes}
                </Typography>
              </Tooltip>
              <br />
              <Typography variant='h6'>
                <b>Total Views :</b> {stats?.popularity}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Details;