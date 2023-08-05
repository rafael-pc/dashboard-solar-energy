import { createGlobalStyle } from 'styled-components'
import { theme } from './'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  html {
    font-size: ${theme.font.sizes.xxxs};
    line-height: 24px;
  }
  
  body {
    background: ${theme.colors.neutral_300};
    color: ${theme.colors.dark};
  }

  body, textarea {
    font-family: ${theme.font.family.primary};
  }

  input {
    font-family: ${theme.font.family.secondary};
  }

  input[type="checkbox"] {
    cursor: pointer;
  }
  
  button{
    font-family: ${theme.font.family.button};
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  table {
	  border-collapse: collapse;
	  border-spacing: 0;
  } 
`