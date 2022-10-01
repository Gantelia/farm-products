import React from 'react';

import { StyledHeader } from "./styles.js";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export default Header;
