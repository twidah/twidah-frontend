import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import img from "../../../assets/satoshi.webp";
import "./profile.css";
import { ProfileModal } from "./modal/Modal";

import { connect } from "react-redux";
import { FetchProfile, UpdateProfile } from "../../../actions/ProfileActions";

const ProfileComponent = ({
    profile,
    isLoading,
    errors,
    FetchProfile,
    UpdateProfile,
}) => {
    const [form, setForm] = useState({});

    const { username } = useParams();

    const change = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    useEffect(() => {
        FetchProfile(username);
    }, [FetchProfile, username]);

    useEffect(() => {
        setForm(profile);
    }, [profile]);

    return (
        <div className="profile-container">
            <div className="wallpaper">
                <img src={img} alt="Profile Pic" />
                {profile.isUser === true ? (
                    <ProfileModal
                        profile={form}
                        handleChange={change}
                        update={UpdateProfile}
                        username={username}
                    />
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
        UpdateProfile,
    };
};

export const Profile = connect(
    mapStateToProps,
    mapActionsToProps()
)(ProfileComponent);
