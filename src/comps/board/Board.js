import React from "react";
import { Twoot } from "./twoot/Twoot";
import { Routes, Route } from "react-router-dom";

export const Board = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Twoot />} />
            </Routes>
        </>
    );
};
