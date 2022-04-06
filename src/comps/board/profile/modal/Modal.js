import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./modal.css";

export const ModalComponent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow}>Edit Profile</button>

            <Modal className="modal-box" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h3>Edit Profile</h3>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
