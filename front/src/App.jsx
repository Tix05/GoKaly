import './index.css'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/user/Home'
import Layout from './pages/user/Layout'

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
          <BrowserRouter><Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

            </Route>
          </Routes>
            <Routes>
            </Routes>
          </BrowserRouter>

        </body>
      </AnimatePresence>
    </>
  )


}

export default App
