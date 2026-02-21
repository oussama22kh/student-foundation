import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ArchivePage from './pages/ArchivePage'
import ThesisDetails from './pages/ThesisDetails'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-academic-gray">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/thesis/:id" element={<ThesisDetails />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
