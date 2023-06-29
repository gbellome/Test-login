import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Theme from './config/themes.config'
import Login from './pages/login/login.test'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Login login />
    </ThemeProvider>
  )
}

export default App
