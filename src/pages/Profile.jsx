import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFire, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaPlus } from 'react-icons/fa'
import { getSubstanceById, TYPE_META, MOODS } from '../data/substances'
import LogCard from '../components/LogCard'
import Footer from '../components/Footer'

const Profile = () => {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('vices_logs') || '[]')
    setLogs(saved)
  }, [])

  // Stats
  const stats = useMemo(() => {
    if (logs.length === 0) return null

    const typeCounts = {}
    const substanceCounts = {}
    const moodCounts = {}
    const locationCounts = {}
    let totalRating = 0
    let ratedCount = 0

    logs.forEach((log) => {
      const s = getSubstanceById(log.substance_id)
      if (s) {
        typeCounts[s.type] = (typeCounts[s.type] || 0) + 1
        substanceCounts[s.name] = (substanceCounts[s.name] || 0) + 1
      }
      if (log.mood) moodCounts[log.mood] = (moodCounts[log.mood] || 0) + 1
      if (log.location?.name) locationCounts[log.location.name] = (locationCounts[log.location.name] || 0) + 1
      if (log.rating) { totalRating += log.rating; ratedCount++ }
    })

    const topSubstance = Object.entries(substanceCounts).sort((a, b) => b[1] - a[1])[0]
    const topMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0]
    const topLocation = Object.entries(locationCounts).sort((a, b) => b[1] - a[1])[0]

    return {
      total: logs.length,
      typeCounts,
      topSubstance: topSubstance ? topSubstance[0] : null,
      topMood: topMood ? MOODS.find((m) => m.id === topMood[0]) : null,
      topLocation: topLocation ? topLocation[0] : null,
      avgRating: ratedCount > 0 ? (totalRating / ratedCount).toFixed(1) : null,
    }
  }, [logs])

  return (
    <div className="min-h-screen bg-vice-bg pt-20 pb-24">
      <div className="max-w-2xl mx-auto px-4">
        {/* Profile header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-full bg-vice-card border-2 border-vice-accent/30 flex items-center justify-center text-3xl mx-auto mb-4">
            <FaFire className="text-vice-accent" />
          </div>
          <h1 className="text-2xl font-bold text-white">Your Archive</h1>
          <p className="text-vice-muted text-sm mt-1 italic font-[family-name:var(--font-vice-serif)]">
            "What is a vice if it doesn't consume you"
          </p>
        </div>

        {/* Stats */}
        {stats ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              <div className="p-4 bg-vice-card border border-vice-border rounded-xl text-center">
                <p className="text-2xl font-bold text-white">{stats.total}</p>
                <p className="text-vice-muted text-[10px] uppercase tracking-wider mt-1">Moments</p>
              </div>
              {stats.topSubstance && (
                <div className="p-4 bg-vice-card border border-vice-border rounded-xl text-center">
                  <p className="text-sm font-bold text-white truncate">{stats.topSubstance}</p>
                  <p className="text-vice-muted text-[10px] uppercase tracking-wider mt-1">Most Logged</p>
                </div>
              )}
              {stats.topMood && (
                <div className="p-4 bg-vice-card border border-vice-border rounded-xl text-center">
                  <p className="text-lg">{stats.topMood.emoji}</p>
                  <p className="text-vice-muted text-[10px] uppercase tracking-wider mt-1">{stats.topMood.label}</p>
                </div>
              )}
              {stats.avgRating && (
                <div className="p-4 bg-vice-card border border-vice-border rounded-xl text-center">
                  <p className="text-2xl font-bold text-vice-gold flex items-center justify-center gap-1">
                    {stats.avgRating} <FaStar size={12} />
                  </p>
                  <p className="text-vice-muted text-[10px] uppercase tracking-wider mt-1">Avg Rating</p>
                </div>
              )}
            </div>

            {/* Substance Identity (type breakdown) */}
            <div className="bg-vice-card border border-vice-border rounded-xl p-5 mb-8">
              <h3 className="text-white font-semibold text-sm mb-4">Your Substance Identity</h3>
              <div className="space-y-3">
                {Object.entries(stats.typeCounts)
                  .sort((a, b) => b[1] - a[1])
                  .map(([type, count]) => {
                    const meta = TYPE_META[type]
                    const pct = Math.round((count / stats.total) * 100)
                    return (
                      <div key={type}>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-vice-text flex items-center gap-1.5">
                            {meta?.icon} {meta?.label}
                          </span>
                          <span className="text-vice-muted">{count} ({pct}%)</span>
                        </div>
                        <div className="w-full h-1.5 bg-vice-border rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.8 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: meta?.color }}
                          />
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>

            {/* Recent logs */}
            <h3 className="text-white font-semibold text-sm mb-4">Recent Moments</h3>
            <div className="space-y-3">
              {logs.slice(0, 10).map((log) => {
                const substance = getSubstanceById(log.substance_id)
                if (!substance) return null
                return <LogCard key={log.id} log={log} substance={substance} />
              })}
            </div>
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <p className="text-vice-muted text-lg mb-2">No moments yet</p>
            <p className="text-vice-muted/50 text-sm mb-6">
              Start logging to build your personal substance identity.
            </p>
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

export default Profile
