import { ChevronRight, Download, Link, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Certificate = () => {
  const navigate = useNavigate()

  return (
    <div className="max-w-[600px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#808080] mb-6">
        <button onClick={() => navigate('/learner/progress')} className="hover:text-[#000066] transition-colors">Progress</button>
        <ChevronRight size={12} />
        <span className="text-[#000066] font-medium">Certificate</span>
        <ChevronRight size={12} />
      </div>

      {/* Certificate card */}
      <div className="bg-[#000045] rounded-2xl p-10 text-center text-white mb-6">
        <p className="text-xs font-medium tracking-wider uppercase opacity-80 mb-3">Certificate of Completion</p>
        <p className="text-xs opacity-70 mb-2">This certifies that</p>
        <h1 className="text-2xl font-bold mb-3">Ada Okonkwo</h1>
        <p className="text-xs opacity-70 mb-1">has successfully completed all lessons and assignments in</p>
        <h2 className="text-lg font-bold mb-1">Social Media Strategy</h2>
        <p className="text-xs opacity-70 mb-8">offered by TalentFlow Learning Platform</p>

        {/* Graduation icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center">
            <span className="text-3xl">\uD83C\uDF93</span>
          </div>
        </div>

        {/* Date and ID */}
        <p className="text-xs opacity-70 mb-8">Issued: March 27, 2026 &nbsp;&middot;&nbsp; ID: TF-CERT-0047</p>

        {/* Signatures */}
        <div className="flex justify-between items-end px-6">
          <div className="text-left">
            <div className="w-20 h-px bg-white/40 mb-2" />
            <p className="text-xs font-semibold">Mr. Emeka</p>
            <p className="text-[10px] opacity-70">Instructor</p>
          </div>
          <div className="text-right">
            <div className="w-20 h-px bg-white/40 mb-2 ml-auto" />
            <p className="text-xs font-semibold">Programme Director</p>
            <p className="text-[10px] opacity-70">&nbsp;</p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col gap-2 mb-8 items-center">
        <button className="flex items-center gap-2 border border-[#d9d9d9] text-[#333] text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors w-48 justify-center">
          <Download size={15} /> Download PDF
        </button>
        <button className="flex items-center gap-2 border border-[#d9d9d9] text-[#333] text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors w-48 justify-center">
          <Link size={15} /> Copy Share Link
        </button>
        <button className="flex items-center gap-2 border border-[#d9d9d9] text-[#333] text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors w-48 justify-center">
          <User size={15} /> View on Profile
        </button>
      </div>

      {/* Certificate Details */}
      <div>
        <h2 className="text-sm font-bold text-[#000066] mb-2">Certificate Details</h2>
        <div className="space-y-1">
          <p className="text-sm text-[#000066] font-medium">Course: <span className="font-normal text-[#333]">Social Media Strategy</span></p>
          <p className="text-sm text-[#000066] font-medium">Issued: <span className="font-normal text-[#333]">March 27, 2026</span></p>
          <p className="text-sm text-[#000066] font-medium">ID: <span className="font-normal text-[#333]">TF-CERT-0047</span></p>
          <p className="text-sm text-[#000066] font-medium">Issued by: <span className="font-normal text-[#333]">Trueminds Innovations</span></p>
        </div>
      </div>
    </div>
  )
}

export default Certificate
