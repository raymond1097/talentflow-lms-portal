import { useState } from 'react'

const STATS = [
  { label: 'Members',         value: 5 },
  { label: 'Tasks',           value: 6 },
  { label: 'Done',            value: 5, highlight: true },
  { label: 'Until Deadline',  value: '16d' },
]

const members = [
  { initials: 'EM', name: 'Mr. Emeka',     role: 'UI/UX Intern', color: '#000066', badge: 'LEAD', badgeBg: '#e8e8ff', badgeText: '#000066' },
  { initials: 'AO', name: 'Ada Okonkwo',   role: 'UI/UX Intern', color: '#4f46e5', badge: 'YOU',  badgeBg: '#fef3c7', badgeText: '#92400e' },
  { initials: 'BA', name: 'Bayo Adeyemi',  role: 'UI/UX Intern', color: '#c2410c', badge: null },
  { initials: 'TL', name: 'Temi Lawson',   role: 'UI/UX Intern', color: '#0891b2', badge: null },
  { initials: 'KO', name: 'Kolade Obi',    role: 'UI/UX Intern', color: '#10b981', badge: null },
]

const tasks = [
  { label: 'Create user personas (3)',     assignee: 'Ada Okonkwo',  status: 'Done',    done: true  },
  { label: 'Map user journey flows',       assignee: 'Kolade Obi',   status: 'Done',    done: true  },
  { label: 'Low-fidelity wireframes',      assignee: 'Bayo Adeyemi', status: 'Done',    done: true  },
  { label: 'Desktop wireframes (13 screens)', assignee: 'Ada Okonkwo', status: 'Active', done: false },
  { label: 'Mobile wireframes',            assignee: 'Temi Lawson',  status: 'Active',  done: false },
  { label: 'Define design system',         assignee: 'Kolade Obi',   status: 'Pending', done: false },
  { label: 'High-fidelity UI screens',     assignee: 'Bayo Adeyemi', status: 'Pending', done: false },
  { label: 'Interactive prototype',        assignee: 'Temi Lawson',  status: 'Pending', done: false },
]

const chatMessages = [
  { initials: 'EM', color: '#000066', name: 'Mr. Emeka', text: 'Great work on the wireframes everyone. Let\'s aim to finish the desktop screens by Friday.', self: false },
  { initials: 'KO', color: '#10b981', name: 'Kolade',    text: 'Understood. I\'ll start on the design system tomorrow.', self: false },
  { initials: 'AO', color: '#4f46e5', name: 'Ada',       text: 'Noted. Work in Progress', self: true },
]

const STATUS_STYLE = {
  Done:    'btn-orange text-white text-[10px] font-bold px-3 py-1 rounded-full',
  Active:  'bg-transparent border border-[#10b981] text-[#10b981] text-[10px] font-bold px-3 py-1 rounded-full',
  Pending: 'bg-transparent border border-[#d9d9d9] text-[#808080] text-[10px] font-bold px-3 py-1 rounded-full',
}

const MyTeam = () => {
  const [chatInput, setChatInput] = useState('')

  return (
    <div className="max-w-[900px] mx-auto">
      {/* Mark all read top right */}
      <div className="flex justify-end mb-4">
        <button className="text-xs text-[#000066] font-medium hover:underline">Mark all as read</button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {STATS.map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-[#d9d9d9] p-5 flex flex-col items-center gap-1 shadow-sm">
            <p className={`text-3xl font-bold ${s.highlight ? 'text-[#000066]' : 'text-[#000066]'}`}>{s.value}</p>
            <p className="text-xs text-[#808080]">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Team Members */}
      <div className="mb-6">
        <h2 className="text-base font-bold text-[#000066] mb-4">Team Members</h2>
        <div className="grid grid-cols-3 gap-4">
          {members.map(m => (
            <div key={m.initials} className="bg-white rounded-xl border border-[#d9d9d9] p-4 flex flex-col items-center gap-2 shadow-sm">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ background: m.color }}
              >
                {m.initials}
              </div>
              <p className="text-sm font-semibold text-[#000066]">{m.name}</p>
              {m.badge && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: m.badgeBg, color: m.badgeText }}>
                  {m.badge}
                </span>
              )}
              <p className="text-xs text-[#808080]">{m.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Task Table */}
      <div className="mb-6">
        <div className="bg-white rounded-xl border border-[#d9d9d9] overflow-hidden shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e5e7eb]">
                <th className="text-left text-xs font-semibold text-[#808080] px-4 py-3">Task</th>
                <th className="text-left text-xs font-semibold text-[#808080] px-4 py-3">Assignee</th>
                <th className="text-left text-xs font-semibold text-[#808080] px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t, i) => (
                <tr key={i} className="border-t border-[#f0f0f0]">
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${t.done ? 'bg-[#000066] border-[#000066]' : 'border-[#d9d9d9]'}`}>
                        {t.done && <span className="text-white text-[8px]">✓</span>}
                      </div>
                      <span className="text-sm text-[#333]">{t.label}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2.5 text-sm text-[#333]">{t.assignee}</td>
                  <td className="px-4 py-2.5">
                    <span className={STATUS_STYLE[t.status]}>{t.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Team Chat */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-base font-bold text-[#000066]">Team Chat</h2>
            <div className="flex items-center gap-2 mt-0.5">
              <div className="w-5 h-5 rounded-full bg-[#000066] flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">EM</span>
              </div>
              <span className="text-xs text-[#808080]">UI/UX Design Team \u2014 General</span>
            </div>
          </div>
          <button className="text-xs text-[#000066] font-medium hover:underline">Expand</button>
        </div>

        <div className="bg-white rounded-xl border border-[#d9d9d9] overflow-hidden shadow-sm">
          <div className="p-4 flex flex-col gap-4">
            {chatMessages.map((msg, i) => {
              if (msg.self) return (
                <div key={i} className="flex justify-end">
                  <div className="max-w-[60%] bg-[#e8e8f8] rounded-xl rounded-tr-sm px-4 py-2.5">
                    <p className="text-sm text-[#333]">{msg.text}</p>
                  </div>
                </div>
              )
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: msg.color }}>
                    {msg.initials}
                  </div>
                  <div className="max-w-[70%]">
                    <p className="text-sm text-[#333]">{msg.text}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Chat input */}
          <div className="border-t border-[#e5e7eb] px-4 py-3">
            <div className="flex items-center gap-2 border border-[#d9d9d9] rounded-full px-4 py-2">
              <input
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 text-sm text-[#333] focus:outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyTeam
