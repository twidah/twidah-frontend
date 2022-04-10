import React, { useState, useEffect } from "react";

import img from "../../../assets/satoshi.webp";
import "./profile.css";
import { ProfileModal } from "./modal/Modal";

import { connect } from "react-redux";
import { FetchProfile } from "../../../actions/ProfileActions";

const ProfileComponent = ({ profile, isLoading, errors, FetchProfile }) => {
    const [form, setForm] = useState({});

    const change = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    useEffect(() => {
        FetchProfile();
    }, [FetchProfile]);

    useEffect(() => {
        setForm(profile);
    }, [profile]);

    return (
        <div className="profile-container">
            <div className="wallpaper">
                <img src={img} alt="Profile Pic" />
                {profile.isUser === true ? (
                    <ProfileModal profile={form} handleChange={change} />
                ) : null}
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

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        isLoading: state.isLoading,
        errors: state.errors,
    };
};

const mapActionsToProps = () => {
    return {
        FetchProfile,
    };
};

export const Profile = connect(
    mapStateToProps,
    mapActionsToProps()
)(ProfileComponent);
