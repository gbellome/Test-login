import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import Theme from './config/themes.config'
import Login from './pages/login/login.test'
import Home from './pages/home/home.test'
import { AuthProvider } from './context/userContext/authContext'

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Login"
            element={<Login login={true} recovery={false} signin={false} />}
          />
          <Route
            path="/Recovery"
            element={<Login login={false} recovery={true} signin={false} />}
          />
          <Route
            path="/SignIn"
            element={<Login login={false} recovery={false} signin={true} />}
          />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
