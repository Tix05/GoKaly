import { Outlet } from 'react-router-dom'
import HMenu from '../../components/user/HMenu'
import Footer from '../../components/user/Footer'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HMenu />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
