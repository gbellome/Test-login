import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAuth()

  if (userLoading) return <h1>Cargando...</h1>

  if (!user) return <Navigate to="/SignIn" />

  return <>{children}</>
}

export default ProtectedRoute
