import { NavLink } from 'react-router-dom'
import { BarChart2, MessageCircle, Users, Bell, User, Settings } from 'lucide-react'

const mainLinks = [
  { to: '/learner/dashboard',   label: 'Dashboard',     emoji: '🏠', iconBg: '#f5deb3' },
  { to: '/learner/catalog',     label: 'Course Catalog', emoji: '📂', iconBg: '#deb887' },
  { to: '/learner/assignments', label: 'Assignments',    emoji: '📝', iconBg: '#e8e8e8' },
]

const trackLinks = [
  { to: '/learner/progress',      label: 'Progress',     Icon: BarChart2 },
  { to: '/learner/discussion',    label: 'Discussion',   Icon: MessageCircle },
  { to: '/learner/my-team',       label: 'My Teams',     Icon: Users },
  { to: '/learner/notifications', label: 'Notification', Icon: Bell },
  { to: '/learner/profile',       label: 'Profile',      Icon: User },
  { to: '/learner/settings',      label: 'Settings',     Icon: Settings },
]

const Sidebar = ({ isOpen }) => (
  <aside className={`fixed top-[64px] left-0 h-[calc(100vh-64px)] bg-white border-r border-[#d9d9d9] transition-all duration-300 z-40 overflow-y-auto ${isOpen ? 'w-[220px]' : 'w-0 overflow-hidden'}`}>
    <div className="p-4">
      <p className="text-[10px] font-bold text-[#808080] uppercase tracking-widest mb-3">Main</p>
      <nav className="flex flex-col gap-1 mb-6">
        {mainLinks.map(({ to, label, emoji, iconBg }) => (
          <NavLink key={to} to={to} className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-[#f0f0ff] text-[#000066]' : 'text-[#000066] hover:bg-gray-50'}`}>
            <span className="w-7 h-7 rounded-lg flex items-center justify-center text-base shrink-0" style={{ backgroundColor: iconBg }}>{emoji}</span>
            {label}
          </NavLink>
        ))}
      </nav>
      <p className="text-[10px] font-bold text-[#808080] uppercase tracking-widest mb-3">Track</p>
      <nav className="flex flex-col gap-1">
        {trackLinks.map((link) => (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-[#f0f0ff] text-[#000066]' : 'text-[#000066] hover:bg-gray-50'}`}>
            <span className="w-7 h-7 rounded-lg border border-[#d9d9d9] flex items-center justify-center shrink-0">
              <link.Icon size={14} className="text-[#000066]" />
            </span>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  </aside>
)

export default Sidebar
