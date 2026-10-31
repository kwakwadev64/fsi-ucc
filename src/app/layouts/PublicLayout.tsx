import { Outlet } from 'react-router-dom'
import PublicChatbot from '@/features/public-chatbot/PublicChatbot'
import Navbar from '@/shared/ui/Navbar'
import Footer from '@/shared/ui/Footer'

export default function PublicLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <PublicChatbot />
      <Footer />
    </div>
  )
}
