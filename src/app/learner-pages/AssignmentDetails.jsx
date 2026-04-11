import { useState, useRef } from 'react'
import { ChevronRight, Bell, Check, Upload } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const checklist = [
  'Cover at least 3 core user journeys per role',
  'Include decision points and error states',
  'Use standard flowchart symbols',
  'Export as PDF or PNG at minimum 1920px wide Marking Rubric',
]

const AssignmentDetails = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [file, setFile] = useState(null)
  const [touched, setTouched] = useState(false)
  const fileRef = useRef()

  const handleFile = (e) => {
    if (e.target.files[0]) setFile(e.target.files[0])
  }

  const handleDrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0])
  }

  const isReady = title.trim().length > 0 && file !== null

  const handleSubmit = () => {
    setTouched(true)
    if (!isReady) return
    navigate('/learner/assignments/submit')
  }

  return (
    <div className="max-w-[680px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#808080] mb-5">
        <button onClick={() => navigate('/learner/assignments')} className="hover:text-[#000066] transition-colors">Assignment</button>
        <ChevronRight size={12} />
        <span className="text-[#000066] font-medium">User Flow Diagram</span>
        <ChevronRight size={12} />
      </div>

      {/* Badges */}
      <div className="flex gap-2 mb-4">
        <span className="text-xs bg-[#eef0ff] text-[#000066] font-medium px-3 py-1 rounded-full border border-[#c7cff5]">
          UI/UX Fundamentals
        </span>
        <span className="text-xs bg-[#eef0ff] text-[#000066] font-medium px-3 py-1 rounded-full border border-[#c7cff5]">
          Due: 25 Mar 2026
        </span>
      </div>

      {/* Urgent Banner */}
      <div className="flex items-start gap-3 bg-white border border-[#e5e7eb] rounded-xl p-4 mb-6 shadow-sm">
        <Bell size={16} className="text-[#ff7a00] mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-[#000066]">Urgent \u2014 User Flow Diagram is due TODAY at 11:59 PM</p>
          <p className="text-xs text-[#808080] mt-0.5">Course: UI/UX Fundamentals \u00b7 You haven&apos;t submitted yet</p>
        </div>
      </div>

      {/* Brief */}
      <div className="mb-6">
        <h2 className="text-base font-bold text-[#000066] mb-2">Brief</h2>
        <p className="text-sm text-[#555] leading-relaxed mb-4">
          Create a complete user flow diagram for TalentFlow covering all three user roles: Learner,
          Instructor, and Admin. Your flow should map the journey from landing page to key actions
          for each role.
        </p>
        <div className="space-y-2">
          {checklist.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <Check size={14} className="text-[#000066] mt-0.5 shrink-0" />
              <span className="text-sm text-[#333]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Your Submission */}
      <div>
        <h2 className="text-base font-bold text-[#000066] mb-4">Your Submission</h2>

        {/* Title input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#333] mb-1">
            Submission Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="e.g. Ada Okonkwo \u2014 User Flow Diagram v1"
            className={`w-full border rounded-lg px-3 py-2.5 text-sm text-[#333] focus:outline-none transition-colors ${
              touched && !title.trim()
                ? 'border-red-400 focus:border-red-500'
                : 'border-[#d9d9d9] focus:border-[#000066]'
            }`}
          />
          {touched && !title.trim() && (
            <p className="text-xs text-red-500 mt-1">Submission title is required.</p>
          )}
        </div>

        {/* File upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#333] mb-1">
            Upload File <span className="text-red-500">*</span>
          </label>
          <div
            onDrop={handleDrop}
            onDragOver={e => e.preventDefault()}
            onClick={() => fileRef.current.click()}
            className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center gap-3 cursor-pointer transition-colors ${
              touched && !file
                ? 'border-red-400 bg-red-50'
                : file
                ? 'border-[#10b981] bg-[#f0fdf4]'
                : 'border-[#d9d9d9] hover:border-[#000066]'
            }`}
          >
            <Upload size={32} className={file ? 'text-[#10b981]' : 'text-[#808080]'} />
            <div className="text-center">
              {file ? (
                <>
                  <p className="text-sm font-medium text-[#10b981]">{file.name}</p>
                  <p className="text-xs text-[#808080] mt-0.5">{(file.size / 1024).toFixed(1)} KB · Click to replace</p>
                </>
              ) : (
                <>
                  <p className="text-sm text-[#555]">Drag &amp; drop or click to upload</p>
                  <p className="text-xs text-[#808080] mt-0.5">PDF, DOC, DOCX &nbsp;&middot;&nbsp; MAX 5MB</p>
                </>
              )}
            </div>
            {!file && (
              <button
                type="button"
                className="bg-[#000045] text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-[#000033] transition-colors"
                onClick={e => { e.stopPropagation(); fileRef.current.click() }}
              >
                Browse File
              </button>
            )}
          </div>
          {touched && !file && (
            <p className="text-xs text-red-500 mt-1">Please upload a file before submitting.</p>
          )}
          <input
            ref={fileRef}
            type="file"
            className="hidden"
            onChange={handleFile}
            accept=".pdf,.doc,.docx"
          />
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#333] mb-1">Notes / Comments (optional)</label>
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Add any notes for your instructor..."
            rows={4}
            className="w-full border border-[#d9d9d9] rounded-lg px-3 py-2.5 text-sm text-[#555] focus:outline-none focus:border-[#000066] transition-colors resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={handleSubmit}
            disabled={touched && !isReady}
            className={`w-full text-white text-sm font-semibold py-3 rounded-lg transition-colors ${
              isReady
                ? 'bg-[#000045] hover:bg-[#000033]'
                : 'bg-[#a0a0b0] cursor-not-allowed'
            }`}
          >
            Submit Assignment
          </button>
          <button className="w-full border border-[#d9d9d9] text-[#555] text-sm font-medium py-3 rounded-lg hover:bg-gray-50 transition-colors">
            Save as Draft
          </button>
        </div>

        {/* Inline validation summary */}
        {touched && !isReady && (
          <p className="text-xs text-center text-red-500 mt-3">
            Please fill in the submission title and upload a file to continue.
          </p>
        )}
      </div>
    </div>
  )
}

export default AssignmentDetails
