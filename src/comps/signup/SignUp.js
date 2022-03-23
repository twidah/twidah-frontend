import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

const initialDisabled = true;

export default function SignUp({ setLogged }) {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorState);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [fetchErrors, setFetchErrors] = useState("");

  const validate = (name, value) => {
    yup
      .reach(signupSchema, name)
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
      .catch((err) => setFetchErrors(err));
  };

  useEffect(() => {
    signupSchema.isValid(form).then((valid) => setDisabled(!valid));
  }, [form]);

  return (
    <form onSubmit={submit}>
      <span>{fetchErrors}</span>
      <span>{errors.username}</span>
      <br />
      <span>{errors.email}</span>
      <br />
      <span>{errors.password}</span>
      <br />
      <label htmlFor="username">
        {" "}
        Username
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={form.username}
          onChange={change}
        />
      </label>
      <br />
      <label htmlFor="email">
        {""}
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
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
          placeholder="Enter your password"
          value={form.password}
          onChange={change}
        />
      </label>
      <br />
      <button
        disabled={disabled}
        style={{
          cursor: "pointer",
          marginLeft: "5px",
          fontSize: "18px",
          backgroundColor: "#69db7c",
          color: "white",
        }}
        type="submit"
      >
        Sign up!
      </button>
    </form>
  );
}
