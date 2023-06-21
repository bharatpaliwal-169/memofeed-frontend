import React from 'react'
import {Link} from 'react-router-dom'
//css
import {Paper,Typography} from '@material-ui/core'
import useStyles from './styles'

import Logo from '../../assets/LoginProm.svg'

const LoginPromp = ({msg}) => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={5}>
        <img src={Logo} alt="Logo" className={classes.media} />
        <Typography variant="h5" style={{fontWeight:"bold"}} >
          Hey!  
          <Typography component={Link} to="/auth" variant="h4" color="primary" 
            style={{marginLeft:'0.5rem',marginRight:'0.5rem',fontWeight:"bolder"}}>
            Login
          </Typography> 
          {msg ? msg : "and explore much more....."}
        </Typography>
      </Paper>
    </>
  )
}

export default LoginPromp;