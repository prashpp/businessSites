import React from 'react'
import { Box, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const ManageProfile = () => {


    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="Manage-profile-sec">
        <Box >
            <Typography className='common-heading' variant="h1">
                Manage your profile
            </Typography>
            <Typography className='your-information' variant="body1">
                Your information
            </Typography>
            <form>
                <Grid  className='ProfileManageGrid ' container spacing={2}>
                    <Grid className='grid-item' item xs={12} sm={12} md={6}>
                        <Box className='form_contents profile-form-content'>  
                            <InputLabel htmlFor="">First Name</InputLabel>
                            <FormControl className='formInputs'>    
                                <TextField type="text" placeholder='johnson' />
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid className='grid-item' item xs={12} sm={12} md={6}>
                        <Box className='form_contents profile-form-content'>
                            <InputLabel htmlFor="">Last Name</InputLabel>
                            <FormControl className='formInputs'>    
                                <TextField type="text" placeholder='doe' />
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid className='grid-item' item xs={12} sm={12} md={12}>
                        <Box className='form_contents profile-form-content'>
                            <InputLabel htmlFor="">Email</InputLabel>
                            <FormControl className='formInputs'>    
                                <TextField type="email" placeholder='johnsondoe@nomail.com' />
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid className='grid-item' item xs={12} sm={12} md={12}>
                        <Box className='form_contents profile-form-content'>
                            <InputLabel htmlFor="">Business Name</InputLabel>
                            <FormControl className='formInputs'>    
                                <TextField type="email" placeholder='Provide a Business Name' />
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid className='grid-item' item xs={12} sm={12} md={12}>
                        <Box className='form_contents profile-form-content'>
                            <InputLabel htmlFor="">How did you find us?</InputLabel>
                            <FormControl className='formInputs form-input-select' sx={{ m: 1, minWidth: 120 }}>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>                                    
                            </FormControl>  
                        </Box>
                    </Grid>
                    <Grid className='grid-item' item xs={12} sm={12} md={12}>
                        <Box className='form_contents profile-form-content'>
                            <InputLabel htmlFor="">Other (please specify)</InputLabel>
                            <FormControl className='formInputs'>    
                                <TextField type="email" placeholder='Type here' />
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid className='grid-item' item xs={12} sm={12} md={12}>
                        <Box className='update-btn'>
                            <Button className='common-btn'>UPDATE</Button>
                        </Box>
                    </Grid>
                </Grid>                
            </form>
        </Box>
    </div>
  )
}

export default ManageProfile