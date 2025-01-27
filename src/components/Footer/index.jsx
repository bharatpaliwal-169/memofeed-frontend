import React from 'react'
import {Typography,Link} from '@mui/material'
import { GlobalConstants } from '../../constants';

const Footer = () => {
  return (
    <>
      <Typography variant="body1" style={{textAlign: 'center',marginTop: '2rem'}}>
        {GlobalConstants.footerContent}
        <Link underline="hover" href={GlobalConstants.githubLink} style={{paddingLeft : "0.5rem"}}
          target="_blank" rel='noopener nofollow noreferrer preconnect'
        >
          {GlobalConstants.author}
        </Link>
      </Typography>
    </>
  )
}

export default Footer;