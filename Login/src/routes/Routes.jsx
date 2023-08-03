import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/login/login'
import Home from '../pages/home/home.test'
import ProtectedRoute from '../routes/ProtectedRoute.routes'
import Config from '../pages/configuration/config'

const RoutesMaster = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Navigate to="/Inicio" />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Inicio"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
        index
      />
      <Route
        path="/Configuracion"
        element={
          <ProtectedRoute>
            <Config />
          </ProtectedRoute>
        }
      />
      <Route path="/Ingresar" element={<Login />} />
      <Route path="/RecuperarClave" element={<Login />} />
      <Route path="/Registrar" element={<Login />} />
    </Routes>
  )
}

export default RoutesMaster
