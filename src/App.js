import "./App.css";
import LoginForm from "./comps/login/Login";
import RegisterForm from "./comps/register/Register";
import Header from "./comps/Header";
import { Route, Routes } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/"></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
