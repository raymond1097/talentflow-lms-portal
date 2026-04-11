import { useState } from 'react'
import { Search, Hash, Send, Paperclip } from 'lucide-react'

const channels = [
  { id: 'general',    name: '# general',     preview: 'Emeka: Check Phase 2 doc...' },
  { id: 'ui-ux',      name: '# Ui-Ux course', preview: 'Aisha: Lesson 4 resources up' },
  { id: 'design',     name: '# design-team',  preview: 'Bayo: Anyone free to review?' },
  { id: 'frontend',   name: '# frontend-dev', preview: 'Chidi: CSS task is live' },
]

const directMessages = [
  { id: 'emeka', name: 'Mr. Emeka', preview: 'Hi Ada, great progress!', initials: 'ME', color: '#000066' },
  { id: 'kolade', name: 'Kolade',   preview: 'Done with your flow yet?',  initials: 'KO', color: '#10b981' },
]

const MESSAGES = [
  { id: 1, from: 'general', initials: 'M', name: '',        color: '#000066', text: '# general\n32 members. All Interns and Instructors', isHeader: true },
  { id: 2, from: 'emeka',   initials: 'ME', name: 'Mr. Emeka', color: '#000066', text: 'Hey everyone. Phase 2 project doc has been shared. Please check the Figma link and start your assigned sections.' },
  { id: 3, from: 'kolade',  initials: 'KO', name: 'Kolade',   color: '#10b981', text: 'Got it! Starting on wireframes now.' },
  { id: 4, from: 'me',      initials: 'KO', name: '',          color: '#10b981', text: 'Working on user flow now. Will share by tonight.', isSelf: true },
  { id: 5, from: 'bayo',    initials: 'BA', name: 'Bayo',     color: '#c2410c', text: 'Anyone need help with the design system? I can share my colour tokens file.' },
]

const Discussion = () => {
  const [activeChannel, setActiveChannel] = useState('general')
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')

  return (
    <div className="flex h-[calc(100vh-100px)] max-w-[1100px] mx-auto bg-white rounded-xl border border-[#d9d9d9] overflow-hidden shadow-sm">
      {/* Left sidebar */}
      <div className="w-[220px] shrink-0 border-r border-[#e5e7eb] bg-white flex flex-col">
        {/* Search */}
        <div className="p-3 border-b border-[#e5e7eb]">
          <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-lg px-3 py-1.5">
            <Search size={13} className="text-[#808080]" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search"
              className="bg-transparent text-xs text-[#333] flex-1 focus:outline-none"
            />
          </div>
        </div>

        {/* Channels */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-3 pt-3 pb-1">
            <p className="text-[10px] font-bold text-[#808080] uppercase tracking-wider mb-1">Channels</p>
            {channels.map(ch => (
              <button
                key={ch.id}
                onClick={() => setActiveChannel(ch.id)}
                className={`w-full text-left px-2 py-1.5 rounded-lg mb-0.5 transition-colors ${
                  activeChannel === ch.id ? 'bg-[#f0f0ff]' : 'hover:bg-[#f5f5f5]'
                }`}
              >
                <p className={`text-xs font-medium ${activeChannel === ch.id ? 'text-[#000066]' : 'text-[#333]'}`}>{ch.name}</p>
                <p className="text-[10px] text-[#808080] truncate">{ch.preview}</p>
              </button>
            ))}
          </div>

          <div className="px-3 pt-3 pb-1">
            <p className="text-[10px] font-bold text-[#808080] uppercase tracking-wider mb-1">Direct Messages</p>
            {directMessages.map(dm => (
              <button
                key={dm.id}
                onClick={() => setActiveChannel(dm.id)}
                className={`w-full text-left flex items-center gap-2 px-2 py-1.5 rounded-lg mb-0.5 transition-colors ${
                  activeChannel === dm.id ? 'bg-[#f0f0ff]' : 'hover:bg-[#f5f5f5]'
                }`}
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold shrink-0" style={{ background: dm.color }}>
                  {dm.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[#333] truncate">{dm.name}</p>
                  <p className="text-[10px] text-[#808080] truncate">{dm.preview}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
          {MESSAGES.map(msg => {
            if (msg.isHeader) return (
              <div key={msg.id} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: msg.color }}>
                  <Hash size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#000066]"># general</p>
                  <p className="text-xs text-[#808080]">32 members. All Interns and Instructors</p>
                </div>
              </div>
            )

            if (msg.isSelf) return (
              <div key={msg.id} className="flex justify-end">
                <div className="max-w-[55%] bg-[#e8e8f8] rounded-xl rounded-tr-sm px-4 py-2.5 relative">
                  <p className="text-sm text-[#333]">{msg.text}</p>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold absolute -top-1 -right-8" style={{ background: msg.color }}>
                    {msg.initials}
                  </div>
                </div>
              </div>
            )

            return (
              <div key={msg.id} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: msg.color }}>
                  {msg.initials}
                </div>
                <div className="max-w-[65%]">
                  <p className="text-xs font-semibold text-[#000066] mb-0.5">{msg.name}</p>
                  <p className="text-sm text-[#333]">{msg.text}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Input */}
        <div className="border-t border-[#e5e7eb] p-3">
          <div className="flex items-center gap-2 border border-[#d9d9d9] rounded-full px-4 py-2">
            <Paperclip size={16} className="text-[#808080] shrink-0" />
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') setInput('') }}
              placeholder="Type a message....."
              className="flex-1 text-sm text-[#333] focus:outline-none"
            />
            <button onClick={() => setInput('')} className="text-[#000066] hover:opacity-70 transition-opacity">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discussion
