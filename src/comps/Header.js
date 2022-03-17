import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
    </div>
  );
};

export default Header;
