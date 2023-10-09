// import { Global, css } from '@emotion/react'
import { createGlobalStyle } from 'styled-components'
import { reset } from './reset'
import { themes } from './themeVariables'
const GlobalStyle = createGlobalStyle`
  ${reset}

  html,
  body {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${themes.light}
  }
  body[data-theme='light'] {
    ${themes.light};
  }

  body[data-theme='dark'] {
    ${themes.dark};
  }
`

export default GlobalStyle
