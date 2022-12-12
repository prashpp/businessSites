import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import FilterRightSideBtns from '../../../BenchmarkBusiness/FilterRightSideBtns';
import FilterBottomSection from '../../../BenchmarkBusiness/FilterBottomSection';

const BalanceSheetAnalysis = () => {
  return (
    <div>
      <div className='balanceSheetSection'>
        <Grid container spacing={2}>
            <Grid item md={6}>
                <Box className="Upper-quartile-industry-assets">
                    <Typography className='gray-bg-sec' variant='h4'>Upper Quartile Industry Average Total Assets </Typography>
                </Box>
                <Box className="Upper-quartile-industry-liabilities">
                    <Typography className='gray-bg-sec' variant='h4'>Upper Quartile Industry Average Total Liabilities </Typography>
                </Box>
            </Grid>
            <Grid item md={4}>
                <Box className="total-liabilities-shareholder">
                    <Typography className='gray-bg-sec' variant='h4'>Upper Quartile Industry Avg Total Liabilities and Shareholder's Equity as a % </Typography>
                </Box>
                <Box className="total-liabilities-shareholder-content bg-white-common">
                    <Typography variant='body1'>                   
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nostrum nisi voluptas reprehenderit beatae nobis at eligendi perferendis earum.
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

export default BalanceSheetAnalysis
