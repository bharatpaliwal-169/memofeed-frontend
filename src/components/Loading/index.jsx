import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {Grid,Card,Typography} from '@material-ui/core'
import useStyles from './styles'

const LoadingUI = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
        {Array(6).fill().map((item,index) => (
          <Grid key={index} item xs={12} sm={12} md={6}>
            <Card>
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
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default LoadingUI;