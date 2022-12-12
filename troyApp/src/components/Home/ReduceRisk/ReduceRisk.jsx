import React from 'react'
import {  Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ReduceRisk = () => {
  return (
   
    <div className='Reduce_risk_Sec'>
        <div className='container'>
            <Box className='Reduce_risk_Sec_inner'>
                <Grid container className='reduce_grid' spacing={2}>
                    <Grid item className='Reduce_risk_Sec_Content' md={5}>
                        <Typography className='subheading' variant="body1">
                            Reduce Risk
                        </Typography>
                        <Typography variant="h1">
                            Let's See
                        </Typography>
                        <Typography variant="h1">
                            How we can Reduce risk
                        </Typography>
                        <Typography variant='body1'>
                            Maximize value  in your business using data driven solutions to analyze, benchmark and negotiate the price for your business. 
                        </Typography>
                    </Grid>
                    
                    <Grid item className='Reduce_risk_Sec_video' md={7}>
                        <Box className='reduce_risk_vid'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/K4TOrB7at0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    </div>
    
  )
}

export default ReduceRisk