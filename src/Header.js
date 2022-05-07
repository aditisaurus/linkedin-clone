import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/SupervisorAccount';
import NotificationIcon from '@mui/icons-material/SupervisorAccount';




function Header() {
  return (
    <div className="header">

    <div className="header_left">
        <img src="https://raw.githubusercontent.com/aditisinghdeveloper/linkedin-clone/master/src/linkedin.png" alt="" />


        <div className="header_search">
            <SearchIcon />
            <input type="text" />
        </div>

    </div>

    <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationIcon} title="Notifications" />

    </div>

     
    </div>
  )
}

export default Header