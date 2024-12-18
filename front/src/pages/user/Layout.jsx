import { Outlet } from 'react-router-dom'
import HMenu from '../../components/user/HMenu'
import Footer from '../../components/user/Footer'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HMenu />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
