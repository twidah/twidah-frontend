import React from "react";
import styled from "styled-components";

const Logout = () => {
  return (
    <LogoutStyle>
      <h2> Thank you for visiting TWITCO ฿!</h2>
    </LogoutStyle>
  );
};

const LogoutStyle = styled.div`
  margin-top: 15%;
  display: flex;
  justify-content: center;
`;

export default Logout;
