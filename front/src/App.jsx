import './index.css'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './pages/user/Homepage'
import LoginAdmin from './pages/admin/LoginAdmin'
import Dashboard from './pages/admin/Dashboard'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    window.addEventListener('beforeunload', handleStart)
    window.addEventListener('load', handleComplete)

    return () => {
      window.removeEventListener('beforeunload', handleStart)
      window.removeEventListener('load', handleComplete)
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        <body className='min-h-screen'>
          <BrowserRouter>
            <Routes>
              {/* ======= USER ========= */}
              <Route path="/" element={<Homepage />} />

              {/* ======= ADMIN ========= */}
              <Route path="/login-admin" element={<LoginAdmin />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>

        </body>
      </AnimatePresence>
    </>
  )


}

export default App
