import React from "react";
import img from "./../../../assets/satoshi.webp";
import "./index.css";

export const Twoot = () => {
    return (
        <div className="twoot-container">
            <div className="img-and-text">
                <img className="profile-pic" src={img} alt="Profile" />
                <input type="text" name="twoot" placeholder="What's poppin?" />
            </div>
            <button>Post</button>
        </div>
    );
};
