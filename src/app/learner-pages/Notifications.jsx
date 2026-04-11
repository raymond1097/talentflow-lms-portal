import { useState } from 'react'

const TABS = ['All', 'Assignments', 'Announcements', 'Messages', 'Grades']

const BADGE_STYLE = {
  Assignment:   'bg-[#000045] text-white',
  Announcement: 'bg-[#000045] text-white',
  Grade:        'border border-[#d9d9d9] text-[#333]',
  Reminder:     'border border-[#d9d9d9] text-[#333]',
  Message:      'border border-[#d9d9d9] text-[#333]',
}

const notifications = [
  {
    id: 1,
    type: 'Assignment',
    title: 'New Assignment: User Flow Diagram',
    body: 'Mr. Emeka posted a new assignment in UI/UX Fundamentals. Due 25 Mar 2026.',
    time: '10 mins ago',
    emoji: '\uD83D\uDCCB',
    emojiLabel: 'assignment',
  },
  {
    id: 2,
    type: 'Announcement',
    title: 'Phase 2 kick-off \u2014 Today at 3pm',
    body: 'All interns must attend the Zoom call. Link is in your email.',
    time: '1 hr ago',
    emoji: '\uD83D\uDCF9',
    emojiLabel: 'zoom',
    isZoom: true,
  },
  {
    id: 3,
    type: 'Grade',
    title: 'Grade Released: Brand Moodboard',
    body: 'Your assignment has been graded. You scored 85/100.',
    time: 'Yesterday',
    emoji: '\uD83C\uDF96\uFE0F',
    emojiLabel: 'grade',
  },
  {
    id: 4,
    type: 'Reminder',
    title: 'Reminder: Brand Identity 101',
    body: "You haven't continued this course in 3 days. Pick up where you left off.",
    time: '2 days ago',
    emoji: '\uD83D\uDCDA',
    emojiLabel: 'reminder',
  },
  {
    id: 5,
    type: 'Message',
    title: 'Mr. Emeka replied in #ui-ux-course',
    body: '\u201cGreat question Ada, see my response below...\u201d',
    time: 'Yesterday',
    emoji: '\uD83D\uDCAC',
    emojiLabel: 'message',
  },
]

const tabFilter = {
  All:           () => true,
  Assignments:   n => n.type === 'Assignment',
  Announcements: n => n.type === 'Announcement',
  Messages:      n => n.type === 'Message',
  Grades:        n => n.type === 'Grade',
}

const Notifications = () => {
  const [tab, setTab] = useState('All')

  const filtered = notifications.filter(tabFilter[tab])

  return (
    <div className="max-w-[760px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-[#000066]">Notifications</h1>
        <button className="text-xs text-[#000066] font-medium hover:underline">Mark all as read</button>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b border-[#d9d9d9] mb-5">
        {TABS.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
              tab === t ? 'border-[#000066] text-[#000066]' : 'border-transparent text-[#808080] hover:text-[#000066]'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Notification items */}
      <div className="flex flex-col gap-3">
        {filtered.map(n => (
          <div key={n.id} className="flex items-start gap-4 bg-white border border-[#e5e7eb] rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            {/* Icon */}
            <div className="w-10 h-10 rounded-full bg-[#f0f0ff] flex items-center justify-center text-lg shrink-0">
              {n.emoji}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#000066]">{n.title}</p>
              <p className="text-xs text-[#555] mt-0.5 leading-relaxed">{n.body}</p>
              <p className="text-[10px] text-[#808080] mt-1">{n.time}</p>
            </div>

            {/* Badge */}
            <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full shrink-0 ${BADGE_STYLE[n.type]}`}>
              {n.type}
            </span>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-[#808080] text-center py-10">No notifications in this category.</p>
        )}
      </div>
    </div>
  )
}

export default Notifications
