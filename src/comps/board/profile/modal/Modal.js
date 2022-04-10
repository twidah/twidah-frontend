import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./modal.css";

const initialFormState = {
    bio: "",
    location: "",
    website: "",
};

export const ModalComponent = ({ profile }) => {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState(initialFormState);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setForm({
            ...form,
            bio: profile.bio,
            location: profile.location,
            website: profile.website,
        });
    }, [profile]);

    const change = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const submit = (e) => {
        e.preventDefault();
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
                            value={form.bio}
                            onChange={change}
                        />

                        <Form.Label htmlFor="location">Location</Form.Label>
                        <Form.Control
                            type="text"
                            name="location"
                            value={form.location}
                            onChange={change}
                        />

                        <Form.Label htmlFor="website">Website</Form.Label>
                        <Form.Control
                            type="text"
                            name="website"
                            value={form.website}
                            onChange={change}
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
