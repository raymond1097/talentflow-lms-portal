import { BookOpen, CheckSquare, Clock, TrendingUp, Bell, Video, Award } from 'lucide-react'
import uiuxThumb from '../../assets/Frame 109.jpg'
import brandThumb from '../../assets/Rectangle 53973.jpg'
import htmlThumb from '../../assets/Rectangle 53975.jpg'

const stats = [
  { label: 'Courses Enrolled',    value: '6',   Icon: BookOpen,    border: 'border-[#d9d9d9]' },
  { label: 'Courses Completed',   value: '1',   Icon: CheckSquare, border: 'border-[#d9d9d9]' },
  { label: 'Assignments Due',     value: '3',   Icon: Clock,       border: 'border-[#d9d9d9]' },
  { label: 'In Progress',         value: '42%', Icon: TrendingUp,  border: 'border-[#d9d9d9]' },
]

const recentCourses = [
  { id: 1, title: 'UI/UX Fundamentals',  instructor: 'Mr. Emeka', category: 'UI/UX',     progress: 65,  thumb: uiuxThumb },
  { id: 2, title: 'Brand Identity 101',  instructor: 'Ms. Aisha', category: 'Design',    progress: 36,  thumb: brandThumb },
  { id: 3, title: 'HTML & CSS Basics',   instructor: 'Mr. Chidi', category: 'Frontend',  progress: 0,   thumb: htmlThumb },
]

const ANNOUNCEMENT_ICONS = {
  meeting:     { Icon: Video, bg: 'bg-[#eff6ff]', color: 'text-[#1d4ed8]' },
  deadline:    { Icon: Clock, bg: 'bg-[#fff7ed]', color: 'text-[#c2410c]' },
  achievement: { Icon: Award, bg: 'bg-[#f0fdf4]', color: 'text-[#10b981]' },
}

const announcements = [
  { id: 1, type: 'meeting',     title: 'Phase 2 kick-off meeting — Today 3 pm',        time: '9:00 AM' },
  { id: 2, type: 'deadline',    title: 'Assignment 1 deadline extended to 28 March',       time: 'Yesterday' },
  { id: 3, type: 'achievement', title: 'You earned the “First Submission” badge!', time: '2 days ago' },
]

const upcomingAssignments = [
  { title: 'User Flow Diagram',        course: 'UI/UX Fundamentals',   due: '25 Mar', daysLeft: '0 days', status: 'Pending' },
  { title: 'Brand Identity Deck',      course: 'Brand Identity 101',   due: '28 Mar', daysLeft: '4 days', status: 'Not Started' },
  { title: 'Wireframe Set — Lo-Fi', course: 'UI/UX Fundamentals', due: '31 Mar', daysLeft: '7 days', status: 'Draft Saved' },
]

const statusColor = {
  'Pending':     'text-[#ff7a00]',
  'Not Started': 'text-[#808080]',
  'Draft Saved': 'text-[#1d4ed8]',
  'Submitted':   'text-[#10b981]',
}

const Dashboard = () => (
  <div className="max-w-[1100px] mx-auto">
    {/* Stats */}
    <div className="grid grid-cols-4 gap-4 mb-8">
      {stats.map((s) => (
        <div key={s.label} className={`bg-white rounded-xl border ${s.border} p-5 flex flex-col items-center justify-center gap-1 shadow-sm`}>
          <s.Icon size={22} className="text-[#000066] mb-1" />
          <p className="text-2xl font-bold text-[#000066]">{s.value}</p>
          <p className="text-xs text-[#808080] text-center">{s.label}</p>
        </div>
      ))}
    </div>

    {/* Continue Learning */}
    <div className="bg-white rounded-xl border border-[#d9d9d9] p-5 shadow-sm mb-6">
      <h2 className="text-base font-bold text-[#000066] mb-4">Continue Learning</h2>
      <div className="grid grid-cols-3 gap-4">
        {recentCourses.map(course => (
          <div key={course.id} className="border border-[#d9d9d9] rounded-xl overflow-hidden">
            <div className="h-[110px] overflow-hidden">
              <img src={course.thumb} alt={course.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <p className="text-xs font-bold text-[#000066] mb-1 leading-tight">{course.title}</p>
              <p className="text-[10px] text-[#808080] mb-2">by {course.instructor}</p>
              <div className="flex items-center gap-1 mb-2">
                <div className="flex-1 h-1 bg-[#f0f0f0] rounded-full overflow-hidden">
                  <div className="h-full bg-[#10b981] rounded-full" style={{ width: `${course.progress}%` }} />
                </div>
                <span className="text-[9px] text-[#808080]">{course.progress}%</span>
              </div>
              <button className="w-full bg-[#000045] text-white text-[10px] font-medium py-1.5 rounded-lg hover:bg-[#000033] transition-colors">
                {course.progress > 0 ? 'Resume' : 'Start'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Announcements */}
    <div className="bg-white rounded-xl border border-[#d9d9d9] p-5 shadow-sm mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Bell size={16} className="text-[#000066]" />
        <h2 className="text-base font-bold text-[#000066]">Announcements</h2>
      </div>
      <div className="flex flex-col gap-3">
        {announcements.map((item) => {
          const { Icon, bg, color } = ANNOUNCEMENT_ICONS[item.type]
          return (
            <div key={item.id} className="border border-[#e5e5e5] rounded-lg p-3 flex items-start gap-3">
              <div className={`w-8 h-8 ${bg} rounded-lg shrink-0 flex items-center justify-center mt-0.5`}>
                <Icon size={14} className={color} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-[#000066] leading-snug">{item.title}</p>
                <p className="text-[10px] text-[#808080] mt-0.5">{item.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>

    {/* Upcoming Assignments */}
    <div className="bg-white rounded-xl border border-[#d9d9d9] shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-[#f0f0f0]">
        <h2 className="text-base font-bold text-[#000066]">Upcoming Assignments</h2>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-[#000066] text-white">
            <th className="text-left text-xs font-semibold px-5 py-3">Assignment</th>
            <th className="text-left text-xs font-semibold px-4 py-3">Course</th>
            <th className="text-left text-xs font-semibold px-4 py-3">Due Date</th>
            <th className="text-left text-xs font-semibold px-4 py-3">Days Left</th>
            <th className="text-left text-xs font-semibold px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {upcomingAssignments.map((a, i) => (
            <tr key={i} className={`border-t border-[#f0f0f0] ${i % 2 === 0 ? '' : 'bg-[#f9f9f9]'}`}>
              <td className="px-5 py-3 text-sm font-medium text-[#000066]">{a.title}</td>
              <td className="px-4 py-3 text-sm text-[#000066]">{a.course}</td>
              <td className="px-4 py-3 text-sm text-[#000066]">{a.due}</td>
              <td className="px-4 py-3 text-sm text-[#000066]">{a.daysLeft}</td>
              <td className={`px-4 py-3 text-sm font-medium ${statusColor[a.status] || 'text-[#000066]'}`}>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

export default Dashboard
