import styled from "styled-components";
import Button from "../../ui/button/button.jsx";

export const StyledLink = styled(Button)`
  background-color: ${({ theme }) => theme.colorWhite};
  text-align: end;
  color: ${({ theme }) => theme.basicTextColor};
  padding: 6px 10px;
  min-width: 0;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colorWhite};
    text-decoration: underline;
  }

  &:hover {
    box-shadow: none;
  }
`;
