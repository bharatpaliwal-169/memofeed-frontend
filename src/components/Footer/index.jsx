import React from 'react'
import {Typography} from '@material-ui/core'

const Footer = () => {
  return (
    <footer className='dBorder'>
      <Typography variant="h6" style={{textAlign: 'center',marginTop: '1.5rem',marginBottom:'1.5rem'}}>
        Made with ❤️ by <span style={{textDecoration:'underline',color:'blue'}}> <a rel="noreferrer nofollow" target="_blank" href="https://github.com/bharatpaliwal-169">Bharat</a></span> 
      </Typography>
    </footer>
  )
}

export default Footer;