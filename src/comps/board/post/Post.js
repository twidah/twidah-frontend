import React from "react";
import "./index.css";
import img from "../../../assets/satoshi.webp";

export const Post = ({ post }) => {
    return (
        <div className="post">
            <img className="profile-pic" src={img} alt="profile pic" />
            <div className="username-and-post">
                {/* For now this shows the user id, but we want to show the username */}
                <div>
                    <span className="post-username">@{post.username}</span>
                </div>
                <div className="no-wrap">{post.post_body}</div>
            </div>
        </div>
    );
};
