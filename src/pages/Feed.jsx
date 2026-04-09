import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus, FaFire } from 'react-icons/fa'
import LogCard from '../components/LogCard'
import { getSubstanceById } from '../data/substances'
import Footer from '../components/Footer'

// Demo logs to show when user has no logs yet
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

  // We could still use useEffect for synchronization if needed, 
  // but for initial load, initializer is better.
  useEffect(() => {
    // Synchronize if other tabs change local storage
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
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Feed</h1>
            <p className="text-vice-muted text-sm">
              {showDemo ? 'Example moments — start logging yours' : `${logs.length} moment${logs.length !== 1 ? 's' : ''} logged`}
            </p>
          </div>

          <Link
            to="/log"
            className="flex items-center gap-2 px-4 py-2 bg-vice-accent text-white rounded-xl text-sm font-medium hover:bg-vice-accent-dim transition-all"
          >
            <FaPlus size={10} /> Log
          </Link>
        </div>

        {showDemo && (
          <div className="mb-6 p-4 bg-vice-accent/5 border border-vice-accent/20 rounded-xl">
            <p className="text-vice-accent text-sm font-medium flex items-center gap-2">
              <FaFire size={12} /> These are example logs
            </p>
            <p className="text-vice-muted text-xs mt-1">
              Log your first moment to start building your personal archive.
            </p>
          </div>
        )}

        {/* Logs */}
        <div className="grid grid-cols-1 gap-4">
          {displayLogs.map((log) => {
            const substance = getSubstanceById(log.substance_id)
            if (!substance) return null
            return (
              <LogCard key={log.id} log={log} substance={substance} />
            )
          })}
        </div>

        {!showDemo && logs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-vice-muted text-lg mb-2">No moments yet</p>
            <p className="text-vice-muted/50 text-sm mb-6">Your story starts with the first log.</p>
            <Link
              to="/log"
              className="inline-flex items-center gap-2 px-6 py-3 bg-vice-accent text-white rounded-xl text-sm font-semibold"
            >
              <FaPlus size={10} /> Log Your First Moment
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Feed
