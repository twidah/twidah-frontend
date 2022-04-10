import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../AxiosWithAuth";
import img from "../../../assets/satoshi.webp";
import "./profile.css";
import { ModalComponent } from "./modal/Modal";
import { ProfileConfig } from "../../../config/api";

const initialProfileState = {};

export const Profile = () => {
    const [profile, setProfile] = useState(initialProfileState);

    useEffect(() => {
        axiosWithAuth()
            .get(`${ProfileConfig}`)
            .then((res) => {
                setProfile(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="profile-container">
            <div className="wallpaper">
                <img src={img} alt="Profile Pic" />
                <ModalComponent profile={profile} />
            </div>
            <div className="username">
                <h1>@{profile.username}</h1>
            </div>
            <div className="bio">
                <span>{profile.bio}</span>
            </div>
            <div className="infos">
                <span>{profile.location}</span>
                <span>{profile.website}</span>
            </div>
            <div className="follows">
                <span>{profile.following} Following</span>
                <span>{profile.followers} Followers</span>
            </div>
        </div>
    );
};
