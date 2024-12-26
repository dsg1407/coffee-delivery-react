import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: ${(props) => props.theme.fonts.height.TEXT}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Baloo 2", sans-serf;
  }
`
