import React, { useState } from "react";
import img from "../../../assets/satoshi.webp";
import "./profile.css";

import { Modal } from "./modal/Modal";

export const Profile = () => {
    const [modal, setModal] = useState(false);

    const modalClick = () => {
        setModal(!modal);
    };

    return (
        <div className="profile-container">
            {modal ? <Modal modalClick={modalClick} /> : null}

            <div className="wallpaper">
                <img src={img} alt="Profile Pic" />
                <button onClick={modalClick}>Edit Profile</button>
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
