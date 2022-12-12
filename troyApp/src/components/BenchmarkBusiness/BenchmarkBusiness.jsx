import React from 'react'
import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import benchmarkedOne from  "../../assests/images/benchmarkedOne.png"

const BenchmarkBusiness = () => {
  return (
    <div className='benchmark-business'>
        <div className='container'>
        <div className='benchmark-premium-inner'>
          <Grid className='businessGrid' container spacing={2}>
            <Grid item md={8}>
                <Box className='my-business-content'>
                    <Typography className='business-sub-heading' variant="body1">Business</Typography>
                    <Typography className='business-heading' variant="h1">Benchmark My Business</Typography>
                    <Typography variant='body1' >Please select your company from the Business Record filter below. Then press the Next Page button to begin your analysis. </Typography>
                    <Typography variant='body1' >                        
                      You can edit the selected Business information. Selected the Business Information tab at the top of the page.  Find and select the business and chose Edit.  Make your changes, then click Save.  
                    </Typography>
                    <Typography variant='body1' >
                      Please be patient while the program loads, it can take up to 30 minutes for the program to refresh.
                    </Typography>
                    
                </Box>
            </Grid>
            <Grid item md={4}>
                <Box className='my-business-img'>
                    <img src={benchmarkedOne} alt="" />
                </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default BenchmarkBusiness