import { useState } from 'react'
import { Bell, Lock, Globe, Moon } from 'lucide-react'

const Toggle = ({ value, onChange }) => (
  <button
    onClick={() => onChange(!value)}
    className={`w-10 h-5 rounded-full transition-colors relative ${value ? 'bg-[#000066]' : 'bg-[#d9d9d9]'}`}
  >
    <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${value ? 'translate-x-5' : 'translate-x-0.5'}`} />
  </button>
)

const Settings = () => {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [emailDigest, setEmailDigest] = useState(true)

  return (
    <div className="max-w-[640px] mx-auto">
      <h1 className="text-2xl font-bold text-[#000066] mb-6">Settings</h1>

      {/* Notifications */}
      <div className="bg-white border border-[#d9d9d9] rounded-2xl p-6 mb-4 shadow-sm">
        <h2 className="text-sm font-bold text-[#000066] mb-4 flex items-center gap-2">
          <Bell size={16} /> Notifications
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#333]">Push Notifications</p>
              <p className="text-xs text-[#808080]">Receive notifications about assignments and announcements</p>
            </div>
            <Toggle value={notifications} onChange={setNotifications} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#333]">Email Digest</p>
              <p className="text-xs text-[#808080]">Receive a weekly summary of your learning activity</p>
            </div>
            <Toggle value={emailDigest} onChange={setEmailDigest} />
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-white border border-[#d9d9d9] rounded-2xl p-6 mb-4 shadow-sm">
        <h2 className="text-sm font-bold text-[#000066] mb-4 flex items-center gap-2">
          <Moon size={16} /> Appearance
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-[#333]">Dark Mode</p>
            <p className="text-xs text-[#808080]">Switch to a darker theme</p>
          </div>
          <Toggle value={darkMode} onChange={setDarkMode} />
        </div>
      </div>

      {/* Language */}
      <div className="bg-white border border-[#d9d9d9] rounded-2xl p-6 mb-4 shadow-sm">
        <h2 className="text-sm font-bold text-[#000066] mb-4 flex items-center gap-2">
          <Globe size={16} /> Language &amp; Region
        </h2>
        <div>
          <label className="block text-xs font-medium text-[#555] mb-1">Language</label>
          <select className="w-full border border-[#d9d9d9] rounded-lg px-3 py-2.5 text-sm text-[#333] focus:outline-none focus:border-[#000066]">
            <option>English (US)</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>

      {/* Password */}
      <div className="bg-white border border-[#d9d9d9] rounded-2xl p-6 shadow-sm">
        <h2 className="text-sm font-bold text-[#000066] mb-4 flex items-center gap-2">
          <Lock size={16} /> Security
        </h2>
        <button className="text-sm font-medium text-[#000066] border border-[#000066] px-5 py-2 rounded-lg hover:bg-[#f0f0ff] transition-colors">
          Change Password
        </button>
      </div>
    </div>
  )
}

export default Settings
