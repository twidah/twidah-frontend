import React from "react";
import { Routes, Route } from "react-router-dom";
import { Twoot } from "./twoot/Twoot";
import { Feed } from "./feed/Feed";

export const Board = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Twoot />
                            <Feed />
                        </>
                    }
                />
                {/* <Route path="/" element={} /> */}
            </Routes>
        </>
    );
};
