import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/login/login'
import Home from '../pages/home/home.test'
import CargoShip from '../utils/Animation/CargoShip'
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
        index
      />
      <Route path="/" element={<CargoShip />} />
      <Route path="/SignIn" element={<Login />} />
      <Route path="/Recovery" element={<Login />} />
      <Route path="/SignUp" element={<Login />} />
    </Routes>
  )
}

export default RoutesMaster
