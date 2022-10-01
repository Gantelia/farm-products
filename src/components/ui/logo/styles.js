import styled from "styled-components";

export const StyledLogo = styled.a`
  min-height: 44px;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const LogoText = styled.span`
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  color: ${(props) => props.theme.basicTextColor};
  margin-left: 24px;
`;
