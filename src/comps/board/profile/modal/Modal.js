import React from "react";
import "./modal.css";

export const Modal = ({ modalClick }) => {
    return (
        <div className="modal" onClick={modalClick}>
            <div className="modal-content">
                <h2>Modal</h2>
                <p>Some text in the Modal..</p>
                <button onClick={modalClick}>Close</button>
            </div>
        </div>
    );
};
