import "./App.css";
import LoginForm from "./comps/login/Login";
import RegisterForm from "./comps/register/Register";
import Header from "./comps/Header";
import Logout from "./comps/logout/Logout";
import { Main } from "./comps/main/Main";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./comps/RequireAuth";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/main"
          element={
            <RequireAuth redirectTo="/login">
              <Main />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/logout"
          element={
            <RequireAuth redirectTo="/login">
              <Logout />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
