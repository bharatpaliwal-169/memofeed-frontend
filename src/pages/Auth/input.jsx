import React from 'react'
import {TextField,Grid2} from "@mui/material"

const Input = ({name,handleChange,label,type,autoFocus}) => {
  return (
    <>
      <Grid2 item xs={12} sm={12} >
        
        <TextField 
          name={name}
          onChange={handleChange}
          variant="outlined"
          required={true}
          fullWidth
          autoFocus={autoFocus}
          label={label}
          type={type}
          style={{margin:'0.5rem'}}
        />
      
      </Grid2>
    </>
  )
}

export default Input;