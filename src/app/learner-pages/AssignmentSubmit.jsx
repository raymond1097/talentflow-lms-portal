import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const AssignmentSubmit = () => {
  const navigate = useNavigate()

  return (
    <div className="max-w-[680px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#808080] mb-8">
        <button onClick={() => navigate('/learner/assignments')} className="hover:text-[#000066] transition-colors">Assignment</button>
        <ChevronRight size={12} />
        <span className="text-[#000066] font-medium">User Flow Diagram</span>
        <ChevronRight size={12} />
      </div>

      {/* Success card */}
      <div className="flex items-center justify-center mt-16">
        <div className="border border-[#d9d9d9] rounded-xl px-16 py-12 text-center">
          <h2 className="text-2xl font-bold text-[#000066]">Assignment Submitted</h2>
          <h2 className="text-2xl font-bold text-[#000066]">successfully</h2>
        </div>
      </div>
    </div>
  )
}

export default AssignmentSubmit
