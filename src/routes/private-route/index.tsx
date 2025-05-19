import { Navigate } from 'react-router'
import { useAuth } from '../../contexts/auth/useAuth'

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useAuth()

  if (!currentUser) {
    return <Navigate to="/auth/login" />
  }

  return children
}
