import React from 'react'
import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import businessImg from  "../../assests/images/businessRatio.png"


const BusinessInformation = () => {
  return (
    <div className='businessInformation'>        
        <div className='container'>
            <Box className='my-business-section'>
                <Grid className='businessGrid' container spacing={2}>
                    <Grid item md={8}>
                        <Box className='my-business-content'>
                            <Typography className='business-sub-heading' variant="body1">Business</Typography>
                            <Typography className='business-heading' variant="h1">My Business</Typography>
                            <Typography variant='body1' >Begin here.  Create a New Business to Benchmark.  It is a three step process. First, provide a few details about the business.  This will identify the correct benchmark company to compare your company.  Second, if your company has a Balance Sheet, Create a new Balance Sheet.  If your company doesn't have a Balance Sheet, then you will skip this step.  Third, Create a new Income Statement. </Typography>
                            <Typography variant='body1' >
                                ‌In each step, provide as much detail as possible.  The more information you provide, the better the comparison will be.  Fill in all the fields - even if the value is $0.  If you make a mistake, you can go back to edit it later.
                            </Typography>
                            <Typography variant='body1' >
                                ‌Don't worry, the information you provide here will never be made public.  Your data is yours.  You will be able see your data, but you can't see other people's data.  Your data will be saved for your purposes only. 
                            </Typography>
                            <Typography variant='body1' >
                                ‌Once you have Created a Business, head on over to the Benchmark your Business tab.  On this page, you will be able to select your Business and get the details on your Benchmark company.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box className='my-business-img'>
                            <img src={businessImg} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    </div>
  )
}

export default BusinessInformation