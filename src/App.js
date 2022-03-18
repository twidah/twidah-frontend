import "./App.css";
import LoginForm from "./comps/login/Login";
import RegisterForm from "./comps/register/Register";
import Header from "./comps/Header";
import { Route, Routes } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/signup" element={<LoginForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
