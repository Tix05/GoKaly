import './index.css'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/user/Home'
import Login from './pages/user/Login'
import Layout from './pages/user/Layout'
import Register from './pages/user/Register'
import LoginRestaurant from './pages/restaurant/Login'
import LayoutResto from './pages/restaurant/Layout'
import Dashboard from './pages/restaurant/Dashboard'

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
            {/** USER */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route index path='login' element={<Login />} />
              <Route index path='register' element={<Register />} />
            </Route>

            {/** RESTAURANT */}
            <Route path="/login-restaurant" element={<LoginRestaurant />}></Route>
            <Route path="/dashboard-resto" element={<LayoutResto />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
          </BrowserRouter>

        </body>
      </AnimatePresence>
    </>
  )


}

export default App
