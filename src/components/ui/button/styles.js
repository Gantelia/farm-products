import styled from 'styled-components';

const StyledButton = styled.a`
  padding: 17px 24px 16px;
  display: block;
  border: none;
  color: #ffffff;
  background-color: ${(props) => props.theme.buttonColor};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: 700;
  line-height: ${(props) => props.theme.lineHeight};
  min-width: ${(props) => (props.$maxWidth ? '100%' : '260px')};
  max-width: 700px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.buttonHoverActiveColor};
    box-shadow: inset 0 4px 0 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    background-color: ${(props) => props.theme.buttonHoverActiveColor};
    box-shadow: none;
  }
`;

export default StyledButton;
