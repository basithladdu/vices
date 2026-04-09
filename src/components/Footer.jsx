import { FaFire, FaGlobe, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-vice-border mt-20 pt-12 pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaFire className="text-vice-accent" />
              <span className="text-lg font-bold text-white">Vices</span>
            </div>
            <p className="text-vice-muted text-sm italic font-[family-name:var(--font-vice-serif)] leading-relaxed">
              "What is a vice if it doesn't consume you"
            </p>
            <p className="text-vice-muted/50 text-xs mt-4">
              A personal memory journal. Not a promotion of substance use.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              <Link to="/feed" className="text-vice-muted text-sm hover:text-white transition-colors">Feed</Link>
              <Link to="/explore" className="text-vice-muted text-sm hover:text-white transition-colors">Explore</Link>
              <Link to="/log" className="text-vice-muted text-sm hover:text-white transition-colors">Log a Moment</Link>
              <Link to="/about" className="text-vice-muted text-sm hover:text-white transition-colors">About</Link>
            </div>
          </div>

          {/* Made by Devit */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Built by Devit</h4>
            <div className="flex flex-col gap-2">
              <a href="https://www.wedevit.in" target="_blank" rel="noopener noreferrer" className="text-vice-muted text-sm hover:text-white transition-colors flex items-center gap-2">
                <FaGlobe className="text-xs" /> wedevit.in
              </a>
              <a href="https://www.linkedin.com/company/thedevit" target="_blank" rel="noopener noreferrer" className="text-vice-muted text-sm hover:text-white transition-colors flex items-center gap-2">
                <FaLinkedin className="text-xs" /> LinkedIn
              </a>
              <a href="https://instagram.com/devit.company" target="_blank" rel="noopener noreferrer" className="text-vice-muted text-sm hover:text-white transition-colors flex items-center gap-2">
                <FaInstagram className="text-xs" /> devit.company
              </a>
              <a href="https://github.com/basithladdu/vices" target="_blank" rel="noopener noreferrer" className="text-vice-muted text-sm hover:text-white transition-colors flex items-center gap-2">
                <FaGithub className="text-xs" /> Open Source
              </a>
              <a href="mailto:workwithdevit@gmail.com" className="text-vice-muted text-sm hover:text-white transition-colors flex items-center gap-2">
                <FaEnvelope className="text-xs" /> workwithdevit@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-vice-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-vice-muted/50 text-xs">
            &copy; {new Date().getFullYear()} Vices. Made with 🔥 by <a href="https://www.wedevit.in" target="_blank" rel="noopener noreferrer" className="text-vice-muted hover:text-white transition-colors">Devit</a>
          </p>
          <p className="text-vice-muted/30 text-[10px]">
            This app is a personal journal tool. We do not promote or endorse substance use.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
