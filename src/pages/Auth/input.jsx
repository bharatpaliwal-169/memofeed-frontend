import React from 'react'
import {TextField,Grid} from "@material-ui/core"

function Input({half,name,handleChange,label,type,autoFocus}) {

  return (
    <>
      <Grid item xs={12} sm={half ? 6 : 12}>
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
      </Grid>
    </>
  )
}

export default Input;