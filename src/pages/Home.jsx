import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaFire, FaArrowRight, FaGithub } from 'react-icons/fa'
import { TYPE_META, SUBSTANCE_TYPES } from '../data/substances'
import Footer from '../components/Footer'

const Home = () => {
  const categories = Object.entries(TYPE_META)

  return (
    <div className="min-h-screen bg-vice-bg pt-14">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-vice-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-vice-ember/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 pt-24 pb-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vice-accent/10 border border-vice-accent/20 text-vice-accent text-xs font-medium mb-8">
              <FaFire className="text-[10px]" /> Open Source Memory Journal
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Vices
            </h1>

            <p className="text-xl md:text-2xl text-vice-muted/70 font-[family-name:var(--font-vice-serif)] italic mb-4">
              "What is a vice if it doesn't consume you"
            </p>

            <p className="text-vice-muted text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Log your moments, not your habits. A personal journal for the
              experiences that shaped you — the late nights, the road trips,
              the first times, the last drags.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/log"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-vice-accent text-white rounded-xl font-semibold text-sm hover:bg-vice-accent-dim transition-all shadow-lg shadow-vice-accent/20"
              >
                Log a Moment <FaArrowRight className="text-xs" />
              </Link>
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 text-white rounded-xl font-semibold text-sm hover:bg-white/10 transition-all border border-white/10"
              >
                Explore Substances
              </Link>
            </div>

            {/* Open source badge */}
            <div className="mt-8">
              <a
                href="https://github.com/basithladdu/vices"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-vice-muted/50 text-xs hover:text-vice-muted transition-colors"
              >
                <FaGithub /> Open source — contribute on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-white mb-6">Explore Your Vices</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {categories.map(([key, meta], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/explore?type=${key}`}
                className="block p-5 bg-vice-card border border-vice-border rounded-xl hover:border-white/10 transition-all group relative overflow-hidden"
              >
                <div 
                  className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ color: meta.color }}
                >
                  <span className="text-4xl absolute top-2 right-2">{meta.icon}</span>
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{meta.label}</h3>
                <p className="text-vice-muted text-[10px] leading-relaxed line-clamp-2">{meta.description}</p>
                <div className="mt-4 flex items-center justify-between">
                   <div className="h-1 w-8 rounded-full" style={{ backgroundColor: meta.color }} />
                   <FaArrowRight className="text-[10px] text-vice-muted group-hover:text-white transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>


      {/* How it works */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-white mb-8 text-center">How Vices Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: '01',
              title: 'Pick your substance',
              desc: 'Search from our database of cigarettes, alcohol, weed, psychedelics, and more.',
            },
            {
              step: '02',
              title: 'Log the moment',
              desc: 'Add where you were, who you were with, your mood, a caption, and a photo.',
            },
            {
              step: '03',
              title: 'Build your archive',
              desc: 'See your timeline, your map, your stats. Remember every moment that mattered.',
            },
          ].map((item) => (
            <div key={item.step} className="text-center p-6">
              <span className="text-vice-accent font-bold text-3xl font-mono">{item.step}</span>
              <h3 className="text-white font-semibold text-sm mt-3 mb-2">{item.title}</h3>
              <p className="text-vice-muted text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Example log */}
      <section className="max-w-2xl mx-auto px-4 pb-20">
        <div className="bg-vice-card border border-vice-border rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-vice-accent via-vice-ember to-vice-gold" />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-vice-accent/20 flex items-center justify-center text-xs">🚬</div>
            <div>
              <p className="text-white text-sm font-medium">Marlboro Gold</p>
              <p className="text-vice-muted text-[10px]">Apr 8, 2026</p>
            </div>
            <span className="ml-auto text-vice-muted/30 text-xs flex items-center gap-1">🥀 Nostalgic</span>
          </div>
          <p className="text-vice-text text-sm leading-relaxed italic">
            "Smoked after 3 years on the hostel terrace. Stars were out. Arjun was talking about
            dropping out. We didn't know it would be the last time we'd all be together."
          </p>
          <div className="flex items-center gap-3 mt-4 text-[10px] text-vice-muted">
            <span>📍 Manali, HP</span>
            <span>👥 2 friends</span>
            <span className="text-vice-gold">★★★★☆</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
