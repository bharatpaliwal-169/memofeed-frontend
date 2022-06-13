import React from 'react'
import {TextField,Grid,
  // InputAdornment,IconButton
} from "@material-ui/core"
// import Visibility from '@material-ui/icons/Visibility'
// import VisibilityOff from '@material-ui/icons/VisibilityOff'

function Input({half,name,handleChange,label,type,autoFocus}) {
  // const handleShowPassword = ()=>{}
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
          // InputProps = {name === "password" && {
          //   endadorement: (
          //     <InputAdornment position="end">
          //       <IconButton onClick={handleShowPassword} >
          //         {type === "password" ? <Visibility></Visibility> : <VisibilityOff></VisibilityOff>}
          //       </IconButton>
          //     </InputAdornment>
          // )} 
          // }
        />
      </Grid>
    </>
  )
}

export default Input;