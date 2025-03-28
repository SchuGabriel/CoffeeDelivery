import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
    line-height: 130%;
  }

  body{
    background-color: ${props => props.theme.background};
    color: ${props => props.theme['base-text']};
  }
`;
