import { Navigate } from "react-router-dom";

export const PublicAuth = ({ children, redirectTo }) => {
  const token = localStorage.getItem("token");
  return !token ? children : <Navigate to={redirectTo} />;
};

export const RequireAuth = ({ children, redirectTo }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to={redirectTo} />;
};
