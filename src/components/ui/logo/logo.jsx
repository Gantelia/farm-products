import React from 'react';

import { StyledLogo, LogoText } from "./styles.js";
import { ReactComponent as LogoImage } from  "../../../assets/logo.cmp.svg";

console.log(LogoImage);
function Logo() {
  return (
    <StyledLogo href="/">
      <LogoImage role="img" />
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogo>
  );
}

export default Logo;
