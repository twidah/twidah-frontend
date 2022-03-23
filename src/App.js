import "./App.css";
import React, { useState, useEffect } from "react";
import LoginForm from "./comps/login/Login";
import SignUp from "./comps/signup/SignUp";
import Header from "./comps/Header";
import Logout from "./comps/logout/Logout";
import { Dash } from "./comps/dash/Dash";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./comps/RequireAuth";

function App() {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token");
    if (isLoggedIn) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);
  return (
    <div>
      <Header logged={logged} />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth redirectTo="/login">
              <Dash />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<SignUp setLogged={setLogged} />} />
        <Route path="/login" element={<LoginForm setLogged={setLogged} />} />
        <Route
          path="/logout"
          element={
            <RequireAuth redirectTo="/login">
              <Logout setLogged={setLogged} />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
