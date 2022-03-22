import "./App.css";
import React, { useState, useEffect } from "react";
import LoginForm from "./comps/login/Login";
import RegisterForm from "./comps/register/Register";
import Header from "./comps/Header";
import Logout from "./comps/logout/Logout";
import { Main } from "./comps/main/Main";
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
          path="/main"
          element={
            <RequireAuth redirectTo="/login">
              <Main />
            </RequireAuth>
          }
        />
        <Route
          path="/register"
          element={<RegisterForm setLogged={setLogged} />}
        />
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
