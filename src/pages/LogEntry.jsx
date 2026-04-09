import { useState, useMemo } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaStar, FaMapMarkerAlt, FaCamera, FaLock, FaGlobe, FaTimes, FaCheck } from 'react-icons/fa'
import toast from 'react-hot-toast'
import substances, { TYPE_META, MOODS, getSubstanceById, searchSubstances } from '../data/substances'

const LogEntry = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const preselectedId = searchParams.get('substance')
  const preselected = preselectedId ? getSubstanceById(preselectedId) : null

  const [step, setStep] = useState(preselected ? 2 : 1)
  const [selectedSubstance, setSelectedSubstance] = useState(preselected)
  const [query, setQuery] = useState('')
  const [log, setLog] = useState({
    caption: '',
    mood: '',
    rating: 0,
    location: '',
    friends: '',
    visibility: 'public',
    photo: null,
  })

  const searchResults = useMemo(() => {
    if (!query.trim()) return substances.slice(0, 20)
    return searchSubstances(query)
  }, [query])

  const selectSubstance = (s) => {
    setSelectedSubstance(s)
    setStep(2)
  }

  const handleSubmit = () => {
    if (!selectedSubstance) return

    const entry = {
      id: Date.now().toString(),
      substance_id: selectedSubstance.id,
      timestamp: new Date().toISOString(),
      caption: log.caption,
      mood: log.mood,
      rating: log.rating,
      location: log.location ? { name: log.location } : null,
      friends_tagged: log.friends ? log.friends.split(',').map((f) => f.trim()).filter(Boolean) : [],
      visibility: log.visibility,
      media: [],
    }

    // Save to localStorage for now (Firebase later)
    const existing = JSON.parse(localStorage.getItem('vices_logs') || '[]')
    existing.unshift(entry)
    localStorage.setItem('vices_logs', JSON.stringify(existing))

    toast.success('Moment logged')
    navigate('/feed')
  }

  const meta = selectedSubstance ? TYPE_META[selectedSubstance.type] : null

  return (
    <div className="min-h-screen bg-vice-bg pt-20 pb-24">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-white mb-2">Log a Moment</h1>
        <p className="text-vice-muted text-sm mb-8">
          {step === 1 ? 'Pick what you had' : 'Tell the story'}
        </p>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8">
          <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-vice-accent' : 'bg-vice-border'}`} />
          <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-vice-accent' : 'bg-vice-border'}`} />
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Select substance */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="relative mb-4">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-vice-muted text-sm" />
                <input
                  type="text"
                  placeholder="Search substance..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-11 pr-4 py-3 bg-vice-card border border-vice-border rounded-xl text-white text-sm placeholder:text-vice-muted/50 focus:outline-none focus:border-vice-accent/50"
                />
              </div>

              <div className="space-y-1.5 max-h-[60vh] overflow-y-auto">
                {searchResults.map((s) => {
                  const m = TYPE_META[s.type]
                  return (
                    <button
                      key={s.id}
                      onClick={() => selectSubstance(s)}
                      className="w-full flex items-center gap-3 p-3 bg-vice-card border border-vice-border rounded-xl hover:border-white/10 transition-all text-left"
                    >
                      <span className="text-lg">{m.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{s.name}</p>
                        <p className="text-vice-muted text-[11px] truncate">{s.brand || s.subtype}</p>
                      </div>
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: m.color }}
                      />
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* Step 2: Add details */}
          {step === 2 && selectedSubstance && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-5"
            >
              {/* Selected substance */}
              <div className="flex items-center gap-3 p-4 bg-vice-card border border-vice-border rounded-xl">
                <span className="text-2xl">{meta.icon}</span>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{selectedSubstance.name}</p>
                  <p className="text-vice-muted text-xs">{selectedSubstance.brand || selectedSubstance.subtype}</p>
                </div>
                <button
                  onClick={() => { setStep(1); setSelectedSubstance(null) }}
                  className="text-vice-muted hover:text-white p-1"
                >
                  <FaTimes size={12} />
                </button>
              </div>

              {/* Caption */}
              <div>
                <label className="text-xs text-vice-muted uppercase tracking-wider mb-2 block">
                  What happened?
                </label>
                <textarea
                  value={log.caption}
                  onChange={(e) => setLog({ ...log, caption: e.target.value })}
                  placeholder="Smoked with Arjun on the terrace after years..."
                  rows={3}
                  className="w-full p-4 bg-vice-card border border-vice-border rounded-xl text-white text-sm placeholder:text-vice-muted/40 focus:outline-none focus:border-vice-accent/50 resize-none"
                />
              </div>

              {/* Mood */}
              <div>
                <label className="text-xs text-vice-muted uppercase tracking-wider mb-2 block">Mood</label>
                <div className="flex flex-wrap gap-2">
                  {MOODS.map((mood) => (
                    <button
                      key={mood.id}
                      onClick={() => setLog({ ...log, mood: log.mood === mood.id ? '' : mood.id })}
                      className={`px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 border transition-all ${
                        log.mood === mood.id
                          ? 'border-vice-accent bg-vice-accent/10 text-white'
                          : 'border-vice-border bg-vice-card text-vice-muted hover:text-white hover:border-white/10'
                      }`}
                    >
                      <span>{mood.emoji}</span>
                      {mood.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="text-xs text-vice-muted uppercase tracking-wider mb-2 block">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setLog({ ...log, rating: log.rating === star ? 0 : star })}
                      className="transition-transform hover:scale-110"
                    >
                      <FaStar
                        size={24}
                        className={star <= log.rating ? 'text-vice-gold' : 'text-vice-border'}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="text-xs text-vice-muted uppercase tracking-wider mb-2 block">
                  <FaMapMarkerAlt className="inline mr-1" size={10} /> Location
                </label>
                <input
                  type="text"
                  value={log.location}
                  onChange={(e) => setLog({ ...log, location: e.target.value })}
                  placeholder="Manali, HP"
                  className="w-full p-3 bg-vice-card border border-vice-border rounded-xl text-white text-sm placeholder:text-vice-muted/40 focus:outline-none focus:border-vice-accent/50"
                />
              </div>

              {/* Friends */}
              <div>
                <label className="text-xs text-vice-muted uppercase tracking-wider mb-2 block">
                  With whom? (comma separated)
                </label>
                <input
                  type="text"
                  value={log.friends}
                  onChange={(e) => setLog({ ...log, friends: e.target.value })}
                  placeholder="Arjun, Rahul"
                  className="w-full p-3 bg-vice-card border border-vice-border rounded-xl text-white text-sm placeholder:text-vice-muted/40 focus:outline-none focus:border-vice-accent/50"
                />
              </div>

              {/* Visibility toggle */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setLog({ ...log, visibility: 'public' })}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-all ${
                    log.visibility === 'public'
                      ? 'border-vice-accent bg-vice-accent/10 text-white'
                      : 'border-vice-border text-vice-muted'
                  }`}
                >
                  <FaGlobe size={10} /> Public
                </button>
                <button
                  onClick={() => setLog({ ...log, visibility: 'private' })}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-all ${
                    log.visibility === 'private'
                      ? 'border-vice-accent bg-vice-accent/10 text-white'
                      : 'border-vice-border text-vice-muted'
                  }`}
                >
                  <FaLock size={10} /> Private
                </button>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full py-3.5 bg-vice-accent text-white rounded-xl font-semibold text-sm hover:bg-vice-accent-dim transition-all shadow-lg shadow-vice-accent/20 flex items-center justify-center gap-2"
              >
                <FaCheck size={12} /> Log This Moment
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default LogEntry
