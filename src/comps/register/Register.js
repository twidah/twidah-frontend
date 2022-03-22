import React, { useState } from "react";

const initialFormState = {
  username: "",
  email: "",
  password: "",
  verifyPassword: "",
};

export default function RegisterForm({ setLogged }) {
  const [form, setForm] = useState(initialFormState);

  const change = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form>
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
      {/* <button onClick={}></button> */}
    </form>
  );
}
