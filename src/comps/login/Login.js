import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../form.css";

// validator
import * as yup from "yup";
import { loginSchema } from "../../validations/LoginSchema";

// config
import { LoginConfig } from "../../config/api";

const loginFormState = {
    usernameOrEmail: "",
    password: "",
};

const initialErrorState = {
    usernameOrEmail: "",
    password: "",
};

const initialFetchErrors = {
    message: "",
};

const initialDisabled = true;

export default function LoginForm({ setLogged }) {
    const [login, setLogin] = useState(loginFormState);
    const [errors, setErrors] = useState(initialErrorState);
    const [fetchErrors, setFetchErrors] = useState(initialFetchErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    let navigate = useNavigate();

    const validate = (name, value) => {
        yup.reach(loginSchema, name)
            .validate(value)
            .then(() => setErrors({ ...errors, [name]: "" }))
            .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
    };

    const change = (e) => {
        const { name, value } = e.target;
        validate(name, value);
        setLogin({ ...login, [name]: value });
    };

    const submit = (e) => {
        e.preventDefault();
        const obj = {
            usernameOrEmail: login.usernameOrEmail,
            password: login.password,
        };
        axios
            .post(`${LoginConfig}`, obj)
            .then((res) => {
                localStorage.setItem("token", `Bearer ${res.data.token}`);
                setLogged(true);
                navigate("/");
            })
            .catch(({ response }) => {
                setFetchErrors({
                    ...fetchErrors,
                    message: response.data.message,
                });
            });
    };

    useEffect(() => {
        loginSchema.isValid(login).then((valid) => setDisabled(!valid));
    }, [login]);

    return (
        <div className="form">
            <h1>Login</h1>
            <form onSubmit={submit}>
                <span>{errors.usernameOrEmail}</span>
                <br />
                <span>{errors.password}</span>
                <br />
                <label htmlFor="usernameOrEmail">Username/Email</label>
                <br />
                <input
                    type="text"
                    name="usernameOrEmail"
                    placeholder="Enter Username/Email"
                    value={login.usernameOrEmail}
                    onChange={change}
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={login.password}
                    onChange={change}
                />
                <br />

                <button disabled={disabled}>Login</button>
                <br />
                <span>{fetchErrors.message}</span>
            </form>
        </div>
    );
}
