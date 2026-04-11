import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const allocations = [
  { member: 'Temi Adeyemi',   course: 'UI/UX Fundamentals',    role: 'Learner',  progress: 72,  status: 'in-progress' },
  { member: 'Chidi Okonkwo',  course: 'HTML & CSS Basics',     role: 'Learner',  progress: 45,  status: 'in-progress' },
  { member: 'Ngozi Balogun',  course: 'Product Management',    role: 'Lead',     progress: 90,  status: 'completed' },
  { member: 'Bayo Adesanya',  course: 'Graphic Design Tools',  role: 'Learner',  progress: 60,  status: 'in-progress' },
  { member: 'Aisha Mohammed', course: 'Brand Identity 101',    role: 'Lead',     progress: 55,  status: 'in-progress' },
  { member: 'Temi Adeyemi',   course: 'Social Media Strategy', role: 'Reviewer', progress: 100, status: 'completed' },
]

const TeamAllocation = () => {
  const navigate = useNavigate()
  return (
    <div className="max-w-[1100px] mx-auto">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-[#000066] mb-4 hover:opacity-70 transition-opacity">
        <ArrowLeft size={16} /> Back to My Team
      </button>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#000066]">Team Allocation</h1>
        <p className="text-sm text-[#808080] mt-1">Course assignments across your team</p>
      </div>
      <div className="bg-white rounded-xl border border-[#d9d9d9] overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-[#000066] text-white">
              <th className="text-left text-xs font-semibold px-4 py-3">Team Member</th>
              <th className="text-left text-xs font-semibold px-4 py-3">Course</th>
              <th className="text-left text-xs font-semibold px-4 py-3">Role</th>
              <th className="text-left text-xs font-semibold px-4 py-3">Progress</th>
              <th className="text-left text-xs font-semibold px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {allocations.map((a, i) => (
              <tr key={i} className={`border-t border-[#f0f0f0] ${i % 2 === 0 ? '' : 'bg-[#f9f9f9]'}`}>
                <td className="px-4 py-3 text-sm font-medium text-[#000066]">{a.member}</td>
                <td className="px-4 py-3 text-sm text-[#000066]">{a.course}</td>
                <td className="px-4 py-3"><span className="text-xs bg-[#f0f0f0] text-[#000066] px-2 py-0.5 rounded font-medium">{a.role}</span></td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 w-[140px]">
                    <div className="flex-1 h-1.5 bg-[#f0f0f0] rounded-full overflow-hidden">
                      <div className="h-full bg-[#10b981] rounded-full" style={{ width: `${a.progress}%` }} />
                    </div>
                    <span className="text-xs text-[#000066] shrink-0">{a.progress}%</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${a.status === 'completed' ? 'bg-[#f0fdf4] text-[#10b981]' : 'bg-[#eff6ff] text-[#1d4ed8]'}`}>
                    {a.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TeamAllocation
