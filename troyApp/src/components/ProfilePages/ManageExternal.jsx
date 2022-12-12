import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import linkedin from "../../assests/images/bxl-linkedin.png"
import azure from "../../assests/images/microsoftazure.png"
import Google from "../../assests/images/google.png"
import Fb from "../../assests/images/facebook.png"

const ManageExternal = () => {
  return (
    <div className='manage-external-sec'>
        <Box >
            <Typography className='common-heading' variant="h1">
                Manage external authentication
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <Box className='manage-social-link'>
                        <Box className='social-link-sec'>
                            <img src={azure} alt="" />
                            <span>Azure AD</span>
                        </Box>
                        <Box className='connect-btn-sec'>
                            <Link className='common-btn' to="">+ Connect</Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box className='manage-social-link'>
                        <Box className='social-link-sec'>
                            <img src={linkedin} alt="" />
                            <span>Linkdin</span>
                        </Box>
                        <Box className='connect-btn-sec'>
                            <Link className='common-btn' to="">+ Connect</Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box className='manage-social-link'>
                        <Box className='social-link-sec'>
                            <img src={Google} alt="" />
                            <span>Google</span>
                        </Box>
                        <Box className='connect-btn-sec'>
                            <Link className='common-btn' to="">+ Connect</Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box className='manage-social-link'>
                        <Box className='connect-btn-sec'>
                            <img src={Fb} alt="" />
                            <span>Facebook</span>
                        </Box>
                        <Box className='connect-btn-sec'>
                            <Link className='common-btn' to="">+ Connect</Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default ManageExternal