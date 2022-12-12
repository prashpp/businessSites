import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assests/images/logo.png"
import { Link } from 'react-router-dom';
import "./header.css"





const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
 
  return (
    <>        
        <AppBar className='header_section' position="static">
            <div className='container'>
                <Toolbar className='header'>   
                    <Box className='logo_section'>
                        <Link to="/">
                            <img src={logo} alt="Logo" className='logo' />
                        </Link>
                    </Box> 

                    <Box className="navbar-sec navbar-mobile-sec" sx={{  display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}  
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        className="navbar-sec navbar-mobile-sec"
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                             <ul>
                            <li className='nav-items'><Link className='nav-links' to="">Terms of use</Link></li>
                            <li className='nav-items'><Link className='nav-links' to="">Privacy policy</Link></li>
                            <li className='nav-items'>
                                <Link className='nav-links' to="/contact">
                                    Contact us
                                </Link>
                                </li>
                            <li className='nav-items'><Link className='common-btn' to="">Sign In</Link></li>
                        </ul>
                        </Menu>
                    </Box> 
                    <Box className="navbar-sec" sx={{  display: { xs: 'none', md: 'flex' } }}>
                        <ul>
                            <li className='nav-items'><Link className='nav-links' to="/benchmarkbusiness">Benchmark Business</Link></li>
                            {/* <li className='nav-items'><Link className='nav-links' to="/benchmarkpremium">Benchmark premium</Link></li>
                            <li className='nav-items'><Link className='nav-links' to="/businessinfo">Business information</Link></li> */}
                            <li className='nav-items'><Link className='nav-links' to="">Terms of use</Link></li>
                            <li className='nav-items'><Link className='nav-links' to="">Privacy policy</Link></li>
                            <li className='nav-items'>
                                <Link className='nav-links' to="/contact">
                                    Contact us
                                </Link>
                            </li>
                            <li className='nav-items'><Link className='common-btn' to="/signinpage">Sign In</Link></li>
                            <li className='nav-items'><Link className='nav-links' to="/profile">Profile</Link></li>
                        </ul>
                    </Box>                  
                </Toolbar>
            </div>
        </AppBar>        
    </>
  )
}

export default Header