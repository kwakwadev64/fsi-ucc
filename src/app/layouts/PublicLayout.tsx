import { Outlet } from 'react-router-dom'
import Navbar from '@/shared/ui/Navbar'
import Footer from '@/shared/ui/Footer'

export default function PublicLayout() {
  return (
    <div className="min-h-screen">
      <Navbar compact />
      <Outlet />
      <Footer />
    </div>
  )
}
