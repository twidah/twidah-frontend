import React, { useState } from "react";
import axios from "axios";

const loginFormState = {
  usernameOrEmail: "",
  password: "",
};

export default function LoginForm() {
  const [login, setLogin] = useState(loginFormState);

  const change = (e) => {
    const { name, value } = e.target;
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={submit}>
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
      <button>Login</button>
    </form>
  );
}
