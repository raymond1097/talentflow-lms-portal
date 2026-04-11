import { Bell, User, Search, Menu } from 'lucide-react'

const Navbar = ({ onToggleSidebar }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#d9d9d9] h-[64px] flex items-center px-4">
      <div className="flex items-center gap-3 w-[220px] shrink-0">
        <button onClick={onToggleSidebar} className="p-2 rounded-lg hover:bg-gray-100 text-[#000066] transition-colors">
          <Menu size={20} />
        </button>
        <img src="/logo.png" alt="TalentFlow Logo" className="w-28" />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-[400px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#808080]" />
          <input type="text" placeholder="Search courses, topics..." className="w-full pl-9 pr-4 py-2 rounded-lg border border-[#d9d9d9] text-sm text-[#000066] placeholder:text-[#808080] focus:outline-none focus:border-[#000066] bg-[#f9f9f9]" />
        </div>
      </div>
      <div className="flex items-center gap-3 w-[220px] justify-end shrink-0">
        <button className="relative p-2 rounded-lg hover:bg-gray-100 text-[#000066] transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ff7a00] rounded-full" />
        </button>
        <button className="w-9 h-9 rounded-full bg-[#000045] flex items-center justify-center text-white hover:bg-[#000033] transition-colors">
          <User size={18} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
