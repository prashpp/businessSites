import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import FilterBottomSection from '../../../BenchmarkBusiness/FilterBottomSection';
import FilterRightSideBtns from '../../../BenchmarkBusiness/FilterRightSideBtns';
import Chartjs from '../Chartjs';
import ProfitabilityChartOne from './ProfitabilityChartOne';
import PaginationLink from '../BasicChartPagination/BasicChartPagination';
import BasicChartPagination from '../BasicChartPagination/BasicChartPagination';

const Profitability = () => {
    

  return (
    <div>
      <div className='profiltability-section'>
        <Grid container spacing={2}>
            <Grid item md={3}>
                <Box className="industry-avg-revenue">
                    <Typography className='gray-bg-sec' variant='h4'>Industry Avg. Revenue</Typography>
                    <Box className="industry-avg-revenue-chart">
                        <Chartjs />
                    </Box>
                </Box>
                <Grid container spacing={2}>
                    <Grid item md={7}>
                        <Box className="avg-revenue-left-sec common-revenue">
                            <Typography className='sales-og-good-revenue' variant='h3'>$693,438</Typography>
                            <Typography className='revenue-desc' variant='body2'>Sales of Goods & Services</Typography>
                        </Box>
                        
                    </Grid>
                    <Grid item md={5}>
                        <Box className="avg-revenue-right-sec common-revenue">
                            <Typography className='all-other-revenue' variant='h3'>$693,438</Typography>
                            <Typography className='revenue-desc' variant='body2'>All other Source</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={7}>
                <Box className="breakdown-of-industry">
                    <Typography className='gray-bg-sec' variant='h4'>Breakdown of Industry Avg. Profit and Cost as a Percentage of Revenue</Typography>
                    <Box className="breakdown-of-industry-chart">
                        <ProfitabilityChartOne />
                    </Box>
                </Box>
                <div className='horizontal-line'></div>
                <Box className="breakdown-content">
                    <Typography variant='body1' className='breakdown-desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti recusandae praesentium incidunt porro distinctio ex dolor quas pariatur, laborum, voluptates delectus aspernatur eaque, unde voluptatem saepe iure repudiandae nemo eligendi.
                    </Typography>
                </Box>
                <Box className="breakdown-content">
                    <Typography variant='body1' className='breakdown-desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti recusandae praesentium incidunt porro distinctio ex dolor quas pariatur, laborum, voluptates delectus aspernatur eaque, unde voluptatem saepe iure repudiandae nemo eligendi.
                    </Typography>
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

export default Profitability
