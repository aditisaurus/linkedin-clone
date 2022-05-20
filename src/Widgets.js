import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
      <div className="widgets_article">
          <div className="widgets_articleLeft">
            <FiberManualRecordIcon/>
          </div>
          <div className="widgets_articleRight">
              <h4>{heading}</h4>
              <p>{subtitle}</p>
          </div>
      </div>
  )

  return (
    <div className="widgets">
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
             <InfoIcon />
        </div>
        {newsArticle("LinkedIn is happening", "Top News-  340k readers")}
        {newsArticle("Covid-19:India Updates", "Top News- 110k readers")}
        {newsArticle("Tesla hits new highs", "Cars- 49593 readers")}
        {newsArticle("Crypto Market crashes", "Crypto- 8000 readers")}
        {newsArticle("Is react too good?", "Coding- 34566 readers")}
        {newsArticle("New projects ongoing", "Top News- 6503 readers")}
    </div>
  )
}

export default Widgets