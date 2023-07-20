import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
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

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  const loginWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider()
    return signInWithPopup(auth, facebookProvider)
  }

  const resetPassword = (email) => sendPasswordResetEmail(auth, email)

  useEffect(() => {
    const intervalId = setInterval(() => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setUserLoading(false)
      })
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <authContext.Provider
      value={{
        signUp,
        signIn,
        logOut,
        user,
        userLoading,
        loginWithGoogle,
        loginWithFacebook,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  )
}
