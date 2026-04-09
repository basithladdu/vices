import { Link, useLocation } from 'react-router-dom'
import { FaCompass, FaPlus, FaUser, FaStream, FaBars, FaTimes, FaInfoCircle } from 'react-icons/fa'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { path: '/feed', label: 'Feed', icon: FaStream },
  { path: '/explore', label: 'Explore', icon: FaCompass },
  { path: '/log', label: 'Log', icon: FaPlus, isAction: true },
  { path: '/profile', label: 'Profile', icon: FaUser },
  { path: '/about', label: 'About', icon: FaInfoCircle },
]

const Navbar = () => {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-vice-bg/80 backdrop-blur-lg border-b border-vice-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-8 h-8 bg-vice-accent flex items-center justify-center hover:scale-110 transition-transform">
              <span className="text-white text-sm font-bold">✕</span>
            </div>
            <span className="text-heading-sm text-vice-text tracking-widest">VICES</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-body-sm transition-all flex items-center gap-2 pb-0.5 ${
                    item.isAction
                      ? 'btn-vice-primary'
                      : isActive
                      ? 'text-vice-accent border-b-2 border-vice-accent'
                      : 'text-vice-text-muted hover:text-vice-text hover:border-b-2 hover:border-vice-accent'
                  }`}
                >
                  <item.icon className="text-xs" />
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-vice-text hover:text-vice-accent transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-vice-border overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-3 bg-vice-bg">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`text-body-md flex items-center gap-3 py-2 px-2 border-l-2 transition-all ${
                        item.isAction
                          ? 'border-vice-accent text-vice-accent'
                          : isActive
                          ? 'border-vice-accent text-vice-accent'
                          : 'border-transparent text-vice-text-muted hover:text-vice-text'
                      }`}
                    >
                      <item.icon className="text-lg" />
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-vice-bg/95 backdrop-blur-lg border-t border-vice-border">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center gap-1 py-2 px-2 rounded transition-all ${
                  item.isAction
                    ? 'text-white'
                    : isActive
                    ? 'text-vice-accent'
                    : 'text-vice-muted'
                }`}
              >
                {item.isAction ? (
                  <div className="w-9 h-9 bg-vice-accent rounded flex items-center justify-center -mt-3 shadow-lg shadow-vice-accent/40">
                    <item.icon className="text-white text-sm" />
                  </div>
                ) : (
                  <item.icon className="text-lg" />
                )}
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Navbar
