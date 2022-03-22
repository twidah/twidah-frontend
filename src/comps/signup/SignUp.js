import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialFormState = {
  username: "",
  email: "",
  password: "",
  verifyPassword: "",
};

export default function SignUp({ setLogged }) {
  const [form, setForm] = useState(initialFormState);

  const change = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  let navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (form.password !== form.verifyPassword) {
      // May need to do a better response, maybe with state?
      window.alert("Make sure the passwords match!");
    } else {
      const obj = {
        username: form.username,
        email: form.email,
        password: form.password,
      };
      axios
        .post("http://localhost:4000/api/auth/register", obj)
        .then((res) => {
          localStorage.setItem("token", `Bearer ${res.data.token}`);
          setLogged(true);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={submit}>
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
      <label htmlFor="password">
        {""}
        Verify Password
        <input
          type="password"
          name="verifyPassword"
          placeholder="Verify your password"
          value={form.verifyPassword}
          onChange={change}
        />
      </label>
      <button
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
