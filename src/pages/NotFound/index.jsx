import React from 'react'
import { Box, Button, Container, Link, Paper, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { GlobalConstants } from '../../constants';
import { useNavigate } from 'react-router-dom';

const NotFound404 = () => {

  const history = useNavigate();

  const handleOnClick = () =>{
    history("/")
  }
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{flexGrow:1}} component="div"
        style={{textAlign: 'center',display: 'flex',flexDirection: 'column',background:'transparent',
          justifyContent: 'center',padding:'4rem',verticalAlign: 'middle',marginTop: '4rem'}}
        >
          <Typography variant='h2' color='secondary' style={{fontWeight: 'bold'}}>
            {GlobalConstants.notFound}
          </Typography>
          <Typography variant='body1'>
            {GlobalConstants.notFoundDesp}
          </Typography>
            <Button variant='outlined' startIcon={<ArrowBackIcon />} fullWidth
              style={{marginTop: '2rem',padding:'1rem' }}
              onClick={handleOnClick}
            >
              {GlobalConstants.backToHome}
            </Button>
        </Box>
      </Container>

    </>
  )
}

export default NotFound404;