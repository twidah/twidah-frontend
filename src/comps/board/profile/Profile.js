import React from "react";
import img from "../../../assets/satoshi.webp";
import "./profile.css";
import { ModalComponent } from "./modal/Modal";

export const Profile = () => {
    return (
        <div className="profile-container">
            <div className="wallpaper">
                <img src={img} alt="Profile Pic" />
                <ModalComponent />
            </div>
            <div className="username">
                <h1>Satoshi Nakamoto</h1>
            </div>
            <div className="bio">
                <span>
                    I like all things crypto related and web3 is the future!
                </span>
            </div>
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
