import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import FilterRightSideBtns from '../../../BenchmarkBusiness/FilterRightSideBtns';
import FilterBottomSection from '../../../BenchmarkBusiness/FilterBottomSection';

const LeverageDebtCApitalization = () => {
  return (
    <div>
         <div className='leverage-sec'>'
        <Grid container spacing={2}>
            <Grid item md={10}>
                <Grid container spacing={2}>
                    <Grid item md={4}>
                        <Box className="lower-middle-quartile-sec">
                            <div className='bg-white-common'>
                                <Typography variant="h5" className='industry-avg-heading'>Lower-Middle Quartile Industry Avg. Debt to Equity Ratio</Typography>
                            </div>
                            <div className='bg-white-common gross-margin-sec total-debt'>
                                <Typography variant='h3'>1.20</Typography>
                                <Typography variant='body1'>Total Debt to Equaty</Typography>
                            </div>
                            <div className='bg-white-common ebitda-margin-sec long-term-debt'>
                                <Typography variant='h3'>0.64</Typography>
                                <Typography variant='body1'>Long Terms Debt to Equaty</Typography>
                            </div>
                            <div className='bg-white-common net-margin-sec current-debt'>
                                <Typography variant='h3'>0.50</Typography>
                                <Typography variant='body1'>Current Debt to Equity</Typography>
                            </div>                           
                        </Box>
                    </Grid>
                    <Grid item md={8}>
                        <Box className="leverage-chart">

                        </Box>
                    </Grid>
                    <div className='horizontal-line'></div>
                    <Grid item md={12}>
                        <Box  className="company-financed">
                            <Box className="bg-white-common company-finance-content">
                                <Typography variant="h5" className='industry-avg-heading'>How is this Company financed?</Typography>
                            </Box>
                            <Box className="bg-white-common">
                                <Typography variant='body1'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque soluta voluptatum inventore facilis blanditiis. Quos unde, explicabo quidem illum voluptas veritatis deleniti, ex, quae ducimus provident eaque inventore voluptatem aperiam!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
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

export default LeverageDebtCApitalization