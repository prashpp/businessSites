import React from 'react'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./signIn.css"
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import leftImg from "../../assests/images/benchmarkedOne.png"
import linkedin from "../../assests/images/bxl-linkedin.png"
import azure from "../../assests/images/microsoftazure.png"
import Google from "../../assests/images/google.png"
import Fb from "../../assests/images/facebook.png"

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

const SignIn = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='signInSec '>
            <div className='container'>
                <Box className='signInSecInner'>                    
                    <Grid className='signInGrid' container spacing={2}>
                        <Grid xs={12} sm={12} md={5}>
                            <Box className='singUpImg'>
                                <img src={leftImg} alt="" />
                            </Box>
                        </Grid>
                        <Grid xs={12} sm={12} md={7}>
                            <Box className='right-sec'>
                                <Typography className='singNameHeading' variant="h1">Sign in</Typography>
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                            <Tab label="Sign in" {...a11yProps(0)} />
                                            <Tab label="Redeem invitation" {...a11yProps(1)} />                                    
                                        </Tabs>
                                    </Box>
                                    <TabPanel value={value} index={0}>
                                        <Box className='singInHeading'>
                                            <Typography variant="h2">Sign in with an external account</Typography>
                                            <Box className='social-Links'>
                                            <Grid className='linkGrid' container spacing={2}>
                                                <Grid item xs={12} sm={6} md={6} lg={3}>
                                                    <Link to="">
                                                        <img src={azure} alt="" />
                                                        <span>Azure AD</span>    
                                                    </Link>
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={6} lg={3}>
                                                    <Link to="">
                                                        <img src={linkedin} alt="" />
                                                        <span>Linkdin</span>
                                                    </Link>
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={6} lg={3}>
                                                    <Link to="">
                                                        <img src={Google} alt="" />
                                                        <span>Google</span>
                                                    </Link>
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={6} lg={3}>
                                                    <Link to="">
                                                        <img src={Fb} alt="" />
                                                        <span>Facebook</span>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                                
                                            </Box>
                                        </Box>
                                        <Typography className='or-Divider' variant="body1">Or</Typography>
                                        <Box className='signInForm'>
                                                <form >
                                                    <Box className='form_contents'>
                                                        <InputLabel htmlFor="">Email</InputLabel>
                                                        <FormControl className='formInputs'>    
                                                            <TextField type="email" placeholder='johnsondoe@nomail.com' />
                                                        </FormControl>
                                                    </Box>
                                                    <Box className='form_contents'>
                                                        <InputLabel htmlFor="">Password</InputLabel>
                                                        <FormControl className='formInputs'>    
                                                            <TextField type="password" placeholder='***************' />
                                                        </FormControl>
                                                    </Box>
                                                    <Box className='checkbox-section'>
                                                        <Box>
                                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                                                        </Box>
                                                        <Box>
                                                            <Link className='forgotPassword' to="">Forgot password ?</Link>
                                                        </Box>                                                    
                                                    </Box>
                                                    <Box className='signIn-btn-sec'>
                                                        <Button className='common-btn'>SIGN IN</Button>
                                                        <Typography variant="body1">Don't have an account ? <Link to="">SIGN UP</Link> </Typography>
                                                    </Box>
                                                </form>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <Box className='invitation-Form'>
                                            <form >
                                                <Box className='form_contents'>
                                                    <InputLabel htmlFor="">Invitation code</InputLabel>
                                                    <FormControl className='formInputs'>    
                                                        <TextField type="email" placeholder='johnsondoe@nomail.com' />
                                                    </FormControl>
                                                </Box>
                                                <Box className='checkbox-section'>
                                                    <Box>
                                                        <FormControlLabel control={<Checkbox defaultChecked />} label="I have an existing account" />
                                                    </Box>                                                                                                          
                                                </Box>
                                                <Box className='signIn-btn-sec'>
                                                    <Button className='common-btn'>REGISTER</Button>
                                                    <Typography variant="body1">Already have an account ? <Link to="">SIGN IN</Link> </Typography>
                                                </Box>
                                            </form>
                                        </Box>
                                    </TabPanel>                                
                                </Box>
                            </Box>                            
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default SignIn