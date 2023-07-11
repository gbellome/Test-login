import { createContext, useContext } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase.config'

export const authContext = createContext()

export const useAuth = () => {
  return useContext(authContext)
}

export const AuthProvider = ({ children }) => {
  const signUp = (user, password) =>
    createUserWithEmailAndPassword(auth, user, password)

  return (
    <authContext.Provider value={{ signUp }}>{children}</authContext.Provider>
  )
}
