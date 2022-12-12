import React from 'react'
import { Box, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const ChangePassoword = () => {
  return (
    <div className='change-password-sec'>
         <Box >
            <Typography className='common-heading' variant="h1">
                Change Password
            </Typography>
            
            <form>               
                <Box className='form_contents profile-form-content'>
                    <InputLabel htmlFor="">Email</InputLabel>
                    <FormControl className='formInputs'>    
                        <TextField type="email" placeholder='johnsondoe@nomail.com' />
                    </FormControl>
                </Box>
            
                <Box className='form_contents profile-form-content'>
                    <InputLabel htmlFor="">Old password</InputLabel>
                    <FormControl className='formInputs'>    
                        <TextField type="password" placeholder='old password' />
                    </FormControl>
                </Box>

                <Box className='form_contents profile-form-content'>
                    <InputLabel htmlFor="">New password</InputLabel>
                    <FormControl className='formInputs'>    
                        <TextField type="password" placeholder='new password' />
                    </FormControl>
                </Box>

                <Box className='form_contents profile-form-content'>
                    <InputLabel htmlFor="">Confirm password</InputLabel>
                    <FormControl className='formInputs'>    
                        <TextField type="password" placeholder='confirm password' />
                    </FormControl>
                </Box>
                <Box className='change-password-btn'>
                    <Button className='common-btn'>Change password</Button>
                </Box>
                                   
            </form>
        </Box>
    </div>
  )
}

export default ChangePassoword