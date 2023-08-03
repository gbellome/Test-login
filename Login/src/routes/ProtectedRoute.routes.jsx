import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import CargoShip from 'src/utils/Animation/CargoShip'

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAuth()

  if (userLoading) return <CargoShip />

  if (!user) return <Navigate to="/Ingresar" />

  return <>{children}</>
}

export default ProtectedRoute
