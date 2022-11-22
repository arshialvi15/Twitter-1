import './Profile.css'
import LoginOption from '../../Components/LoginOption/LoginOption'
import HomeOption from '../../Components/HomeOption/HomeOption'
import ProfileMain from '../../Components/ProfileMain/ProfileMain';
import React from 'react';


function Profile(){
    return (
    <div className="homeContainer">
        <div className="leftContainer">
        <HomeOption />
        </div>
        <div className="centreContainer">Profile
        <ProfileMain/>
        </div>
        <div className="rightContainer">Right
        <LoginOption />
        </div>
    </div>
    )
}
export default Profile;