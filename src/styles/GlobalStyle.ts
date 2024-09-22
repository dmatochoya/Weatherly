import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
      box-sizing: border-box;
    }

    * {
      margin: 0;
    }

    html {
      font-size: clamp(8px, calc(8px + 0.6vw), 16px)
    }

    body {
      font-family: ${({ theme }) => theme.fontFamily.main};
      background-color: ${({ theme }) => theme.colors.background};
    }

    button {
      border: none;
      cursor: pointer;
    }
`;

export default GlobalStyle;
