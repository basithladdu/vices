import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'
import Footer from '../components/Footer'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    // Validation
    if (password !== passwordConfirm) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      await signup(email, password, displayName)
      navigate('/feed')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-vice-bg flex items-center justify-center pt-20 pb-12">
      <motion.div
        className="max-w-md w-full mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-vice-accent flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-lg font-bold">✕</span>
          </div>
          <h1 className="text-display-md text-vice-text">Create Account</h1>
          <p className="text-body-md text-vice-text-muted mt-3">
            Join Vices and start logging
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          {error && (
            <div className="p-4 bg-vice-accent/10 border border-vice-accent text-vice-accent text-body-sm">
              {error}
            </div>
          )}

          <div>
            <label className="text-body-md text-vice-text block mb-2">Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-3 bg-vice-card border border-vice-border text-vice-text text-body-md placeholder:text-vice-muted focus:outline-none focus:border-vice-accent focus:ring-1 focus:ring-vice-accent/20 transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-body-md text-vice-text block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-vice-card border border-vice-border text-vice-text text-body-md placeholder:text-vice-muted focus:outline-none focus:border-vice-accent focus:ring-1 focus:ring-vice-accent/20 transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-body-md text-vice-text block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-vice-card border border-vice-border text-vice-text text-body-md placeholder:text-vice-muted focus:outline-none focus:border-vice-accent focus:ring-1 focus:ring-vice-accent/20 transition-all"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="text-body-md text-vice-text block mb-2">Confirm Password</label>
            <input
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
              className="w-full px-4 py-3 bg-vice-card border border-vice-border text-vice-text text-body-md placeholder:text-vice-muted focus:outline-none focus:border-vice-accent focus:ring-1 focus:ring-vice-accent/20 transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-vice-accent text-white text-body-md font-medium hover:bg-vice-accent-light disabled:opacity-50 transition-all flex items-center justify-center gap-2"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
            {!loading && <FaArrowRight className="text-xs" />}
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-body-md text-vice-text-muted mb-3">
            Already have an account?
          </p>
          <Link
            to="/login"
            className="btn-vice-primary inline-block"
          >
            Sign In
          </Link>
        </div>

        {/* Legal */}
        <div className="mt-12 p-4 border border-vice-border text-body-sm text-vice-text-muted">
          By creating an account, you agree to Vices' terms. This is a personal journal tool.
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}

export default Signup
