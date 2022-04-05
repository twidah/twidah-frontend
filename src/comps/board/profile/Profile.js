import React from "react";
import img from "../../../assets/satoshi.webp";
import "./profile.css";

export const Profile = () => {
    return (
        <div className="profile-container">
            <div className="wallpaper">
                <img src={img} alt="Profile Pic" />
            </div>
            <h1 className="username">Satoshi Nakamoto</h1>
            <p className="bio">
                I like all things crypto related and web3 is the future!
            </p>
            <div className="infos">
                <span>New York, USA</span>
                <span>
                    <a href="https://www.bitcoin.com">bitcoin.com</a>
                </span>
            </div>
            <div className="follows">
                <span>0 Following</span>
                <span>21,000 Followers</span>
            </div>
        </div>
    );
};
