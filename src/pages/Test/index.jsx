import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {Card,Typography, Box} from '@mui/material'
import useStyles from '../../components/Loading/styles'

const LoadingUI = () => {
  const classes = useStyles();
  return (
    <>
      <Box 
        style={{display: 'flex',flexDirection:'column',alignItems:'stretch',justfyContent:'space-between'}}>
        {Array(6).fill().map((item,index) => (
          
            <Card component='div' 
              style={{width:'100%',margin:'0.5rem'}} 
              elevation={2} key={index}
            >
              <Typography variant="h1" component="h1">
                <Skeleton />
              </Typography>

              <Typography variant="body1" component="h6" style={{paddingLeft: '1.5rem'}}>
                <Skeleton count={6} width="90%" />
              </Typography>
              
              <Typography variant="h5" component="h5">
                <Skeleton />
              </Typography>
            </Card>
          
        ))}
      </Box>
    </>
  )
}

export default LoadingUI;