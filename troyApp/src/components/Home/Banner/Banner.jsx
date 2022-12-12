import React from 'react'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import imgone from "../../../assests/images/heroImg1.png"
import imgTwo from "../../../assests/images/heroImg2.png"
import imgThree from "../../../assests/images/heroImg3.png"
import sealImg from "../../../assests/images/benchmarkedSeal.png"
import "./banner.css";

const Banner = () => {
  return (
    <div className='banner-section'>
        <div className='bannerWrapper'>
            <div className='container'>
                <Box className='banner-section-inner'>
                    <Grid className="gridContainer bannerGrid" container spacing={2}>
                        <Grid  item className='banner-content'  md={6}>
                            <Typography variant="h1">
                                Benchmark Your 
                                Business. Make Informed 
                                Decisions.
                            </Typography>
                            <Typography variant='body1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Quisque id lacus nibh. Mauris scelerisque nibh lacus, at 
                                maximus nisi accumsan non. Donec eget accumsan neque, et 
                                pharetra libero.
                            </Typography>
                        </Grid>
                        <Grid item className='bannerImages' md={6}>
                            <img src={sealImg} className='sealImg' alt="" />
                            <Box className='banner_Img'>
                                <img src={imgone} alt="" />
                            </Box>
                            <Box className='banner_Img banner_center_Img'>
                                <img src={imgTwo} alt="" />
                            </Box>
                            <Box className='banner_Img'>
                                <img src={imgThree} alt="" />
                            </Box>
                        </Grid>
                        
                    </Grid>
                </Box>
            </div>
        </div>         
    </div>
  )
}

export default Banner