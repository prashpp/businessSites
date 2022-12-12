import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import FilterRightSideBtns from '../../../BenchmarkBusiness/FilterRightSideBtns';
import FilterBottomSection from '../../../BenchmarkBusiness/FilterBottomSection';

const Efficiency = () => {
  return (
    <div>
      <div className='Efficiency-sec'>
     
            <Grid container spacing={2}>
                <Grid item md={10}>
                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <Box className="lower-middle-quartile-sec">
                                <div className='bg-white-common'>
                                    <Typography variant="h5" className='industry-avg-heading'>Lower-Middle Quartile Industry Avg. Turnover Ratio:</Typography>
                                </div>
                                <div className='bg-white-common gross-margin-sec total-debt'>
                                    <Typography variant='h3'>1.54</Typography>
                                    <Typography variant='body1'>Inventory Turnover</Typography>
                                </div>
                                <div className='bg-white-common ebitda-margin-sec long-term-debt'>
                                    <Typography variant='h3'>0.32</Typography>
                                    <Typography variant='body1'>Fixed Asset Turnover</Typography>
                                </div>
                                <div className='bg-white-common net-margin-sec current-debt'>
                                    <Typography variant='h3'>0.11</Typography>
                                    <Typography variant='body1'>Asset Turnover</Typography>
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

export default Efficiency
