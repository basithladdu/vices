import { FaGlobe, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-vice-border mt-20 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 bg-vice-accent flex items-center justify-center">
                <span className="text-white text-xs font-bold">✕</span>
              </div>
              <span className="text-heading-sm text-vice-text tracking-widest">VICES</span>
            </div>
            <blockquote className="border-l-2 border-vice-accent pl-3 mb-4">
              <p className="text-body-md text-vice-text italic font-light">
                "What is a vice if it doesn't consume you"
              </p>
            </blockquote>
            <p className="text-body-sm text-vice-text-muted">
              A personal memory journal. Not a promotion of substance use.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-heading-sm text-vice-text mb-6 uppercase tracking-widest">Navigate</h4>
            <div className="flex flex-col gap-3">
              <Link to="/feed" className="text-body-md text-vice-text-muted hover:text-vice-accent transition-colors underline-animate">Feed</Link>
              <Link to="/explore" className="text-body-md text-vice-text-muted hover:text-vice-accent transition-colors underline-animate">Explore</Link>
              <Link to="/log" className="text-body-md text-vice-text-muted hover:text-vice-accent transition-colors underline-animate">Log</Link>
              <Link to="/about" className="text-body-md text-vice-text-muted hover:text-vice-accent transition-colors underline-animate">About</Link>
            </div>
          </div>

          {/* Made by Devit */}
          <div>
            <h4 className="text-heading-sm text-vice-text mb-6 uppercase tracking-widest">Built by Devit</h4>
            <div className="flex flex-col gap-3">
              <a href="https://www.wedevit.in" target="_blank" rel="noopener noreferrer" className="text-body-md text-vice-text-muted hover:text-vice-accent transition-colors flex items-center gap-2 underline-animate">
                <FaGlobe className="text-sm" /> wedevit.in
              </a>
              <a href="https://www.linkedin.com/company/thedevit" target="_blank" rel="noopener noreferrer" className="text-body-md text-vice-text-muted hover:text-vice-accent transition-colors flex items-center gap-2 underline-animate">
                <FaLinkedin className="text-sm" /> LinkedIn
              </a>
              <a href="https://instagram.com/devit.company" target="_blank" rel="noopener noreferrer" className="text-body-md text-vice-text-muted hover:text-vice-accent transition-colors flex items-center gap-2 underline-animate">
                <FaInstagram className="text-sm" /> Instagram
              </a>
              <a href="https://github.com/basithladdu/vices" target="_blank" rel="noopener noreferrer" className="text-body-md text-vice-text-muted hover:text-vice-accent transition-colors flex items-center gap-2 underline-animate">
                <FaGithub className="text-sm" /> Open Source
              </a>
              <a href="mailto:workwithdevit@gmail.com" className="text-body-md text-vice-text-muted hover:text-vice-accent transition-colors flex items-center gap-2 underline-animate">
                <FaEnvelope className="text-sm" /> Contact
              </a>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-vice-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-vice-text-muted">
            &copy; {new Date().getFullYear()} Vices. Made by <a href="https://www.wedevit.in" target="_blank" rel="noopener noreferrer" className="text-vice-accent hover:text-vice-accent-light transition-colors">Devit</a>
          </p>
          <p className="text-body-sm text-vice-text-muted">
            Personal journal tool. Not an endorsement of substance use.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
