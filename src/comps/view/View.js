import "./index.css";
import "../glitch.css";
import React, { useEffect } from "react";
import { LeftNav } from "../leftnav/LeftNav";
import { Board } from "../board/Board";

import { connect } from "react-redux";
import { FetchProfile } from "../../actions/ProfileActions";

const ViewComponent = ({ profile, FetchProfile }) => {
    useEffect(() => {
        FetchProfile();
    }, [FetchProfile]);

    return (
        <>
            <div className="wrapper">
                <div className=" left-nav">
                    <LeftNav profile={profile} />
                </div>
                <div className="container board">
                    <Board />
                </div>
                <div className="container waves">
                    <h1 className="glitch" data-text="Hot Waves">
                        Hot Waves
                    </h1>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
    };
};

const mapActionsToProps = () => {
    return {
        FetchProfile,
    };
};

export const View = connect(
    mapStateToProps,
    mapActionsToProps()
)(ViewComponent);
