import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-vice-bg flex items-center justify-center">
        <div className="text-vice-text text-center">
          <div className="inline-block">
            <div className="w-12 h-12 bg-vice-accent/20 rounded-full animate-pulse" />
          </div>
          <p className="mt-4 text-body-md text-vice-text-muted">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
