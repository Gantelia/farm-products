import React from "react";

import { AppRoute } from "../../../const.js";
import { ReactComponent as LogoImage } from "../../../assets/svg/logo.cmp.svg";
import { StyledLogo, LogoText } from "./styles.js";

function Logo() {
  return (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage role="img" />
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogo>
  );
}

export default Logo;
