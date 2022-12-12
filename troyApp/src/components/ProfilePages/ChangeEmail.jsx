import React from 'react'
import { Box, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ChangeEmail = () => {
  return (
    <div className='changeEmail-sec'>
        <Box >
            <Typography className='common-heading' variant="h1">
                Change Email
            </Typography>
            
            <form>               
                <Box className='form_contents '>
                    <InputLabel htmlFor="">Email</InputLabel>
                    <FormControl className='formInputs  profile-form-content'>    
                        <TextField type="email" placeholder='johnsondoe@nomail.com' />
                    </FormControl>
                </Box>
                <Box className='change-password-btn'>
                    <Button className='common-btn'>Change Email </Button>
                </Box>
                                   
            </form>
        </Box>
    </div>
  )
}

export default ChangeEmail