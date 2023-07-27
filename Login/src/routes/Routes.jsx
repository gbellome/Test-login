import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/login/login'
import Home from '../pages/home/home.test'
import ProtectedRoute from '../routes/ProtectedRoute.routes'

const RoutesMaster = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Navigate to="/Home" />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
        index
      />
      <Route path="/SignIn" element={<Login />} />
      <Route path="/Recovery" element={<Login />} />
      <Route path="/SignUp" element={<Login />} />
    </Routes>
  )
}

export default RoutesMaster
