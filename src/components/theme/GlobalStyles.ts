import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: graphik,arial,helvetica,sans-serif;
    font-size: 100%;
    line-height: 1.5;
    color: #03031a;

    background: rgb(244,150,33);
    background: linear-gradient(
      0deg, 
      rgba(244,150,33,1) 7%,
      rgba(253,245,80,0.6376569978483431) 97%
    );
  }
`;
