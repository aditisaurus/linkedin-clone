import React from 'react'
import "./Sidebar.css";
import { Avatar } from "@mui/material";


function Sidebar() {
      
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )


  return (
    <div className="sidebar">

         <div className="sidebar_top">
           <img src="https://raw.githubusercontent.com/aditisinghdeveloper/linkedin-clone/master/src/papers.co-nw70-aurora-blue-night-sky-space-nature-winter-3840x2400.jpg" alt="" />
           <Avatar className="sidebar_avatar" />
           <h2>Aditi Singh</h2>
           <h4>singh.aditi@gmail.com</h4>
         </div>

         <div className="sidebar_stats">
             <div className="sidebar_stat">
                 <p>Who viewed you</p>
                 <p className="sidebar_statNumber">2,543</p>

             </div>
             <div className="sidebar_stat">
                 <p>Views on post</p>
                 <p className="sidebar_statNumber">2,045</p>
                 
             </div>

         </div>

         <div className="sidebar_bottom">
             <p>Recent</p>
             {recentItem("reactjs")}
             {recentItem("programming")}
             {recentItem("softwareengineering")}
             {recentItem("design")}
             {recentItem("developer")}
         </div>

    </div>
  )
}

export default Sidebar