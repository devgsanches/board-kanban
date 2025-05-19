import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
  type UserCredential,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../../services'
import { AuthContext } from './useAuth'

export interface AuthContextType {
  currentUser: User | null
  login: (email: string, password: string) => Promise<UserCredential>
  register: (email: string, password: string) => Promise<UserCredential>
  logOut: () => Promise<void>
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const login = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return await signInWithEmailAndPassword(auth, email, password)
  }

  const register = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  const logOut = async (): Promise<void> => {
    await signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  })

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logOut }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
