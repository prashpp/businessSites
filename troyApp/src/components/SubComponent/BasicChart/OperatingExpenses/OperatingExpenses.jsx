import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import FilterBottomSection from '../../../BenchmarkBusiness/FilterBottomSection';
import FilterRightSideBtns from '../../../BenchmarkBusiness/FilterRightSideBtns';



const OperatingExpenses = () => {
  return (
    <div>
      <div className='operating-expenses-sec'>
        <Grid container spacing={2}>
            <Grid item md={7}>
                <Box className="industry-avg-operating-expenses">
                    <Typography className='gray-bg-sec' variant='h4'>Industry Avg. Revenue</Typography>

                </Box>
            </Grid>
            <Grid item md={3}>
                <Box className="company-spend-sec">
                    <Box className="company-spend-heading">
                        <Typography variant='h5'>How much should your company spend?</Typography>
                    </Box>
                    <Box className="company-spend-desc">
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum animi vel repudiandae dolorem nobis dolores magni, porro sunt accusamus. 
                        </Typography>
                    </Box>
                    <Box className="company-spend-desc">
                        <Typography variant='body1'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis expedita neque velit culpa nostrum ratione veniam, voluptatem, quidem officia doloribus nemo dolorem necessitatibus.
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item md={2}>
                <FilterRightSideBtns />
            </Grid>
            <Grid item md={12}>
                <Box className="operating-expenses-percentage">
                    <Typography className='gray-bg-sec' variant='h4'>Industry Average Operating Expenses as a Total Revenue </Typography>
                </Box>                
            </Grid>
        </Grid>
        <FilterBottomSection />
      </div>
    </div>
  )
}

export default OperatingExpenses
