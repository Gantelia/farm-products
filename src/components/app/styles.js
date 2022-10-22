import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  #root {
    height: 100%;
  }

  body {
    position: relative;
    margin: 0 auto;
    height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSize};
    font-weight: 400;
    line-height: ${(props) => props.theme.lineHeight};
    color: ${(props) => props.theme.basicTextColor};
    background-color: #ffffff;
    width: ${(props) => props.theme.pageWidth};
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }
`;
