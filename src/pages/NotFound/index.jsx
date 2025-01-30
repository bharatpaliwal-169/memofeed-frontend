import React from 'react'
import { Box, Button, Container, Link, Paper, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { GlobalConstants } from '../../constants';
import { useNavigate } from 'react-router-dom';

import NotFound404Bg from "../../assets/NotFoundBg.svg";
const NotFound404 = () => {

  const history = useNavigate();

  const handleOnClick = () =>{
    history("/")
  }
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{flexGrow:1}} component="div"
          style={{textAlign: 'center',alignItems:'center',display: 'flex',flexDirection: 'column',background:'transparent',
          justifyContent: 'center',padding:'2rem',verticalAlign: 'middle',margin: '3rem'}}
        >
          <img src={NotFound404Bg} alt="not found 404" width={280} height={240} />
          <Typography variant='h4' color='secondary' style={{fontWeight: 'bold'}}>
            {GlobalConstants.notFound}
          </Typography>
          <Typography variant='body1'>
            {GlobalConstants.notFoundDesp}
          </Typography>
          <Box width='50%' >
            <Button variant='outlined' startIcon={<ArrowBackIcon />} fullWidth
              style={{marginTop: '1rem',padding:'0.5rem' }}
              onClick={handleOnClick}
            >
              {GlobalConstants.backToHome}
            </Button>
          </Box>
        </Box>
      </Container>

    </>
  )
}

export default NotFound404;