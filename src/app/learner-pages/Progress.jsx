import { BookOpen, Award, ClipboardList, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const STATS = [
  { label: 'Courses Enrolled',   value: 6,    icon: BookOpen,      suffix: '' },
  { label: 'Courses Completed',  value: 1,    icon: Award,         suffix: '' },
  { label: 'Assignments Due',    value: 3,    icon: ClipboardList, suffix: '' },
  { label: 'In Progress',        value: '42%', icon: TrendingUp,   suffix: '' },
]

const courseProgress = [
  { name: 'UI/UX Fundamentals',   category: 'UI/UX',  progress: 65,  status: 'In Progress', action: 'Continue' },
  { name: 'Brand Identity 101',   category: 'Design', progress: 36,  status: 'In Progress', action: 'Continue' },
  { name: 'Social Media Strategy',category: 'Social', progress: 100, status: 'Completed',   action: 'View Certificate' },
]

const assignmentStatus = [
  { title: 'User Flow Diagram',      course: 'UI/UX Fundamentals', due: '25 Mar', status: 'Pending' },
  { title: 'Brand Identity Deck',    course: 'Brand Identity 101', due: '25 Mar', status: 'Graded'  },
  { title: 'Wireframe Set \u2014 Lo-Fi', course: 'UI/UX Fundamentals', due: '15 Mar', status: 'Graded' },
]

const Progress = () => {
  const navigate = useNavigate()

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-2xl font-bold text-[#000066] mb-5">My Progress</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4 mb-7">
        {STATS.map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-[#d9d9d9] p-5 flex flex-col items-center gap-2 shadow-sm">
            <s.icon size={20} className="text-[#000066]" strokeWidth={1.5} />
            <p className="text-3xl font-bold text-[#000066]">{s.value}</p>
            <p className="text-xs text-[#808080] text-center">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Course Progress Table */}
      <div className="mb-7">
        <h2 className="text-base font-bold text-[#000066] mb-3">Course Progress</h2>
        <div className="bg-white rounded-xl border border-[#d9d9d9] overflow-hidden shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-[#000066] text-white">
                <th className="text-left text-xs font-semibold px-4 py-3">Course Name</th>
                <th className="text-left text-xs font-semibold px-4 py-3">Category</th>
                <th className="text-left text-xs font-semibold px-4 py-3">Progress</th>
                <th className="text-left text-xs font-semibold px-4 py-3">Status</th>
                <th className="text-left text-xs font-semibold px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {courseProgress.map((c, i) => (
                <tr key={c.name} className={`border-t border-[#f0f0f0] ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}`}>
                  <td className="px-4 py-3 text-sm font-medium text-[#000066]">{c.name}</td>
                  <td className="px-4 py-3 text-sm text-[#333]">{c.category}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-[#e5e7eb] rounded-full overflow-hidden" style={{ maxWidth: 120 }}>
                        <div
                          className="h-full rounded-full bg-[#10b981]"
                          style={{ width: `${c.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-[#555] shrink-0">
                        {c.status === 'Completed' ? 'Done' : `${c.progress}%`}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-semibold ${c.status === 'Completed' ? 'text-[#000066]' : 'text-[#10b981]'}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {c.action === 'Continue' && (
                      <button className="btn-orange text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity">
                        Continue
                      </button>
                    )}
                    {c.action === 'View Certificate' && (
                      <button
                        onClick={() => navigate('/learner/certificates')}
                        className="bg-[#000045] text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-[#000033] transition-colors"
                      >
                        View Certificate
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Assignment Status Table */}
      <div>
        <h2 className="text-base font-bold text-[#000066] mb-3">Assignment Status</h2>
        <div className="bg-white rounded-xl border border-[#d9d9d9] overflow-hidden shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-[#000066] text-white">
                <th className="text-left text-xs font-semibold px-4 py-3">Assignment</th>
                <th className="text-left text-xs font-semibold px-4 py-3">Course</th>
                <th className="text-left text-xs font-semibold px-4 py-3">Due Date</th>
                <th className="text-left text-xs font-semibold px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {assignmentStatus.map((a, i) => (
                <tr key={a.title} className={`border-t border-[#f0f0f0] ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}`}>
                  <td className="px-4 py-3 text-sm font-medium text-[#000066]">{a.title}</td>
                  <td className="px-4 py-3 text-sm text-[#333]">{a.course}</td>
                  <td className="px-4 py-3 text-sm text-[#333]">{a.due}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium ${a.status === 'Pending' ? 'text-[#808080]' : 'text-[#10b981]'}`}>
                      {a.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Progress
