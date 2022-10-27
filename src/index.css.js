import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme from './utils/theme';
import indicator from './assets/images/loading_indicator.svg';

export const GlobalStyles = createGlobalStyle`

  ${normalize}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::selection {
    color: #fff;
    background-color: ${theme.colors.primary};
  }

  html {
    font-family: 'Open Sans', sans-serif;
    font-size: ${theme.fontSize.default};
    scroll-behavior: smooth;
  }
`;

export const LoadingIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #393939;
  background-image: url(${indicator});
  background-position: center;
  background-size: 25%;
  background-repeat: no-repeat;
  z-index: 100;
`;

export const Main = styled.main`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;
