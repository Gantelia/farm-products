import React from "react";

import Logo from "../../ui/logo/logo";
import { Copyright, StyledFooter } from "./styles.js";

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <Copyright>Создано 2021</Copyright>
    </StyledFooter>
  );
}

export default Footer;
