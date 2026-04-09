import { motion } from 'framer-motion'
import { FaFire, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="min-h-screen bg-vice-bg pt-20 pb-24">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-full bg-vice-accent/10 flex items-center justify-center text-3xl mx-auto mb-4 border border-vice-accent/20">
            <FaFire />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Vices</h1>
          <p className="text-vice-muted text-lg italic font-[family-name:var(--font-vice-serif)]">
            "What is a vice if it doesn't consume you"
          </p>
        </motion.div>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 bg-vice-card border border-vice-border rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-white mb-4">About Vices</h2>
          <p className="text-vice-text leading-relaxed mb-4">
            Vices is an open-source personal memory journal app. It's Letterboxd for moments tied to substances — cigarettes, alcohol, weed, psychedelics, stimulants, and everything in between.
          </p>
          <p className="text-vice-text leading-relaxed mb-4">
            We believe that the memories attached to these moments matter more than the substances themselves. The late-night conversations, the road trips, the times you understood something new, the moments that shaped who you are.
          </p>
          <p className="text-vice-muted text-sm italic">
            This app is a personal journal tool. We do not promote or endorse substance use. Use responsibly, legally, and safely.
          </p>
        </motion.section>

        {/* Made by Devit */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 bg-vice-accent/5 border border-vice-accent/20 rounded-2xl mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <FaCode className="text-vice-accent" />
            <h2 className="text-xl font-bold text-white">Built by Devit</h2>
          </div>
          <p className="text-vice-text text-sm mb-4">
            Vices is an initiative by developers who believe in open-source public infrastructure. Made with{' '}
            <span className="text-vice-accent">❤️</span> at Devit.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.wedevit.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-xs font-medium transition-all"
            >
              <FaGlobe size={10} /> wedevit.in
            </a>
            <a
              href="https://www.linkedin.com/company/thedevit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-xs font-medium transition-all"
            >
              <FaLinkedin size={10} /> LinkedIn
            </a>
            <a
              href="https://instagram.com/devit.company"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-xs font-medium transition-all"
            >
              <FaInstagram size={10} /> Instagram
            </a>
            <a
              href="mailto:workwithdevit@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-xs font-medium transition-all"
            >
              <FaEnvelope size={10} /> Contact
            </a>
          </div>
        </motion.section>

        {/* Contributing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 bg-vice-card border border-vice-border rounded-2xl"
        >
          <h2 className="text-xl font-bold text-white mb-4">Contribute</h2>
          <p className="text-vice-text text-sm mb-4">
            Vices is 100% open source. We welcome contributions of all kinds.
          </p>
          <a
            href="https://github.com/basithladdu/vices"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-vice-accent text-white rounded-xl font-semibold text-sm hover:bg-vice-accent-dim transition-all"
          >
            <FaGithub size={12} /> View on GitHub
          </a>
        </motion.section>

        {/* License */}
        <div className="mt-12 text-center">
          <p className="text-vice-muted/50 text-xs">
            Licensed under MIT. Made with 🔥 by{' '}
            <a href="https://www.wedevit.in" target="_blank" rel="noopener noreferrer" className="text-vice-muted hover:text-white transition-colors">
              Devit
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
