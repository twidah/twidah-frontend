import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { loginSchema } from "../../validations/LoginSchema";

const loginFormState = {
  usernameOrEmail: "",
  password: "",
};

const initialErrorState = {
  usernameOrEmail: "",
  password: "",
};

const initialDisabled = true;

export default function LoginForm({ setLogged }) {
  const [login, setLogin] = useState(loginFormState);
  const [errors, setErrors] = useState(initialErrorState);
  const [disabled, setDisabled] = useState(initialDisabled);

  let navigate = useNavigate();

  const validate = (name, value) => {
    yup
      .reach(loginSchema, name)
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
      .post("http://localhost:4000/api/auth/login", obj)
      .then((res) => {
        localStorage.setItem("token", `Bearer ${res.data.token}`);
        setLogged(true);
        navigate("/main");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loginSchema.isValid(login).then((valid) => setDisabled(!valid));
  }, [login]);

  return (
    <form onSubmit={submit}>
      <span>{errors.usernameOrEmail}</span>
      <br />
      <span>{errors.password}</span>
      <br />
      <label htmlFor="usernameOrEmail">
        {""}
        Username/Email
        <input
          type="text"
          name="usernameOrEmail"
          placeholder="Enter Username/Email"
          value={login.usernameOrEmail}
          onChange={change}
        />
      </label>
      <br />

      <label htmlFor="password">
        {""}
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={login.password}
          onChange={change}
        />
      </label>
      <br />
      <button disabled={disabled}>Login</button>
    </form>
  );
}
