import React, { useState } from "react";

const initialFormState = {
  username: "",
  email: "",
  password: "",
  verifyPassword: "",
};

export default function RegisterForm() {
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
          value={form.username}
          onChange={change}
        />
      </label>
      <label htmlFor="email">
        {""}
        Email
        <input type="email" name="email" value={form.email} onChange={change} />
      </label>
      <label htmlFor="password">
        {""}
        Password
        <input type="password" name="password" onChange={change} />
      </label>
      <label htmlFor="password">
        {""}
        Verify Password
        <input type="password" name="verifyPassword" onChange={change} />
      </label>
      {/* <button onClick={}>Submit</button> */}
    </form>
  );
}
