import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

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
    font-size: 16px;
    line-height: 24px;
  }
  
  body {
    background: ${theme.colors.neutral_300};
    color: ${theme.colors.dark};
  }

  body, textarea, button {
    font-family: ${theme.font.family};
  }

  input {
    font-family: ${theme.font.input};
  }
  
  button{
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