import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaStar, FaPlus } from 'react-icons/fa'
import { getSubstanceById, TYPE_META, MOODS } from '../data/substances'
import LogCard from '../components/LogCard'
import Footer from '../components/Footer'

const Profile = () => {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('vices_logs') || '[]')
    setLogs(saved)
  }, [])

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

    return {
      total: logs.length,
      typeCounts,
      topSubstance: topSubstance ? topSubstance[0] : null,
      topMood: topMood ? MOODS.find((m) => m.id === topMood[0]) : null,
      avgRating: ratedCount > 0 ? (totalRating / ratedCount).toFixed(1) : null,
    }
  }, [logs])

  return (
    <div className="min-h-screen bg-vice-bg pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-display-md text-vice-text mb-3">Your Archive</h1>
          <blockquote className="border-l-2 border-vice-accent pl-4 inline-block">
            <p className="text-body-lg text-vice-text italic font-light">
              "What is a vice if it doesn't consume you"
            </p>
          </blockquote>
        </motion.div>

        {/* Content */}
        {stats ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="p-6 bg-vice-card border border-vice-border text-center">
                <p className="text-4xl font-light text-vice-accent">{stats.total}</p>
                <p className="text-body-sm text-vice-text-muted mt-2 uppercase tracking-widest">Moments</p>
              </div>
              {stats.topSubstance && (
                <div className="p-6 bg-vice-card border border-vice-border text-center">
                  <p className="text-heading-md text-vice-text truncate">{stats.topSubstance}</p>
                  <p className="text-body-sm text-vice-text-muted mt-2 uppercase tracking-widest">Most Logged</p>
                </div>
              )}
              {stats.topMood && (
                <div className="p-6 bg-vice-card border border-vice-border text-center">
                  <p className="text-3xl mb-2">{stats.topMood.emoji}</p>
                  <p className="text-body-sm text-vice-text-muted uppercase tracking-widest">{stats.topMood.label}</p>
                </div>
              )}
              {stats.avgRating && (
                <div className="p-6 bg-vice-card border border-vice-border text-center">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-4xl font-light text-vice-gold">{stats.avgRating}</p>
                    <FaStar className="text-vice-gold" />
                  </div>
                  <p className="text-body-sm text-vice-text-muted mt-2 uppercase tracking-widest">Avg Rating</p>
                </div>
              )}
            </div>

            {/* Substance Identity */}
            <div className="bg-vice-card border border-vice-border p-8 mb-12">
              <h2 className="text-heading-lg text-vice-text mb-6">Your Substance Identity</h2>
              <div className="space-y-4">
                {Object.entries(stats.typeCounts)
                  .sort((a, b) => b[1] - a[1])
                  .map(([type, count]) => {
                    const meta = TYPE_META[type]
                    const pct = Math.round((count / stats.total) * 100)
                    return (
                      <div key={type}>
                        <div className="flex items-center justify-between text-body-sm mb-2">
                          <span className="text-vice-text flex items-center gap-2">
                            <span className="text-lg">{meta?.icon}</span>
                            {meta?.label}
                          </span>
                          <span className="text-vice-text-muted">{count} ({pct}%)</span>
                        </div>
                        <div className="w-full h-2 bg-vice-border overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.8 }}
                            className="h-full"
                            style={{ backgroundColor: meta?.color }}
                          />
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>

            {/* Recent Moments */}
            <div className="mb-12">
              <h2 className="text-heading-lg text-vice-text mb-6">Recent Moments</h2>
              <div className="space-y-6">
                {logs.slice(0, 10).map((log) => {
                  const substance = getSubstanceById(log.substance_id)
                  if (!substance) return null
                  return <LogCard key={log.id} log={log} substance={substance} />
                })}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-heading-lg text-vice-text mb-3">No moments yet</h2>
            <p className="text-body-md text-vice-text-muted mb-8">
              Start logging to build your personal substance identity.
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

export default Profile
