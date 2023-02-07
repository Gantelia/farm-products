import styled from "styled-components";

const StyledButton = styled.a`
  padding: 17px 24px 16px;
  display: block;
  border: none;
  color: #ffffff;
  background-color: ${({ theme }) => theme.buttonColor};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: 700;
  line-height: ${({ theme }) => theme.lineHeight};
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  max-width: 700px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease-out, box-shadow 0.3s ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverActiveColor};
    box-shadow: inset 0 4px 0 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    background-color: ${({ theme }) => theme.buttonHoverActiveColor};
    box-shadow: none;
  }
`;

export default StyledButton;
