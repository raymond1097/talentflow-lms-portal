import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const LearnerLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar onToggleSidebar={() => setSidebarOpen(prev => !prev)} />
      <Sidebar isOpen={sidebarOpen} />
      <main className={`transition-all duration-300 pt-[64px] min-h-screen ${sidebarOpen ? 'ml-[220px]' : 'ml-0'}`}>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default LearnerLayout