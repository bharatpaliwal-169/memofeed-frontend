import React from 'react'
import {Typography} from '@material-ui/core'

const Footer = () => {
  return (
    <>
      <Typography variant="body1" style={{textAlign: 'center',marginTop: '2rem'}}>
        Made with ❤️ by 
        <a style={{color:"darkblue",textDecoration:"underline",paddingLeft:"0.25rem"}} 
          href="https://github.com/bharatpaliwal-169" target="_blank" rel='noopener nofollow noreferrer preconnect'
        >
          Bharat
        </a>
      </Typography>
    </>
  )
}

export default Footer;