import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <MainHeader>
      <H1Header>My Agora States</H1Header>
    </MainHeader>
  );
}
const MainHeader = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1Header = styled.div`
  font-weight: bolder;
  color: white;
  font-size: 50px;
`;
export default Header;
