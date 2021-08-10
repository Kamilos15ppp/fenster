import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme from "./utils/theme";

export const GlobalStyles = createGlobalStyle`
  
  ${normalize}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    font-size: ${theme.fontSize};
    min-height: 200vh;
  }
  
`;
