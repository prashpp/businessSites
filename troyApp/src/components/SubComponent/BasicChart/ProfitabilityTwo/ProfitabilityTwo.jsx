import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import FilterRightSideBtns from '../../../BenchmarkBusiness/FilterRightSideBtns';
import FilterBottomSection from '../../../BenchmarkBusiness/FilterBottomSection';

const ProfitabilityTwo = () => {
  return (
    <div>
      <div className='profitability-sec-two'>
        <Grid container spacing={2}>
            <Grid item md={3}>
                <Box className="industry-avg-profitabilty-sec">
                    <div className='bg-white-common'>
                        <Typography variant="h5" className='industry-avg-heading'>Industry Avg. Profitabilty:</Typography>
                    </div>
                    <div className='bg-white-common gross-margin-sec'>
                        <Typography variant='h3'>54%</Typography>
                        <Typography variant='body1'>Gross Margin</Typography>
                    </div>
                    <div className='bg-white-common ebitda-margin-sec'>
                        <Typography variant='h3'>17%</Typography>
                        <Typography variant='body1'>EBITDA Margin</Typography>
                    </div>
                    <div className='bg-white-common net-margin-sec'>
                        <Typography variant='h3'>13%</Typography>
                        <Typography variant='body1'>Net Margin</Typography>
                    </div>
                    <div className='bg-white-common return-on-assest-sec'>
                        <Typography variant='h3'>3%</Typography>
                        <Typography variant='body1'>Return on Assets</Typography>
                    </div>
                    <div className='bg-white-common return-of-equity'>
                        <Typography variant='h3'>6%</Typography>
                        <Typography variant='body1'>Return on Equity</Typography>
                    </div>
                </Box>
            </Grid>
            <Grid item md={7}>
                <Box className="how-profitabilty-industry">
                    <Box className="how-profitabilty-industry-chart">

                    </Box>
                    <div className='horizontal-line'></div>
                    <div className='bg-white-common'>
                        <Typography variant="h5">How profitable is this industry?</Typography>
                    </div>
                    <div className='bg-white-common'>
                        <Typography variant="body1">Here's is the profitability ratios of the selected industry Peer company are shown. </Typography>
                    </div>
                </Box>
            </Grid>
            <Grid item md={2}>
                <FilterRightSideBtns />
            </Grid>
        </Grid>
        <FilterBottomSection />
      </div>
    </div>
  )
}

export default ProfitabilityTwo
