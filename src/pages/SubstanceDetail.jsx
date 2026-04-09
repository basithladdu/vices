import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaPlus, FaStar, FaMapMarkerAlt, FaGlobe, FaFlask, FaClock, FaBolt } from 'react-icons/fa'
import { getSubstanceById, TYPE_META } from '../data/substances'
import Footer from '../components/Footer'

const SubstanceDetail = () => {
  const { id } = useParams()
  const substance = getSubstanceById(id)

  if (!substance) {
    return (
      <div className="min-h-screen bg-vice-bg pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-vice-muted text-lg mb-4">Substance not found</p>
          <Link to="/explore" className="text-vice-accent hover:underline text-sm">
            Back to Explore
          </Link>
        </div>
      </div>
    )
  }

  const meta = TYPE_META[substance.type]

  return (
    <div className="min-h-screen bg-vice-bg pt-20 pb-24">
      <div className="max-w-3xl mx-auto px-4">
        {/* Back */}
        <Link to="/explore" className="inline-flex items-center gap-2 text-vice-muted text-sm mb-6 hover:text-white transition-colors">
          <FaArrowLeft size={10} /> Back to Explore
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header card */}
          <div className="bg-vice-card border border-vice-border rounded-2xl overflow-hidden relative">
             <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl pointer-events-none">
                {meta.icon}
             </div>

            {/* Color bar */}
            <div className="h-1.5 w-full" style={{ backgroundColor: meta.color }} />

            <div className="p-6 md:p-10 relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Image */}
                <div
                  className="w-32 h-32 md:w-48 md:h-48 rounded-2xl flex items-center justify-center text-6xl shrink-0 overflow-hidden shadow-2xl border border-white/5 bg-vice-smoke"
                >
                  {substance.image ? (
                    <img src={substance.image} alt={substance.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="opacity-20">{meta.icon}</span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest text-white"
                      style={{ backgroundColor: meta.color }}
                    >
                      {meta.label}
                    </span>
                    <span className="text-xs text-vice-muted">{substance.variant || substance.subtype}</span>
                  </div>

                  <h1 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">{substance.name}</h1>

                  {substance.brand && (
                    <p className="text-xl text-vice-muted/70 font-medium mb-4">{substance.brand}</p>
                  )}

                  <p className="text-vice-text/80 text-lg leading-relaxed mb-6 font-light">
                    {substance.description}
                  </p>

                  <div className="flex flex-wrap gap-3 text-xs">
                    {substance.origin && (
                      <span className="px-3 py-1 bg-white/5 rounded-full text-vice-muted border border-white/5 flex items-center gap-2">
                        <FaGlobe className="text-[10px]" /> {substance.origin}
                      </span>
                    )}
                    {substance.manufacturer && (
                      <span className="px-3 py-1 bg-white/5 rounded-full text-vice-muted border border-white/5">
                        {substance.manufacturer}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Stats/Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {substance.abv && (
                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                    <p className="text-vice-muted text-[10px] uppercase tracking-wider mb-1">Concentration</p>
                    <p className="text-white font-bold text-xl">{substance.abv}% ABV</p>
                  </div>
                )}
                {substance.thc && (
                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                    <p className="text-vice-muted text-[10px] uppercase tracking-wider mb-1">Potency</p>
                    <p className="text-white font-bold text-xl">{substance.thc}% THC</p>
                  </div>
                )}
                {substance.type === 'PSYCHEDELIC' && (
                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                    <p className="text-vice-muted text-[10px] uppercase tracking-wider mb-1">Nature</p>
                    <p className="text-white font-bold text-xl flex items-center gap-2">
                       <FaFlask className="text-xs text-vice-accent" /> Synthetic
                    </p>
                  </div>
                )}
                {substance.type === 'STIMULANT' && (
                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                    <p className="text-vice-muted text-[10px] uppercase tracking-wider mb-1">Intensity</p>
                    <p className="text-white font-bold text-xl flex items-center gap-2">
                       <FaBolt className="text-xs text-vice-gold" /> Critical
                    </p>
                  </div>
                )}
              </div>

              {/* Tags */}
              {substance.tags?.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xs text-vice-muted uppercase tracking-wider mb-3">Associations</h3>
                  <div className="flex flex-wrap gap-2">
                    {substance.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-vice-smoke border border-white/5 rounded-lg text-xs text-vice-text/70">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Log CTA */}
              <div className="mt-12 flex flex-col md:flex-row items-center gap-4">
                <Link
                  to={`/log?substance=${substance.id}`}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-vice-accent text-white rounded-2xl font-bold hover:bg-vice-accent-dim transition-all shadow-xl shadow-vice-accent/20"
                >
                  <FaPlus size={12} /> Log This Moment
                </Link>
                <div className="text-vice-muted text-xs text-center md:text-left">
                   3,421 users have logged this
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

export default SubstanceDetail
