import React from 'react'
import { Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import bechImgOne from "../../../assests/images/benchmarkedOne.png"
import bechImgTwo from "../../../assests/images/benchmarkedTwo.png"

const BenchmarkedSec = () => {
  return (
    <div className='benchmarked_Sec'>
        <div className='container'>
            <Box className="benchmarked_InnerSec">
                <Grid className="gridContainer" container spacing={2}>
                    <Grid className='bechmaked_Content' md={7}>
                        <Typography variant="h1">
                            Benchmark your Business
                        </Typography>
                        <Typography variant="h5">
                            What's Profitable and What's not?
                        </Typography>
                        <Typography variant='body1'>
                            Analyze industries in your area to quickly and easily identify opportunities and avoid costly mistakes.
                        </Typography>
                        <Button className="common-btn"> Click for Pricing</Button>
                    </Grid>
                    <Grid className='benchmarked_Img' md={5}>
                        <Box className=''>
                            <img src={bechImgOne} alt="" />
                        </Box>                        
                    </Grid>
                </Grid>
            </Box>
            <Box className="benchmarked_InnerSec">
                <Grid className="gridContainer" container spacing={2}>
                    <Grid className='bechmaked_Content' md={7}>
                        <Typography variant="h1">
                            Benchmark your Business Premium
                        </Typography>
                        <Typography variant="h5">
                            What's Profitable and What's not?
                        </Typography>
                        <Typography variant='body1'>
                            Use the self-diagnostic tool to immediately identify and compare your business to your competitors.
                        </Typography>
                        <Button className="common-btn"> Click for Pricing</Button>
                    </Grid>
                    <Grid className='benchmarked_Img' md={5}>
                        <Box>
                            <img src={bechImgTwo} alt="" />
                        </Box>                        
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    </div>
  )
}

export default BenchmarkedSec