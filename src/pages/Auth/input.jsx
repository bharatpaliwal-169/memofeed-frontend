import React from 'react'
import {TextField,Grid2} from "@mui/material"

function Input({half,name,handleChange,label,type,autoFocus}) {

  return (
    <>
      <Grid2 item xs={12} sm={half ? 6 : 12}>
        <TextField 
          name={name}
          onChange={handleChange}
          variant="outlined"
          required={true}
          fullWidth
          autoFocus={autoFocus}
          label={label}
          type={type}
        />
      </Grid2>
    </>
  )
}

export default Input;