import React from 'react'

import { Logo } from './components'
import { injectGlobalStyle } from './utils'

const App: React.FC = () => {
  const GlobalStyle = injectGlobalStyle()

  return (
    <>
      <Logo />
      <GlobalStyle />
    </>
  )
}

export default App
