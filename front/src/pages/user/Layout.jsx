import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import HMenu from '../../components/user/HMenu'
import Footer from '../../components/user/Footer'

const Layout = () => {
  const [logged, setLogged] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <HMenu logged={logged} setLogged={setLogged} />

      <main>
        <Outlet context={{ logged, setLogged }} />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
