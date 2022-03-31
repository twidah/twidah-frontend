import React, { useState } from "react";
import img from "./../../../assets/satoshi.webp";
import "./index.css";

import { TwootPostConfig } from "../../../config/api";
import { axiosWithAuth } from "../../AxiosWithAuth";

const initialTwootState = {
    postBody: "",
};

// const initialDisabledState = false;

export const Twoot = () => {
    const [twoot, setTwoot] = useState(initialTwootState);
    // const [disabled, setDisabled] = useState(initialDisabledState);

    const change = (e) => {
        const { name, value } = e.target;
        setTwoot({ ...twoot, [name]: value });
    };

    const twootSubmit = (e) => {
        e.preventDefault();

        if (twoot.postBody.length > 280) {
            window.alert("Too many characters!");
        } else {
            if (twoot.postBody.length > 0) {
                axiosWithAuth()
                    .post(`${TwootPostConfig}`, twoot)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                window.alert("Post cannot be empty");
            }
        }
    };

    return (
        <div className="twoot-container">
            <div className="img-and-text twoot-wrapper">
                <img className="profile-pic" src={img} alt="Profile" />
                <textarea
                    type="text"
                    name="postBody"
                    placeholder="What's poppin?"
                    value={twoot.postBody}
                    onChange={change}
                />
            </div>
            <div className="float-right">
                <span>{twoot.postBody.length} / 280</span>
                <button onClick={twootSubmit}>Post</button>
            </div>
        </div>
    );
};
