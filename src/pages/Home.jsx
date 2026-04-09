import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import { TYPE_META } from '../data/substances'
import Footer from '../components/Footer'

const Home = () => {
  const categories = Object.entries(TYPE_META)

  return (
    <div className="min-h-screen bg-vice-bg pt-14">
      {/* Hero - Asymmetrical Literary Zine */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Left: Text (larger on desktop) */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div>
                  <p className="text-vice-muted text-sm tracking-widest uppercase mb-4">
                    Open Source Journal
                  </p>
                  <h1 className="text-display-lg text-vice-text">
                    Vices
                  </h1>
                </div>

                <blockquote className="border-l-4 border-vice-accent pl-4">
                  <p className="text-heading-md text-vice-text italic font-light">
                    "What is a vice if it doesn't consume you"
                  </p>
                </blockquote>

                <p className="text-body-lg text-vice-text-muted max-w-lg leading-relaxed">
                  Log your moments, not your habits. A personal journal for the experiences that shaped you — the late nights, the road trips, the first times, the last drags.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    to="/log"
                    className="btn-vice-primary inline-block"
                  >
                    Log a Moment
                  </Link>
                  <Link
                    to="/explore"
                    className="btn-vice-primary inline-block"
                  >
                    Explore Substances
                  </Link>
                </div>

                <div className="pt-4">
                  <a
                    href="https://github.com/basithladdu/vices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-vice-muted hover:text-vice-accent transition-colors underline-animate inline-flex items-center gap-2 text-sm"
                  >
                    <FaGithub className="text-xs" /> Open source on GitHub
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Tilted visual element */}
            <motion.div
              className="hidden md:block relative h-96"
              initial={{ opacity: 0, rotate: -5, y: 20 }}
              animate={{ opacity: 1, rotate: -3, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-vice-card border-2 border-vice-border p-8 flex flex-col justify-center items-center"
                style={{ transform: 'rotate(-3deg)' }}>
                <div className="w-full h-full bg-gradient-to-br from-vice-accent/10 to-vice-ember/10 flex items-center justify-center border border-vice-border/50">
                  <span className="text-8xl opacity-20">✕</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-vice-border">
        <h2 className="text-heading-xl text-vice-text mb-12">Explore Your Vices</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(([key, meta], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/explore?type=${key}`}
                className="block p-6 bg-vice-card border border-vice-border group hover:border-vice-accent/50 transition-all"
              >
                <div className="w-10 h-10 rounded-sm mb-4 flex items-center justify-center" style={{ backgroundColor: `${meta.color}15` }}>
                  <span className="text-xl" style={{ color: meta.color }}>{meta.icon}</span>
                </div>
                <h3 className="text-heading-sm text-vice-text mb-2">{meta.label}</h3>
                <p className="text-body-sm text-vice-text-muted line-clamp-2">{meta.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="h-0.5 w-6" style={{ backgroundColor: meta.color }} />
                  <FaArrowRight className="text-xs text-vice-muted group-hover:text-vice-accent transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-vice-border">
        <h2 className="text-heading-xl text-vice-text mb-16">How Vices Works</h2>
        <div className="space-y-12">
          {[
            {
              step: '01',
              title: 'Pick your substance',
              desc: 'Search from our database of cigarettes, alcohol, weed, psychedelics, and more.',
              color: 'var(--vice-ember)'
            },
            {
              step: '02',
              title: 'Log the moment',
              desc: 'Add where you were, who you were with, your mood, a caption, and a photo.',
              color: 'var(--vice-gold)'
            },
            {
              step: '03',
              title: 'Build your archive',
              desc: 'See your timeline, your map, your stats. Remember every moment that mattered.',
              color: 'var(--vice-sage)'
            },
          ].map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className={`grid grid-cols-1 ${idx % 2 === 0 ? 'md:grid-cols-3 md:gap-8' : 'md:grid-cols-3 md:gap-8'}`}
            >
              <div className={idx % 2 === 0 ? '' : 'md:col-start-2'}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl font-light text-vice-text-muted" style={{ color: item.color }}>
                    {item.step}
                  </span>
                  <div className="h-px flex-grow" style={{ backgroundColor: item.color }} />
                </div>
                <h3 className="text-heading-lg text-vice-text mb-3">{item.title}</h3>
                <p className="text-body-md text-vice-text-muted">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Example Log Card */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-vice-border">
        <h2 className="text-heading-xl text-vice-text mb-8">Recent Moments</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-vice-card border-2 border-vice-border p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 bg-vice-border/30 h-64 md:h-auto flex items-center justify-center border border-vice-border">
              <span className="text-6xl opacity-20">⊠</span>
            </div>
            <div className="md:col-span-2 flex flex-col justify-center space-y-4">
              <div>
                <p className="text-vice-muted text-sm mb-1">Apr 8, 2026</p>
                <h3 className="text-heading-lg text-vice-text">Marlboro Gold</h3>
              </div>
              <p className="text-body-lg text-vice-text italic leading-relaxed max-w-md">
                "Smoked after 3 years on the hostel terrace. Stars were out. Arjun was talking about dropping out. We didn't know it would be the last time we'd all be together."
              </p>
              <div className="flex gap-6 text-body-sm text-vice-text-muted pt-4 border-t border-vice-border">
                <span>Manali, HP</span>
                <span>2 friends</span>
                <span className="text-vice-gold">4.0</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
