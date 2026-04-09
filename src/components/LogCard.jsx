import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaStar, FaHeart, FaLock, FaGlobe } from 'react-icons/fa'
import { TYPE_META, MOODS } from '../data/substances'

const LogCard = ({ log, substance }) => {
  const meta = TYPE_META[substance?.type]
  const mood = MOODS.find((m) => m.id === log.mood)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-vice-card border border-vice-border p-6 hover:border-vice-accent/50 transition-all group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4 pb-4 border-b border-vice-border/50">
        <div className="flex items-start gap-4">
          {/* Substance icon */}
          <div
            className="w-12 h-12 rounded flex items-center justify-center text-2xl flex-shrink-0"
            style={{ backgroundColor: meta?.color + '20', color: meta?.color }}
          >
            {meta?.icon}
          </div>
          <div className="flex-grow">
            <h3 className="text-heading-md text-vice-text">{substance?.name}</h3>
            <p className="text-body-sm text-vice-text-muted mt-1">
              {log.timestamp ? new Date(log.timestamp).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              }) : 'Just now'}
            </p>
          </div>
        </div>

        {/* Visibility badge */}
        <div className="text-vice-muted/50 text-xs">
          {log.visibility === 'private' ? <FaLock /> : <FaGlobe />}
        </div>
      </div>

      {/* Caption */}
      {log.caption && (
        <p className="text-body-md text-vice-text mb-4 leading-relaxed italic">{log.caption}</p>
      )}

      {/* Photo */}
      {log.media && log.media.length > 0 && (
        <div className="rounded overflow-hidden mb-4 aspect-video bg-vice-border">
          <img src={log.media[0]} alt="" className="w-full h-full object-cover" />
        </div>
      )}

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-4 text-body-sm mb-4">
        {/* Rating */}
        {log.rating && (
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={12}
                className={i < log.rating ? 'text-vice-gold' : 'text-vice-border'}
              />
            ))}
          </div>
        )}

        {/* Mood */}
        {mood && (
          <span className="px-2 py-1 bg-vice-border text-vice-text-muted text-xs">
            {mood.label}
          </span>
        )}

        {/* Location */}
        {log.location?.name && (
          <span className="flex items-center gap-1.5 text-vice-text-muted">
            <FaMapMarkerAlt size={11} style={{ color: meta?.color }} />
            {log.location.name}
          </span>
        )}
      </div>

      {/* Friends tagged */}
      {log.friends_tagged && log.friends_tagged.length > 0 && (
        <div className="text-body-sm text-vice-text-muted mb-4">
          With {log.friends_tagged.join(', ')}
        </div>
      )}

      {/* Social Interactions */}
      <div className="border-t border-vice-border pt-4 flex items-center justify-between">
        <div className="flex items-center gap-6 text-body-sm">
          <button className="flex items-center gap-2 text-vice-text-muted hover:text-vice-accent transition-colors group/btn">
            <FaHeart className="text-xs group-hover/btn:scale-110 transition-transform" />
            <span className="text-xs font-medium">12</span>
          </button>
          <button className="flex items-center gap-2 text-vice-text-muted hover:text-vice-accent transition-colors group/btn">
            <span className="text-xs">💬</span>
            <span className="text-xs font-medium">3</span>
          </button>
        </div>
        <span className="text-heading-sm text-vice-text-muted hover:text-vice-text transition-colors cursor-pointer underline-animate">
          View
        </span>
      </div>

    </motion.div>
  )
}

export default LogCard
