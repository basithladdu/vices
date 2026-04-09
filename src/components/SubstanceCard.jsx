import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TYPE_META } from '../data/substances'

const SubstanceCard = ({ substance }) => {
  const meta = TYPE_META[substance.type]

  return (
    <Link to={`/substance/${substance.id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        className="bg-vice-card border border-vice-border p-4 hover:border-vice-accent/50 transition-all cursor-pointer group h-full flex flex-col"
      >
        {/* Image */}
        <div className="aspect-square bg-vice-border mb-4 flex items-center justify-center text-5xl overflow-hidden flex-shrink-0 group-hover:opacity-80 transition-opacity">
          {substance.image ? (
            <img src={substance.image} alt={substance.name} className="w-full h-full object-cover" />
          ) : (
            <span className="opacity-30 group-hover:opacity-50 transition-opacity" style={{ color: meta.color }}>
              {meta.icon}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col">
          {/* Name */}
          <h3 className="text-heading-sm text-vice-text truncate mb-1">{substance.name}</h3>
          <p className="text-body-sm text-vice-text-muted truncate mb-3 flex-shrink-0">
            {substance.brand || substance.subtype || meta.label}
          </p>

          {/* Specs */}
          <div className="flex items-center gap-2 mb-3 flex-wrap text-[10px] text-vice-muted">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: meta.color }}
            />
            <span>{meta.label}</span>
            {substance.abv && <span className="text-vice-text-muted/60">|</span>}
            {substance.abv && <span>{substance.abv}%</span>}
            {substance.thc && <span className="text-vice-text-muted/60">|</span>}
            {substance.thc && <span>THC {substance.thc}%</span>}
          </div>

          {/* Tags */}
          {substance.tags && substance.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-auto">
              {substance.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-1.5 py-0.5 bg-vice-border text-vice-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  )
}

export default SubstanceCard
