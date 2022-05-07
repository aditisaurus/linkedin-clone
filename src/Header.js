import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import './HeaderOption.js';


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
        <HeaderOption title="Home"/>
        <HeaderOption title="My Network" />

    </div>

     
    </div>
  )
}

export default Header