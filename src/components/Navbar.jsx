import { Link, useLocation } from 'react-router-dom'
import { FaFire, FaCompass, FaPlus, FaUser, FaStream, FaBars, FaTimes, FaInfoCircle } from 'react-icons/fa'
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
      {/* Desktop / Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-vice-bg/80 backdrop-blur-xl border-b border-vice-border">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <FaFire className="text-vice-accent text-lg group-hover:scale-110 transition-transform" />
            <span className="text-lg font-bold tracking-tight text-white">
              Vices
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    item.isAction
                      ? 'bg-vice-accent text-white hover:bg-vice-accent-dim ml-2'
                      : isActive
                      ? 'text-white bg-white/5'
                      : 'text-vice-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon className="text-xs" />
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-vice-muted hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-vice-border overflow-hidden"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-3 transition-all ${
                        item.isAction
                          ? 'bg-vice-accent text-white'
                          : isActive
                          ? 'text-white bg-white/5'
                          : 'text-vice-muted hover:text-white'
                      }`}
                    >
                      <item.icon />
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Bottom nav (mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-vice-bg/90 backdrop-blur-xl border-t border-vice-border">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
                  item.isAction
                    ? 'text-white'
                    : isActive
                    ? 'text-white'
                    : 'text-vice-muted'
                }`}
              >
                {item.isAction ? (
                  <div className="w-10 h-10 bg-vice-accent rounded-full flex items-center justify-center -mt-4 shadow-lg shadow-vice-accent/30">
                    <item.icon className="text-white text-sm" />
                  </div>
                ) : (
                  <item.icon className={`text-lg ${isActive ? 'text-vice-accent' : ''}`} />
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
