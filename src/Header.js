import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationIcon from '@mui/icons-material/Notifications';




function Header() {
  return (
    <div className="header">

    <div className="header_left">
        <img src="https://raw.githubusercontent.com/aditisinghdeveloper/linkedin-clone/master/src/linkedin.png" alt="" />


        <div className="header_search">
            <SearchIcon />
            <input placeholder="Search" type="text" />
        </div>

    </div>

    <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationIcon} title="Notifications" />
        <HeaderOption avatar="https://github.com/aditisinghdeveloper/linkedin-clone/blob/master/src/B612_20211125_004318_533.jpg?raw=true" title='me' />

    </div>

     
    </div>
  )
}

export default Header