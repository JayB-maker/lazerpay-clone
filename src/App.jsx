import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import AppRoutes from './AppRoutes'
import { Dark, GlobalStyle, Light } from './Theme'

const App = () => {
    const [isDarkmode, setIsDarkMode] = useState(false)

    const toggle = () => {
        setIsDarkMode(!isDarkmode);
    }

  return (
    <>
    <ThemeProvider theme={ isDarkmode ? Dark : Light }>
        <GlobalStyle />
        <AppRoutes />
    </ThemeProvider>
        
    </>
  )
}

export default App