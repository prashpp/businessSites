import React from 'react'
import Box from '@mui/material/Box';
import {  Button, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

import CimgOne from "../../assests/images/call.svg"
import CimgTwo from "../../assests/images/email-line.svg"
import CimgThree from "../../assests/images/location.svg"


const ContactForm = () => {
  return (
    <div className='contactForm_Sec'>
        <div className='container'>
            <div className='contactForm_Sec_inner'>
                <Box className="ContactForm_left">
                    <Box className='contact_us_Content'>
                        <Typography variant='h1'>Contact us</Typography>
                        <Typography variant='body1'>Use our contact form, or</Typography>
                        <Box className='contact_us_inner'>
                            <Box className='contact_us_inner_img'>
                                <img src={CimgOne} alt="" />
                            </Box>
                            <Box className='contact_us_inner_Data'>
                                <Typography className='contact_heading' variant='body1'>Call Us</Typography>
                                <Typography className='contact_number' variant='body1'>xxx-xxx-xxxx</Typography>
                            </Box>
                        </Box>
                        <Box className='contact_us_inner'>
                            <Box className='contact_us_inner_img'>
                                <img src={CimgTwo} alt="" />
                            </Box>
                            <Box className='contact_us_inner_Data'>
                                <Typography className='contact_heading' variant='body1'>Email Us</Typography>
                                <Typography className='contact_number' variant='body1'>xxx-xxx-xxxx</Typography>
                            </Box>
                        </Box>
                        <Box className='contact_us_inner'>
                            <Box className='contact_us_inner_img'>
                                <img src={CimgThree} alt="" />
                            </Box>
                            <Box className='contact_us_inner_Data'>
                                <Typography className='contact_heading' variant='body1'>Find Us</Typography>
                                <Typography className='contact_number' variant='body1'>xxx-xxx-xxxx</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="ContactForm_right">
                    <Box className='form_Section'>
                        <Typography variant='h1'>Get In Touch</Typography>
                        
                        <Box className='form_contents'>
                            <InputLabel htmlFor="">Name</InputLabel>
                            <FormControl className='formInputs'>    
                            <TextField type="text" placeholder='johnsondoe' />
                            </FormControl>
                        </Box>
                        <Box className='form_contents'>
                            <InputLabel htmlFor="">Email</InputLabel>
                            <FormControl className='formInputs' >    
                            <TextField type="text" placeholder='johnsondoe@nomail.com' />
                            </FormControl>
                        </Box>
                        <Box className='form_contents'>
                            <InputLabel htmlFor="">Subject</InputLabel>
                            <FormControl className='formInputs'>    
                            <TextField type="text" placeholder='Type here' />
                            </FormControl>
                        </Box>
                        <Box className='form_contents'>
                            <InputLabel htmlFor="">Message</InputLabel>
                            <FormControl className='formInputs'>    
                            <TextField type="text"  placeholder='Type here' />
                            </FormControl>
                        </Box>
                        <Button className='common-btn'>SUBMIT</Button>
                        
                    </Box>
                </Box>
            </div>
        </div>
    </div>
  )
}

export default ContactForm