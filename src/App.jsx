import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Feed from './pages/Feed'
import LogEntry from './pages/LogEntry'
import Profile from './pages/Profile'
import Explore from './pages/Explore'
import SubstanceDetail from './pages/SubstanceDetail'
import About from './pages/About'

function App() {
  return (
    <div className="min-h-screen bg-vice-bg">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#e5e5e5',
            border: '1px solid #2a2a2a',
            fontSize: '14px',
          },
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/log" element={<LogEntry />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/substance/:id" element={<SubstanceDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
