import React from 'react'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import fb from "../../assests/images/fb.svg"
import twitter from "../../assests/images/twitter.svg"
import youtube from "../../assests/images/youtube.svg"


const Footer = () => {
  return (
    <div className='footerSection'>
        <div className='container'>
            <Box className="footer_Top">
                <Grid container spacing={2}>
                    <Grid md={6}>
                        <Box className='footer_sec_One'>
                            <Typography className='footer_Headings' variant="body1">Troy Valuations</Typography>
                            <Typography className='footer_Sec_One_data' variant="body1">Aenean a dui at magna tempor gravida ut ut mi. Aenean felis lectus, sollicitudin et pellentesque sed, consectetur et justo. Quisque a lorem ac leo elementum malesuada id vitae elit.</Typography>


                        </Box>
                        
                    </Grid>
                    <Grid md={2}>
                        <Box className='footer_sec_Two common_footer'>
                            <Typography className='footer_Headings' variant="body1">Company</Typography>
                            <ul>
                                <li>
                                    <a className='footer-links' href="javascript:void(0)">About</a>
                                </li>
                                <li>
                                    <a className='footer-links' href="javascript:void(0)">FAQs</a>
                                </li>
                                <li>
                                    <a className='footer-links' href="javascript:void(0)">Blog</a>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid md={2}>
                        <Box className='footer_sec_Three common_footer '>
                        <Typography className='footer_Headings' variant="body1">Resources</Typography>
                            <ul>
                                <li>
                                    <a className='footer-links' href="javascript:void(0)">Terms of use </a>
                                </li>
                                <li>
                                    <a className='footer-links' href="javascript:void(0)">Terms of use </a>
                                </li>
                                <li>
                                    <a className='footer-links' href="javascript:void(0)">Contact us</a>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid md={2}>
                        <Box className='footer_sec_Four common_footer'>
                            <Typography className='footer_Headings' variant='body1'>Social Media</Typography>
                            <ul>
                                <li>
                                    <a className='social-list fb-bg' href="">
                                        <img src={fb} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a className='social-list tw-bg' href="">
                                        <img src={twitter} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a className='social-list yt-bg' href="">
                                        <img src={youtube} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box className='footer_Bottom'>
                <Typography variant='body1'>
                    © 2022 Troy. all rights reserved
                </Typography>
            </Box>
        </div>
    </div>
  )
}

export default Footer