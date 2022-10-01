import { StyledLogo, LogoText } from "./styles.js";
import { ReactComponent as LogoImage } from "../../../assets/logo.svg";

function Logo() {
  return (
    <StyledLogo href="/">
      <LogoImage role="img" />
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogo>
  );
}

export default Logo;
