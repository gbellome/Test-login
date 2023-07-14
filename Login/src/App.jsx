import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Theme from './config/themes.config'
import RoutesMaster from './routes/Routes'
import { AuthProvider } from './context/authContext'

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={Theme}>
        <RoutesMaster />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
