import { useState } from 'react'
import { Clock, BookOpen, CheckCircle, AlertCircle, Bell } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const STATS = [
  { label: 'Pending',      value: 3, icon: Clock,        red: false },
  { label: 'Submitted',    value: 2, icon: BookOpen,      red: false },
  { label: 'Graded',       value: 2, icon: CheckCircle,   red: false },
  { label: 'Due Today!',   value: 1, icon: AlertCircle,   red: true  },
]

const assignments = [
  { id: 1, title: 'User Flow Diagram',          course: 'UI/UX Fundamentals',    due: 'Today · 11:59 PM', daysLeft: '0 days', status: 'Pending',      score: '---',    action: 'Submit' },
  { id: 2, title: 'Brand Identity Deck',        course: 'Brand Identity 101',    due: '28 Mar 2026',      daysLeft: '4 days', status: 'Not Started',  score: '---',    action: 'Start' },
  { id: 3, title: 'Wireframe Set — Lo-Fi',      course: 'UI/UX Fundamentals',    due: '31 Mar 2026',      daysLeft: '7 days', status: 'Draft Saved',  score: '---',    action: 'Continue' },
  { id: 4, title: 'User Persona Document',      course: 'UI/UX Fundamentals',    due: '20 Mar 2026',      daysLeft: 'Closed', status: 'Submitted',    score: '---',    action: 'View' },
  { id: 5, title: 'Social Media Content Plan',  course: 'Social Media Strategy', due: '10 Mar 2026',      daysLeft: 'Closed', status: 'Submitted',    score: 'Pending', action: 'View' },
  { id: 6, title: 'Social Media Audit',         course: 'Social Media Strategy', due: '5 Mar 2026',       daysLeft: 'Closed', status: 'Graded',       score: '91/100', action: 'See feedback' },
]

const ACTION_STYLE = {
  Submit:       'btn-orange text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity',
  Start:        'btn-orange text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity',
  Continue:     'btn-orange text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity',
  View:         'bg-[#000045] text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity',
  'See feedback': 'bg-[#000045] text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity',
}

const AssignmentList = () => {
  const [tab, setTab] = useState('All')
  const navigate = useNavigate()
  const tabs = ['All (4)', 'Pending (3)', 'Submitted(2)', 'Graded(2)']
  const tabKey = tab.replace(/\s*\(\d+\)/, '').toLowerCase()
  const filtered = tabKey === 'all'
    ? assignments
    : assignments.filter(a => a.status.toLowerCase().includes(tabKey))

  // All actions go to AssignmentDetails first.
  // Only the Submit button inside AssignmentDetails can reach AssignmentSubmit,
  // and only after the title and file have been filled in.
  const handleAction = () => {
    navigate('/learner/assignments/details')
  }

  return (
    <div className="max-w-[1100px] mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-1">
        <div>
          <h1 className="text-2xl font-bold text-[#000066]">Assignments</h1>
          <p className="text-xs text-[#000066] mt-0.5">All assignments across your enrolled courses</p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-[#808080]">Sort:</span>
          <select className="text-xs border border-[#d9d9d9] rounded-lg px-2 py-1.5 text-[#000066] focus:outline-none focus:border-[#000066]">
            <option>Most Popular</option>
            <option>Due Date</option>
            <option>Recent</option>
          </select>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4 my-5">
        {STATS.map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-[#d9d9d9] p-5 flex flex-col items-center gap-2 shadow-sm">
            <s.icon size={22} className={s.red ? 'text-red-500' : 'text-[#000066]'} strokeWidth={1.5} />
            <p className={`text-3xl font-bold ${s.red ? 'text-red-500' : 'text-[#000066]'}`}>{s.value}</p>
            <p className={`text-xs ${s.red ? 'text-red-500 font-semibold' : 'text-[#808080]'}`}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Urgent Banner */}
      <div className="flex items-center gap-3 bg-white border border-[#e5e7eb] rounded-xl p-4 mb-5 shadow-sm">
        <Bell size={18} className="text-[#ff7a00] shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-[#000066]">Urgent — User Flow Diagram is due TODAY at 11:59 PM</p>
          <p className="text-xs text-[#808080] mt-0.5">Course: UI/UX Fundamentals · You haven&apos;t submitted yet</p>
        </div>
        <button
          onClick={() => navigate('/learner/assignments/details')}
          className="bg-[#000045] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#000033] transition-colors shrink-0"
        >
          Submit Now →
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b border-[#d9d9d9] mb-4">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
              tab === t ? 'border-[#000066] text-[#000066]' : 'border-transparent text-[#808080] hover:text-[#000066]'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#d9d9d9] overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-[#000066] text-white">
              <th className="text-left text-xs font-semibold px-4 py-3">Assignment</th>
              <th className="text-left text-xs font-semibold px-4 py-3">Course</th>
              <th className="text-left text-xs font-semibold px-4 py-3">Due Date</th>
              <th className="text-left text-xs font-semibold px-4 py-3">Days Left</th>
              <th className="text-left text-xs font-semibold px-4 py-3">Status</th>
              <th className="text-left text-xs font-semibold px-4 py-3">Score</th>
              <th className="text-left text-xs font-semibold px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a, i) => (
              <tr key={a.id} className={`border-t border-[#f0f0f0] ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}`}>
                <td className="px-4 py-3 text-sm font-medium text-[#000066]">{a.title}</td>
                <td className="px-4 py-3 text-sm text-[#333]">{a.course}</td>
                <td className="px-4 py-3 text-sm text-[#333]">{a.due}</td>
                <td className="px-4 py-3 text-sm text-[#333]">{a.daysLeft}</td>
                <td className="px-4 py-3 text-sm text-[#333]">{a.status}</td>
                <td className="px-4 py-3 text-sm text-[#333]">{a.score}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleAction(a.action)}
                    className={ACTION_STYLE[a.action]}
                  >
                    {a.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AssignmentList
