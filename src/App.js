import React from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed.js';
import Login from './Login';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">

       <Header />

       {!user ? (
         <Login/>

       ) : (
        <div className="app_body">

        <Sidebar />
      
        <Feed />
      {/* Widgets */}
      </div>
       )}

    
      

    </div>
  );
}

export default App;
