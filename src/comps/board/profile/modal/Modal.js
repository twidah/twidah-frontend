import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./modal.css";

// import { connect } from "react-redux";
// import { FetchProfile } from "../../../../actions/ProfileActions";

export const ProfileModal = ({ profile, handleChange, update, username }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submit = (e) => {
        // Handle the submit through actions
        e.preventDefault();
        update(username, profile);
        handleClose();
    };

    return (
        <>
            <button onClick={handleShow}>Edit Profile</button>
            <Modal className="modal-box" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h3>Edit Profile</h3>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label htmlFor="bio">Bio</Form.Label>
                        <Form.Control
                            type="text"
                            name="bio"
                            max="100"
                            value={profile.bio ? profile.bio : ""}
                            onChange={handleChange}
                        />

                        <Form.Label htmlFor="location">Location</Form.Label>
                        <Form.Control
                            type="text"
                            name="location"
                            value={profile.location ? profile.location : ""}
                            onChange={handleChange}
                        />

                        <Form.Label htmlFor="website">Website</Form.Label>
                        <Form.Control
                            type="text"
                            name="website"
                            value={profile.website ? profile.website : ""}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={submit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

// const mapStateToProps = (state) => {
//   return {
//     profile: state.profile,
//   };
// };

// const mapActionsToProps = () => {
//   return {
//     FetchProfile,
//   };
// };

// export const ProfileModal = connect(
//   mapStateToProps,
//   mapActionsToProps()
// )(ModalComponent);
