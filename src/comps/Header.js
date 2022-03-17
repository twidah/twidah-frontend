import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      <h1>TWITCO ฿</h1>
      <MenuStyle>
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
      </MenuStyle>
    </HeaderStyle>
  );
};
const HeaderStyle = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-weight: bold;
    font-size: 1.5em;
  }
`;

const MenuStyle = styled.ul`
  li {
    display: inline-block;
    padding: 0.3rem 1rem;
    a {
      text-decoration: none;
      color: black;
      font-size: 1.2em;
      font-weight: bold;
    }
    a:hover {
      color: lightblue;
      text-decoration: underline;
    }
  }
`;

export default Header;
