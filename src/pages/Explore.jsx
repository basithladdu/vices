import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaSearch, FaTimes } from 'react-icons/fa'
import substances, { TYPE_META, searchSubstances } from '../data/substances'
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
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-display-md text-vice-text mb-3">Explore</h1>
          <p className="text-body-md text-vice-text-muted">
            {substances.length} substances across {Object.keys(TYPE_META).length} categories
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-vice-muted text-sm" />
          <input
            type="text"
            placeholder="Search substances, brands, tags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 bg-vice-card border border-vice-border text-vice-text text-body-md placeholder:text-vice-muted focus:outline-none focus:border-vice-accent focus:ring-1 focus:ring-vice-accent/20 transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-vice-muted hover:text-vice-text transition-colors"
              aria-label="Clear search"
            >
              <FaTimes size={14} />
            </button>
          )}
        </motion.div>

        {/* Type Filters */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {Object.entries(TYPE_META).map(([key, meta]) => (
            <button
              key={key}
              onClick={() => setType(key)}
              className={`px-3 py-1.5 text-body-sm font-medium flex items-center gap-2 transition-all border ${
                activeType === key
                  ? 'border-vice-accent bg-vice-accent/10 text-vice-accent'
                  : 'border-vice-border bg-vice-card text-vice-text hover:border-vice-accent/50 hover:text-vice-accent'
              }`}
            >
              <span className="text-lg">{meta.icon}</span>
              {meta.label}
            </button>
          ))}
          {activeType && (
            <button
              onClick={() => {
                searchParams.delete('type')
                setSearchParams(searchParams)
              }}
              className="px-3 py-1.5 text-body-sm text-vice-accent hover:text-vice-accent-light transition-colors"
            >
              Clear
            </button>
          )}
        </motion.div>

        {/* Results Count */}
        <p className="text-body-sm text-vice-text-muted mb-8">
          {filtered.length} result{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filtered.map((substance, i) => (
              <motion.div
                key={substance.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <SubstanceCard substance={substance} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-heading-lg text-vice-text mb-2">No results found</h2>
            <p className="text-body-md text-vice-text-muted mb-8">
              Try different search terms or{' '}
              <a
                href="https://github.com/basithladdu/vices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vice-accent hover:text-vice-accent-light transition-colors underline-animate"
              >
                contribute on GitHub
              </a>
            </p>
          </motion.div>
        )}

        {/* Contribute Section */}
        {filtered.length > 0 && (
          <motion.div
            className="mt-20 p-8 md:p-12 bg-vice-card border-2 border-vice-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-heading-lg text-vice-text mb-3">Missing something?</h2>
            <p className="text-body-md text-vice-text-muted mb-6 max-w-md">
              Vices is open source. Help us expand the database by adding your favorite substances.
            </p>
            <a
              href="https://github.com/basithladdu/vices"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vice-primary inline-block"
            >
              Contribute on GitHub
            </a>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Explore
