import { createContext, useContext } from 'react'

export const authContext = createContext()

export const useAuth = () => {
  return useContext(authContext)
}

export const AuthProvider = ({ children }) => {
  const user = {
    login: true,
  }

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  )
}
