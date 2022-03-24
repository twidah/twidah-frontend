import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../form.css";

import * as yup from "yup";
import { signupSchema } from "../../validations/SignupSchema";

const initialFormState = {
    username: "",
    email: "",
    password: "",
};

const initialErrorState = {
    username: "",
    email: "",
    password: "",
};

const initialFetchErrors = {
    message: "",
};

const initialDisabled = true;

export default function SignUp({ setLogged }) {
    const [form, setForm] = useState(initialFormState);
    const [errors, setErrors] = useState(initialErrorState);
    const [disabled, setDisabled] = useState(initialDisabled);
    const [fetchErrors, setFetchErrors] = useState(initialFetchErrors);

    const validate = (name, value) => {
        yup.reach(signupSchema, name)
            .validate(value)
            .then(() => setErrors({ ...errors, [name]: "" }))
            .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
    };

    const change = (e) => {
        const { name, value } = e.target;
        validate(name, value);
        setForm({ ...form, [name]: value });
    };

    let navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();

        const obj = {
            username: form.username,
            email: form.email,
            password: form.password,
        };
        axios
            .post("https://twidah.herokuapp.com/api/auth/register", obj)
            .then((res) => {
                localStorage.setItem("token", `Bearer ${res.data.token}`);
                setLogged(true);
                navigate("/");
            })
            .catch(({ response }) =>
                setFetchErrors({
                    ...fetchErrors,
                    message: response.data.message,
                })
            );
    };

    useEffect(() => {
        signupSchema.isValid(form).then((valid) => setDisabled(!valid));
    }, [form]);

    return (
        <div className="form">
            <form onSubmit={submit}>
                <span>{errors.username}</span>
                <br />
                <span>{errors.email}</span>
                <br />
                <span>{errors.password}</span>
                <br />
                <label htmlFor="username">Username</label>
                <br />
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={form.username}
                    onChange={change}
                />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={form.email}
                    onChange={change}
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={form.password}
                    onChange={change}
                />
                <br />
                <button disabled={disabled}>Sign up!</button>
            </form>
        </div>
    );
}
