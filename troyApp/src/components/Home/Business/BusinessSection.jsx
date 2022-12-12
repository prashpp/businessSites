import React from 'react'
import {  Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import imgOne from "../../../assests/images/businessOne.svg" 
import imgTwo from "../../../assests/images/businessTwo.svg" 
import imgThree from "../../../assests/images/businessThree.svg" 
import imgFour from "../../../assests/images/grow.svg" 

const BusinessSection = () => {
  return (
    <div className='business_Sec'>
        <div  className='container'>
            <Box className='busines_inner'>
                <Grid container className='business_grid' spacing={2}>
                    <Grid item className='busines_Content' md={5}>
                        <Typography className='subheading' variant="body1">
                            Business
                        </Typography>
                        <Typography variant="h1">
                            We compiled this database
                        </Typography>
                       
                        <Typography className='business_Content_data' variant='body1'>
                            We compiled this database on thousands of companies and industries using millions of datapoints from data sourced from Statistics Canada of business income tax returns filed over 
                            multi-year periods.
                        </Typography>
                        <Typography className='business_Content_data' variant='body1'>
                            Benchmarking your business is not just for startups but for businesses in all stages of their evolution.
                        </Typography>
                        <Typography className='business_Content_data' variant='body1'>
                            Benchmarking your business against your competitors gives you the ability to:
                        </Typography>
                    </Grid>
                    
                    <Grid item className='business_Sec_right' md={7}>
                        <Grid container spacing={2}>
                            <Grid className='business_boxes' item  sm={6}>
                                <Box className='business_Boxes_Content'>
                                    <img src={imgOne} alt="" />

                                    <Typography className='boxes_contentHeading' variant='body1'>
                                        Differentiate
                                    </Typography>
                                    <Typography className='boxes_data' variant='body1'>Differentiate Your Business From Your Competitors</Typography>
                                </Box>
                            </Grid>
                            <Grid className='business_boxes' item sm={6}>
                                <Box className='business_Boxes_Content'>
                                    <img src={imgTwo} alt="" />
                                    <Typography className='boxes_contentHeading' variant='body1'>
                                        Analytics
                                    </Typography>
                                    <Typography className='boxes_data' variant='body1'>Analyse The Profitability Of Your Business Compared To Your 
                                    Competitors</Typography>
                                </Box>
                            </Grid>
                            <Grid className='business_boxes' item sm={6}>
                                <Box className='business_Boxes_Content business_content_upper'>
                                    <img src={imgThree} alt="" />
                                    <Typography className='boxes_contentHeading' variant='body1'>
                                        Profitability
                                    </Typography>
                                    <Typography className='boxes_data' variant='body1'>Seek Opportunities To Reduce Your 
                                        Costs And Improve Your Profitability
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid className='business_boxes' item sm={6}>
                                <Box className='business_Boxes_Content'>
                                    <img src={imgFour} alt="" />
                                    <Typography className='boxes_contentHeading' variant='body1'>
                                    Investment
                                    </Typography>
                                    <Typography className='boxes_data' variant='body1'>Compare Your Business
                                        Investment In The Value Of Its Assets
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    </div>
  )
}

export default BusinessSection