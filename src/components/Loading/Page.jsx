import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {Paper,Typography} from '@material-ui/core'
import useStyles from './styles'

const DetailUI = () => {
  const classes = useStyles();
  return (
    <>
      <Paper style={{ padding: '1.5rem', borderRadius: '1rem',marginBottom:'1rem' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h4" component="h4" className={classes.postTitle}>
            <Skeleton />
          </Typography>
          <Typography gutterBottom variant="body1"style={{marginTop:'0.5rem'}} 
                      color="textSecondary" component="h6">
            <Skeleton />
          </Typography>
          <Typography variant="h6" component="h6" style={{marginLeft:'0.5rem'}}>
            <span style={{color:'#488BBF',fontWeight:'bold'}}> <Skeleton /> </span>
          </Typography>
          
          <Typography gutterBottom variant="body1" component="p">
            <Skeleton count={5} />
          </Typography>
          
          <Typography variant="h6">
            <Skeleton />
          </Typography>
        </div>

        <div className={classes.imageSection}>
          <Skeleton height={200} />
        </div>
      </div>
    </Paper>
    </>
  )
}

export default DetailUI;