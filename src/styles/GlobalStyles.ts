import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:  'Roboto','Open Sans', sans-serif;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    html,
    body,
    #__next {
      height: 100%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.body};

      background-color: ${theme.colors.black.primary};
      color: ${theme.colors.gray};

      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #02030a;
      }
      ::-webkit-scrollbar-thumb {
        background: #bebebe;
        border-radius: 10px;
      }
    }
  `}

 


`;

export default GlobalStyles;
