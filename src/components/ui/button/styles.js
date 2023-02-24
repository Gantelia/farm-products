import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  padding: 17px 24px 16px;
  border: none;
  color: #ffffff;
  background-color: ${({ theme }) => theme.buttonColor};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: 700;
  line-height: ${({ theme }) => theme.lineHeight};
  min-width: ${(props) => (props.$isMaxWidth ? "100%" : "260px")};
  max-width: 700px;
  background-image: none;
  text-decoration: none;
  text-align: center;
  box-shadow: none;
  transition: background-color 0.3s ease-out, box-shadow 0.3s ease-out;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverActiveColor};
    box-shadow: inset 0 4px 0 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    background-color: ${({ theme }) => theme.buttonHoverActiveColor};
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;

export default StyledButton;
