import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  height: 30vh;
  display: flex;
  align-items: end;
  justify-content: center;
`;

const LogoContainer = styled(Link)`
  color: white;
  height: 50%;
  font-size: 4em;
  font-weight: bold;
`;

function Navbar() {
  return (
    <Container>
      <LogoContainer to="/">5 / 3 / 1</LogoContainer>
    </Container>
  );
}

export default Navbar;
