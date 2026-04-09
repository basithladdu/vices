import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaStar, FaUserFriends, FaLock, FaGlobe } from 'react-icons/fa'
import { TYPE_META, MOODS } from '../data/substances'

const LogCard = ({ log, substance }) => {
  const meta = TYPE_META[substance?.type]
  const mood = MOODS.find((m) => m.id === log.mood)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-vice-card border border-vice-border rounded-xl p-5 hover:border-white/10 transition-all"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {/* Substance icon */}
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
            style={{ backgroundColor: meta?.color + '15' }}
          >
            {meta?.icon}
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">{substance?.name}</h3>
            <p className="text-vice-muted text-xs">
              {log.timestamp ? new Date(log.timestamp).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              }) : 'Just now'}
            </p>
          </div>
        </div>

        {/* Visibility */}
        <span className="text-vice-muted/40 text-xs">
          {log.visibility === 'private' ? <FaLock /> : <FaGlobe />}
        </span>
      </div>

      {/* Caption */}
      {log.caption && (
        <p className="text-vice-text text-sm mb-3 leading-relaxed">{log.caption}</p>
      )}

      {/* Photo */}
      {log.media && log.media.length > 0 && (
        <div className="rounded-lg overflow-hidden mb-3 aspect-video bg-vice-smoke">
          <img src={log.media[0]} alt="" className="w-full h-full object-cover" />
        </div>
      )}

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-vice-muted mb-4">
        {/* Rating */}
        {log.rating && (
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < log.rating ? 'text-vice-gold' : 'text-vice-border'}
                size={10}
              />
            ))}
          </div>
        )}

        {/* Mood */}
        {mood && (
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
            {mood.emoji} {mood.label}
          </span>
        )}

        {/* Location */}
        {log.location?.name && (
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-vice-accent" size={9} />
            {log.location.name}
          </span>
        )}
      </div>

      {/* Social Interactions */}
      <div className="border-t border-vice-border pt-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-vice-muted hover:text-vice-accent transition-colors group">
            <FaFire className="text-xs group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold">12</span>
          </button>
          <button className="flex items-center gap-1.5 text-vice-muted hover:text-white transition-colors group">
            <FaUserFriends className="text-xs group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold">3</span>
          </button>
        </div>
        <button className="text-[10px] font-bold text-vice-muted hover:text-white transition-colors uppercase tracking-widest">
           View Moment
        </button>
      </div>

    </motion.div>
  )
}

export default LogCard
