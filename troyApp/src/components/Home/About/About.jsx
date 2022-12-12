import React from 'react'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import heroImgFour from "../../../assests/images/heroImg4.png"



const About = () => {
  return (
    <div className='about_Sec'>
        <div className='container'>
            <Box className='about_inner'>
                <Grid container className='about_grid' spacing={2}>
                    <Grid item className='about_Content' md={5}>
                        <img src={heroImgFour} alt="" />
                    </Grid>
                    
                    <Grid item className='about_Sec_right' md={7}>
                        <Typography variant="h5">
                            About
                        </Typography>
                        <Typography variant="h1">
                            About Benchmark your Business
                        </Typography>
                        <Typography variant='body1'>
                                We are valuation professionals. We created this database to help business owners make informed decisions about their business. We know business owners know their businesses and their operations. We recognized the need for business owners to understand their industry and their competitors when they are building their business plans, taking stock of where they want their business to go and when buying or selling their business.
                        </Typography>
                        <Button className="common-btn"> Contact Now</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    </div>
  )
}

export default About