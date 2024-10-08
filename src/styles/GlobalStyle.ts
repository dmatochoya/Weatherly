import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  #root, html, body { height: 100%; }

  html {
    font-size: clamp(10px, calc(8px + 0.6vw), 14px);
  }
  
  body {
    font-family: ${({ theme }) => theme.fontFamily.main};
    background-color: ${({ theme }) => theme.colors.background};
  }

  button {
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyle;
