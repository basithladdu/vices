import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaSearch, FaTimes } from 'react-icons/fa'
import substances, { TYPE_META, SUBSTANCE_TYPES, searchSubstances } from '../data/substances'
import SubstanceCard from '../components/SubstanceCard'
import Footer from '../components/Footer'

const Explore = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const activeType = searchParams.get('type') || null

  const filtered = useMemo(() => {
    let results = substances
    if (activeType) {
      results = results.filter((s) => s.type === activeType)
    }
    if (query.trim()) {
      results = searchSubstances(query)
      if (activeType) {
        results = results.filter((s) => s.type === activeType)
      }
    }
    return results
  }, [query, activeType])

  const setType = (type) => {
    if (type === activeType) {
      searchParams.delete('type')
    } else {
      searchParams.set('type', type)
    }
    setSearchParams(searchParams)
  }

  return (
    <div className="min-h-screen bg-vice-bg pt-20 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Explore</h1>
          <p className="text-vice-muted text-sm">
            Browse {substances.length}+ substances across {Object.keys(TYPE_META).length} categories
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-vice-muted text-sm" />
          <input
            type="text"
            placeholder="Search substances, brands, tags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 bg-vice-card border border-vice-border rounded-xl text-white text-sm placeholder:text-vice-muted/50 focus:outline-none focus:border-vice-accent/50 transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-vice-muted hover:text-white"
            >
              <FaTimes size={12} />
            </button>
          )}
        </div>

        {/* Type filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(TYPE_META).map(([key, meta]) => (
            <button
              key={key}
              onClick={() => setType(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all border ${
                activeType === key
                  ? 'border-white/20 bg-white/10 text-white'
                  : 'border-vice-border bg-vice-card text-vice-muted hover:text-white hover:border-white/10'
              }`}
            >
              <span>{meta.icon}</span>
              {meta.label}
            </button>
          ))}
          {activeType && (
            <button
              onClick={() => {
                searchParams.delete('type')
                setSearchParams(searchParams)
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-vice-accent hover:text-white transition-colors"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Results count */}
        <p className="text-vice-muted text-xs mb-4">
          {filtered.length} substance{filtered.length !== 1 ? 's' : ''} found
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filtered.map((substance, i) => (
              <motion.div
                key={substance.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02 }}
              >
                <SubstanceCard substance={substance} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-vice-muted text-lg mb-2">No substances found</p>
            <p className="text-vice-muted/50 text-sm">
              Try a different search or{' '}
              <a
                href="https://github.com/basithladdu/vices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vice-accent hover:underline"
              >
                contribute to add more
              </a>
            </p>
          </div>
        )}

        {/* Contribute CTA */}
        <div className="mt-16 text-center p-8 bg-vice-card border border-vice-border rounded-2xl">
          <h3 className="text-white font-semibold mb-2">Missing something?</h3>
          <p className="text-vice-muted text-sm mb-4">
            Vices is open source. Add your favorite substances to the database.
          </p>
          <a
            href="https://github.com/basithladdu/vices"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm font-medium hover:bg-white/10 transition-all"
          >
            Contribute on GitHub
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Explore
