import React from 'react';
import './Feed.css';
import Post from './Post.js';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption.js';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';


function Feed() {
  return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button type="submit">Send</button>

                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />

            </div>
        </div>
        {/*Posts */}
        <Post name="Aditi Singh"
        description="This is a test"
        message="WOW this worked" />
    </div>
  )
}

export default Feed