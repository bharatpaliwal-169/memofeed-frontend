import React from 'react'
import {Paper,Typography,InputBase,Breadcrumbs,Link} from '@material-ui/core';

import useStyles from './styles'

const Test = () => {
  const classes = useStyles();
  const handleChange = (e) => {
    console.log(e.target.name + e.target.value);
  }
  return (
    <>
      <Paper elevation={4} className={classes.page}>
        <Typography className={classes.addheading} variant='h3'>
          Write New Story
        </Typography>

        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/test" >
            Feed
          </Link>
          <Link color="primary" href="/test">
            New Story
          </Link>
        </Breadcrumbs>

        {/* title */}
        <InputBase
          name='title'
          onChange={handleChange}
          variant="standard"
          required={true}
          className={classes.addInput}
          type='text'
          placeholder='Enter title here'
        />

      </Paper>
    </>
  )
}

export default Test;