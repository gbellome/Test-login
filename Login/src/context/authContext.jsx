import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import { auth } from '../config/firebase.config'

const authContext = createContext()

export const useAuth = () => useContext(authContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [userLoading, setUserLoading] = useState(true)

  const signUp = (user, password) =>
    createUserWithEmailAndPassword(auth, user, password)

  const signIn = (user, password) =>
    signInWithEmailAndPassword(auth, user, password)

  const logOut = () => signOut(auth)

  useEffect(() => {
    const unSubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setUserLoading(false)
    })

    return () => unSubuscribe()
  }, [])

  return (
    <authContext.Provider value={{ signUp, signIn, logOut, user, userLoading }}>
      {children}
    </authContext.Provider>
  )
}
