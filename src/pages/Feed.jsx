import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import { motion } from 'framer-motion'
import LogCard from '../components/LogCard'
import { getSubstanceById } from '../data/substances'
import Footer from '../components/Footer'

const DEMO_LOGS = [
  {
    id: 'demo-1',
    substance_id: 'marlboro-gold',
    timestamp: '2026-04-08T22:30:00Z',
    caption: 'Smoked after 3 years on the hostel terrace. Stars were out. Arjun was talking about dropping out.',
    mood: 'nostalgic',
    rating: 4,
    location: { name: 'Manali, HP' },
    friends_tagged: ['Arjun', 'Rahul'],
    visibility: 'public',
    media: [],
  },
  {
    id: 'demo-2',
    substance_id: 'heineken-original',
    timestamp: '2026-03-22T19:00:00Z',
    caption: 'Met a random German dude at the bar in Amsterdam. We talked about philosophy for 4 hours.',
    mood: 'social',
    rating: 5,
    location: { name: 'Amsterdam, NL' },
    friends_tagged: [],
    visibility: 'public',
    media: [],
  },
  {
    id: 'demo-3',
    substance_id: 'og-kush',
    timestamp: '2026-02-14T23:00:00Z',
    caption: 'Valentine\'s alone. Put on Dark Side of the Moon. Understood the universe for a split second.',
    mood: 'peaceful',
    rating: 5,
    location: { name: 'Bedroom' },
    friends_tagged: [],
    visibility: 'private',
    media: [],
  },
  {
    id: 'demo-4',
    substance_id: 'jack-daniels-7',
    timestamp: '2026-01-01T00:30:00Z',
    caption: 'New Year\'s with the squad. Old Monk and Thumbs Up like we\'re 19 again.',
    mood: 'high-energy',
    rating: 4,
    location: { name: 'Delhi, India' },
    friends_tagged: ['Vikram', 'Priya', 'Anil'],
    visibility: 'public',
    media: [],
  },
  {
    id: 'demo-5',
    substance_id: 'lsd-blotter',
    timestamp: '2025-12-20T16:00:00Z',
    caption: 'First time. The trees were breathing. I cried and it felt like a reset button.',
    mood: 'creative',
    rating: 5,
    location: { name: 'Kodaikanal, TN' },
    friends_tagged: ['Meera'],
    visibility: 'private',
    media: [],
  },
]

const Feed = () => {
  const [logs, setLogs] = useState(() => {
    return JSON.parse(localStorage.getItem('vices_logs') || '[]')
  })
  const [showDemo, setShowDemo] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('vices_logs') || '[]')
    return saved.length === 0
  })

  useEffect(() => {
    const handleStorage = () => {
      const saved = JSON.parse(localStorage.getItem('vices_logs') || '[]')
      setLogs(saved)
      setShowDemo(saved.length === 0)
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const displayLogs = showDemo ? DEMO_LOGS : logs

  return (
    <div className="min-h-screen bg-vice-bg pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-baseline justify-between gap-8">
            <div>
              <h1 className="text-display-md text-vice-text">Your Moments</h1>
              <p className="text-body-md text-vice-text-muted mt-2">
                {showDemo ? 'Explore examples — create your own archive' : `${logs.length} moment${logs.length !== 1 ? 's' : ''} recorded`}
              </p>
            </div>

            <Link
              to="/log"
              className="btn-vice-primary flex items-center gap-2"
            >
              <FaPlus className="text-xs" /> Log
            </Link>
          </div>

          {showDemo && (
            <div className="mt-6 border-l-2 border-vice-accent pl-4">
              <p className="text-vice-accent text-body-md font-medium">
                Sample moments
              </p>
              <p className="text-vice-text-muted text-body-sm mt-1">
                Log your first moment to begin.
              </p>
            </div>
          )}
        </motion.div>

        {/* Magazine-style Grid */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {displayLogs.map((log, idx) => {
            const substance = getSubstanceById(log.substance_id)
            if (!substance) return null

            // Alternating wider/narrower columns for asymmetrical layout
            const isWide = idx % 3 !== 2

            return (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`${isWide ? 'md:col-span-2' : ''}`}
              >
                <LogCard log={log} substance={substance} />
              </motion.div>
            )
          })}
        </div>

        {!showDemo && logs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <h2 className="text-heading-lg text-vice-text mb-3">No moments yet</h2>
            <p className="text-body-md text-vice-text-muted mb-8">
              Your archive begins with a single moment. What's your first?
            </p>
            <Link
              to="/log"
              className="btn-vice-primary inline-block"
            >
              Log Your First Moment
            </Link>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Feed
