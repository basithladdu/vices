import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TYPE_META } from '../data/substances'

const SubstanceCard = ({ substance }) => {
  const meta = TYPE_META[substance.type]

  return (
    <Link to={`/substance/${substance.id}`}>
      <motion.div
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="bg-vice-card border border-vice-border rounded-xl p-4 hover:border-white/10 transition-all cursor-pointer group"
      >
        {/* Image placeholder */}
        <div className="aspect-square rounded-lg bg-vice-smoke mb-3 flex items-center justify-center text-4xl overflow-hidden">
          {substance.image ? (
            <img src={substance.image} alt={substance.name} className="w-full h-full object-cover" />
          ) : (
            <span className="opacity-40 group-hover:opacity-60 transition-opacity">
              {meta.icon}
            </span>
          )}
        </div>

        {/* Info */}
        <h3 className="text-white font-semibold text-sm truncate">{substance.name}</h3>
        <p className="text-vice-muted text-xs mt-0.5 truncate">{substance.brand || substance.subtype}</p>

        {/* Type badge */}
        <div className="mt-2 flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: meta.color }}
          />
          <span className="text-[10px] text-vice-muted">{meta.label}</span>
          {substance.strength && (
            <span className="text-[10px] text-vice-muted/50 ml-auto">{substance.strength}</span>
          )}
          {substance.abv && (
            <span className="text-[10px] text-vice-muted/50 ml-auto">{substance.abv}%</span>
          )}
          {substance.thc && (
            <span className="text-[10px] text-vice-muted/50 ml-auto">THC {substance.thc}%</span>
          )}
        </div>

        {/* Tags */}
        {substance.tags && substance.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {substance.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/5 text-vice-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </Link>
  )
}

export default SubstanceCard
