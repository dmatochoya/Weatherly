import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
      box-sizing: border-box;
    }

    * {
      margin: 0;
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
