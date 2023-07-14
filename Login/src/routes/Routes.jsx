import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/login/login.test'
import Home from '../pages/home/home.test'
import ProtectedRoute from '../routes/ProtectedRoute.routes'

const RoutesMaster = () => {
  return (
    <Routes>
      <Route
        path="/Home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/SignIn" element={<Login />} />
      <Route path="/Recovery" element={<Login />} />
      <Route path="/SignUp" element={<Login />} />
    </Routes>
  )
}

export default RoutesMaster
