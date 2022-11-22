import './Home.css'
import Feed from '../../Components/Feed/Feed/Feed'
import LoginOption from '../../Components/LoginOption/LoginOption'
import HomeOption from '../../Components/HomeOption/HomeOption';
import React from 'react';

function Home(){
    return (
    <div className="homeContainer">
        <div className="leftContainer">
        <HomeOption />
        </div>
        <div className="centreContainer">
        <Feed />
        </div>
        <div className="rightContainer">
        <LoginOption />
        </div>
    </div>
    )
}

export default Home;