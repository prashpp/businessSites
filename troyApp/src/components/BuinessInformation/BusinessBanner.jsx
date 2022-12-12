import React from 'react'
import {  Typography } from '@mui/material';


const BusinessBanner = () => {
  return (
    <div className='common-Banner-sec'>
        <div className='common-Banner-sec_opacity'>
            <div className='container'>
                <div className='common-Banner-sec_Content'>
                    <Typography variant='h1'>My Business</Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </Typography>
                </div>
            </div>
        </div>       
    </div>
    
  )
}

export default BusinessBanner