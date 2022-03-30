import React from "react";
import "./index.css";
import img from "../../../assets/satoshi.webp";

export const Post = ({ post }) => {
    return (
        <div className="post">
            <img className="profile-pic" src={img} alt="profile pic" />
            <div className="username-post">
                <span>Username</span>
                <span className="post-text">Post</span>
            </div>
        </div>
    );
};
