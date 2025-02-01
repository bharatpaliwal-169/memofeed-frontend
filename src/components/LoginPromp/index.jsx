import React from 'react'
import {Link} from 'react-router-dom'
//css
import {Paper,Typography} from '@mui/material'
import useStyles from './styles'

import Logo from '../../assets/LoginProm.svg'
import { GlobalConstants } from '../../constants'

const LoginPromp = ({msg}) => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={2}>
        <img src={Logo} alt="Logo" className={classes.media} />
        <Typography variant="h5" style={{fontWeight:"bold"}} >
          Hey Viewer, 
          <Typography component={Link} to="/auth" variant="h5" color="primary" 
            style={{fontWeight:"bolder",paddingLeft:'0.25rem'}}>
            {GlobalConstants.login}
          </Typography> 
          {msg ? msg : " and explore much more....."}
        </Typography>
      </Paper>
    </>
  )
}

export default LoginPromp;