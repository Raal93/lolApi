import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: aliceblue;
    font-family: graphik,arial,helvetica,sans-serif;
    font-size: 100%;
    line-height: 1.5;
    color: #03031a;
  }
`