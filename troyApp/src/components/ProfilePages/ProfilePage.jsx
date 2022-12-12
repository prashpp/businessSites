import React from 'react'
import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ManageProfile from './ManageProfile';
import ChangePassoword from './ChangePassoword';
import ChangeEmail from './ChangeEmail';
import ManageExternal from './ManageExternal';
import userProfile from "../../assests/images/userProfile.png"


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

const ProfilePage = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div className='profilePage'>
        <div className='container'>
            <Box className='profilePageInner'>
                <Box  className='ProfileGrid'>
                    <Box className='left-sec-profile'>
                        <Box className='user-profile-sec'>
                            <Box className='user-img'>
                                <img src={userProfile} alt="" />
                            </Box>
                            <Typography className='user-name' variant="body1">
                                Johnson doe
                            </Typography>
                            <Typography className='user-data' variant="body1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</Typography>
                        </Box>
                    </Box>
                    <Box className='right-sec-profile'>
                        <Box className='user-profile-changes' sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab className='user-tabs' label="Profile" {...a11yProps(0)} />
                                <Tab className='user-tabs' label="Change password" {...a11yProps(1)} />
                                <Tab className='user-tabs' label="Change email" {...a11yProps(2)} />
                                <Tab className='user-tabs' label="Manage external authentication" {...a11yProps(3)} />
                                </Tabs>
                            </Box>
                            <TabPanel className="profile-tabs" value={value} index={0}>
                                <ManageProfile />
                            </TabPanel>
                            <TabPanel className="profile-tabs" value={value} index={1}>
                                <ChangePassoword />
                            </TabPanel>
                            <TabPanel className="profile-tabs" value={value} index={2}>
                               <ChangeEmail />
                            </TabPanel>
                            <TabPanel className="profile-tabs" value={value} index={3}>
                               <ManageExternal />
                            </TabPanel>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    </div>
  )
}

export default ProfilePage