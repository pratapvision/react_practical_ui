import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import '../Nav/index.css'

export default function Navbar() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        // <div >
        //     <Box sx={{ flexGrow: 1 }} >
        //         <AppBar position="static" style={{ backgroundColor: "#fff" }}>
        //             <Toolbar>
        //                 <div>
        //                     <Typography
        //                         variant="h6"
        //                         noWrap
        //                         component="div"
        //                         sx={{ display: { xs: 'none', sm: 'block' } }}
        //                         className='text-color'
        //                     >
        //                         <b>Education Dashboard </b> <br /> Welcome, Henna Baker's
        //                     </Typography>
        //                 </div>
        //                 <Typography
        //                     variant="h6"
        //                     noWrap
        //                     component="div"
        //                     sx={{ display: { xs: 'none', sm: 'block' } }}
        //                 >
        //                     <img src="/english_icon.png" alt="image" height="30px" width="30px" />
        //                     <b className='text-color'>English</b>
        //                 </Typography>

        //                 <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        //                     <IconButton size="large" aria-label="show 4 new mails" color="#fff">
        //                         <img src="/clarity_notification.png" alt="image" height="30px" width="30px" />
        //                         {/* <Badge badgeContent={3} color="error">
        //                         <NotificationsIcon />
        //                     </Badge> */}
        //                     </IconButton>
        //                     <IconButton
        //                         size="large"
        //                         aria-label="show 17 new notifications"
        //                         color="#fff"
        //                     >
        //                         <img src="/clarity_email.png" alt="image" height="30px" width="30px" />
        //                         {/* <Badge badgeContent={1} color="error">
        //                         <MailIcon />
        //                     </Badge> */}
        //                     </IconButton>
        //                     <IconButton
        //                         size="large"
        //                         edge="end"
        //                         aria-label="account of current user"
        //                         aria-controls={menuId}
        //                         aria-haspopup="true"
        //                         color="inherit"
        //                     >
        //                         {/* <AccountCircle /> */}
        //                         <img src="/profile_icon.png" alt="image" />
        //                     </IconButton>
        //                 </Box>
        //                 {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        //                 <IconButton
        //                     size="large"
        //                     aria-label="show more"
        //                     aria-controls={mobileMenuId}
        //                     aria-haspopup="true"
        //                     onClick={handleMobileMenuOpen}
        //                     color="inherit"
        //                     >
        //                     <MoreIcon />
        //                     </IconButton>
        //                 </Box> */}
        //             </Toolbar>
        //         </AppBar>
        //         {/* {renderMobileMenu} */}
        //     </Box>
        // </div>

        <div className="card mt-2 border-0">
            <div className="card-header border-0 bg-white" >
                <div className="card-title float-left">
                    <h4 className='font-weight-bold'> Education Dashboard </h4>
                    <spam className="float-left">Welcome, Henna Baker's</spam>
                </div>
                <div className='float-right'>
                    {/* <i className="fa fa-refresh header-icon" aria-hidden="true" ></i> */}
                    {/* <i className="fa fa-times header-icon" aria-hidden="true" ></i> */}
                    <img src="/english_icon.png" className='me-3' alt="image" />
                    <spam className="header-english me-3">English</spam>
                    <img className='me-3' src="/clarity_notification.png" alt="image" />
                    <img className='me-3' src="/clarity_email.png" alt="image" />
                    <img src="/profile_icon.png" className='me-2' alt="image" />
                    <span className="header-profile-name">Clay Johnson</span>
                    <i className="fa fa-angle-down header-icon prof-drop-icon" aria-hidden="true" ></i>
                </div >
            </div >
        </div>
    );
}