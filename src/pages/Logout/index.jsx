import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
//redux
import {useDispatch} from 'react-redux'
import * as actionType from '../../redux/types/actionTypes'

//css
import { Box, Button, Card, CardContent,Typography } from '@mui/material';
import { GlobalConstants } from '../../constants';

const Logout = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history('/auth');
    setUser(null);
  };
  

  return (
    <>
      <Box style={{display: 'flex',flexDirection : 'column',alignItems: 'center'}} sx={{flexGrow:1}}>
        
        <Card style={{padding:'1.25rem',marginTop:'5rem'}}>
          <CardContent>
            <Typography variant='h5' style={{fontWeight:"bold",marginBottom:'2rem'}}>
              {GlobalConstants.confirmLogout}
            </Typography>
            
            <Button variant='outlined' color='secondary' fullWidth
              style={{margin: '0.25rem'}} onClick={logout}
            >
              {GlobalConstants.logout}
            </Button>

            <Button variant='none' color='transparent' fullWidth
              style={{margin:'0.25rem'}} onClick={() => history("/")}
            >
              {GlobalConstants.cancel}
            </Button>
            
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default Logout;