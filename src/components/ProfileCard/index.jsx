import React from 'react'
import {Box,Avatar,Card,Typography, CardContent } from '@mui/material'
import { GlobalConstants } from '../../constants';
import LoginPromp from '../LoginPromp';


const ProfileCard = () => {
  
  const bgCover = "/images/bg-cover.jpg";
  const user = JSON.parse(localStorage.getItem('profile'));
  const stats = JSON.parse(localStorage.getItem('stats'));

  if(!user){
    return(
      <LoginPromp />
    )
  }
  
  return (
    <>
      <Box sx={{display: "flex", justifyContent: "center", mt: 5 }}>
        <Card sx={{ maxWidth: 350, borderRadius: 3, boxShadow: 3, overflow: "hidden" }}>
          {/* Background Cover Image */}
          <Box
            sx={{
              height: 120,
              backgroundImage: `url(${bgCover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        
          {/* Avatar */}
          <Box sx={{ textAlign: "center", mt: -5 }}>
            <Avatar
              alt={user?.result?.name} src={user?.result?.imageUrl}
              sx={{ width: 80, height: 80,padding:'1rem', border: "3px solid white",fontWeight:'bold',backgroundColor:'#3E78B6' }}
              style={{ border: user?.result?.verified ? '2px solid green' : ''}}
            >
              {user?.result?.name?.charAt(0)}
            </Avatar>
          </Box>
        
          {/* User Info */}
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" fontWeight="bold">
              {user?.result?.name}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              {user.bio}
            </Typography> */}
            <Box style={{width:"12rem"}}>
            </Box>
              {/* Stats */}
              <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>

                {/* <Box textAlign="center">
                  <Typography fontWeight="bold">{user.followers}</Typography>
                  <Typography variant="caption" color="text.secondary">Followers</Typography>
                </Box> */}
                {!!stats?.totalPosts && (
                  <Box textAlign="center">
                    <Typography fontWeight="bold">{stats?.totalPosts}</Typography>
                    <Typography variant="caption" color="text.secondary">{GlobalConstants.posts}</Typography>
                  </Box>
                )}
                {!!stats?.totalLikes && (
                  <Box textAlign="center">
                    <Typography fontWeight="bold">{stats?.totalLikes}</Typography>
                    <Typography variant="caption" color="text.secondary">{GlobalConstants.likes}</Typography>
                  </Box>
                )}
              </Box>
            </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default ProfileCard;