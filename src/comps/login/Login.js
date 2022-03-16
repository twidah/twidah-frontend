import React, { useState } from "react";

const loginFormState = {
  username: "",
  password: "",
};

export default function LoginForm() {
  const [login, setLogin] = useState(loginFormState);

  const change = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  return (
    <form>
      <label htmlFor="username">
        {""}
        Username
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={login.username}
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
          value={login.password}
          onChange={change}
        />
      </label>
      {/* <button onClick={}>Login</button> */}
    </form>
  );
}
