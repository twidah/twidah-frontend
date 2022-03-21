import { Navigate } from "react-router-dom";
import Login from "./login/Login";

export const RequireAuth = ({ children, redirectTo }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to={redirectTo} />;
};
