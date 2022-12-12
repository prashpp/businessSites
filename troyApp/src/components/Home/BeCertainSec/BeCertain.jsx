import React from 'react'
import {  Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const BeCertain = () => {
  return (
    <div className='beCertain_sec'>
        <div className='container'>
            <Box className='beCertain_sec_inner'>
                <Grid container spacing={2}>
                    <Grid className='beCertain_content' md={10}>
                        <Typography variant="h1">
                            Be Certain
                        </Typography>
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Quisque id lacus nibh. Mauris scelerisque nibh lacus, at maximus nisi accumsan non. Donec eget accumsan neque, et 
                            pharetra libero.
                        </Typography>
                    </Grid>
                    
                    <Grid className='beCetain_btn' md={2}>
                        <Button className="common-btn">READ MORE</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    </div>
  )
}

export default BeCertain