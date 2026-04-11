import { useState } from 'react'
import { ChevronRight, CheckCircle, Lock, Play, BookOpen, FileText, MessageCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import instructorImg from '../../assets/image 43 (1).jpg'

const lessons = [
  { id: 1, title: 'Intro to UI/UX Design',      status: 'done' },
  { id: 2, title: 'Design Thinking',             status: 'done' },
  { id: 3, title: 'User Flows',                  status: 'active' },
  { id: 4, title: 'Wireframing',                 status: 'locked' },
  { id: 5, title: 'Prototyping',                 status: 'locked' },
  { id: 6, title: 'Usability Testing',           status: 'locked' },
]

const LessonPage = () => {
  const navigate = useNavigate()
  const [tab, setTab] = useState('Overview')
  const [sideTab, setSideTab] = useState('Lessons')

  return (
    <div className="max-w-[1100px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#808080] mb-4">
        <button onClick={() => navigate('/learner/catalog')} className="hover:text-[#000066] transition-colors">Course Catalog</button>
        <ChevronRight size={12} />
        <button onClick={() => navigate('/learner/catalog/1')} className="hover:text-[#000066] transition-colors">UI/UX Fundamentals</button>
        <ChevronRight size={12} />
        <span className="text-[#000066] font-medium">Lesson 3: User Flows</span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-[1fr_260px] gap-5">
        {/* Left: Video + Tabs */}
        <div>
          {/* Video Player */}
          <div className="relative rounded-xl overflow-hidden mb-0" style={{ aspectRatio: '16/9' }}>
            <img src={instructorImg} alt="Lesson video" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/40">
                <Play size={28} className="text-white ml-1" />
              </button>
            </div>
            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
              <div className="h-full bg-[#ff7a00] w-[35%]" />
            </div>
          </div>

          {/* Tabs row */}
          <div className="flex gap-0 border-b border-[#d9d9d9] mt-4">
            {['Overview', 'Resources', 'Discussion'].map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
                  tab === t ? 'border-[#000066] text-[#000066]' : 'border-transparent text-[#808080] hover:text-[#000066]'
                }`}
              >
                {t === 'Overview' && <BookOpen size={14} />}
                {t === 'Resources' && <FileText size={14} />}
                {t === 'Discussion' && <MessageCircle size={14} />}
                {t}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {tab === 'Overview' && (
            <div className="pt-4">
              <h2 className="text-base font-bold text-[#000066] mb-2">Lesson 3: User Flows</h2>
              <p className="text-sm text-[#555] leading-relaxed">
                In this lesson, you&apos;ll learn how to map user flows for web and mobile applications.
                We cover key principles of flow diagramming, how to identify entry and exit points,
                and how to communicate your flows to developers.
              </p>
            </div>
          )}
          {tab === 'Resources' && (
            <div className="pt-4">
              <h2 className="text-base font-bold text-[#000066] mb-3">Lesson Resources</h2>
              <ul className="space-y-2">
                {['User Flow Template.pdf', 'Figma Starter File.fig', 'User Flow Best Practices.docx'].map(r => (
                  <li key={r} className="flex items-center gap-3 p-3 rounded-lg border border-[#e5e7eb] hover:bg-[#f9f9ff] cursor-pointer transition-colors">
                    <FileText size={16} className="text-[#000066] shrink-0" />
                    <span className="text-sm text-[#000066]">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {tab === 'Discussion' && (
            <div className="pt-4">
              <h2 className="text-base font-bold text-[#000066] mb-3">Discussion</h2>
              <p className="text-sm text-[#808080]">No comments yet. Be the first to start the discussion!</p>
            </div>
          )}

          {/* Next Lesson button */}
          <div className="mt-6">
            <button className="flex items-center gap-2 bg-[#000045] text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-[#000033] transition-colors">
              Next Lesson <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Right: Course Progress Sidebar */}
        <div className="bg-white rounded-xl border border-[#d9d9d9] p-4 h-fit">
          <h2 className="text-sm font-bold text-[#000066] mb-3">Course Progress</h2>

          {/* Side Tabs */}
          <div className="flex gap-0 border-b border-[#d9d9d9] mb-3">
            {['Lessons', 'Resources'].map(t => (
              <button
                key={t}
                onClick={() => setSideTab(t)}
                className={`flex-1 py-1.5 text-xs font-medium border-b-2 -mb-px transition-colors ${
                  sideTab === t ? 'border-[#000066] text-[#000066]' : 'border-transparent text-[#808080] hover:text-[#000066]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Lesson list */}
          {sideTab === 'Lessons' && (
            <div className="flex flex-col gap-1">
              {lessons.map((l) => (
                <div
                  key={l.id}
                  className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-colors ${
                    l.status === 'active'
                      ? 'bg-[#f0f0ff] border border-[#000066]'
                      : l.status === 'locked'
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-[#f5f5f5]'
                  }`}
                >
                  <div className="shrink-0">
                    {l.status === 'done' && <CheckCircle size={15} className="text-[#10b981]" />}
                    {l.status === 'active' && (
                      <div className="w-4 h-4 rounded-full bg-[#000066] flex items-center justify-center">
                        <Play size={8} className="text-white ml-0.5" />
                      </div>
                    )}
                    {l.status === 'locked' && <Lock size={15} className="text-[#808080]" />}
                  </div>
                  <span className={`text-xs font-medium ${l.status === 'active' ? 'text-[#000066]' : 'text-[#555]'}`}>
                    {l.title}
                  </span>
                </div>
              ))}
            </div>
          )}
          {sideTab === 'Resources' && (
            <div className="flex flex-col gap-2 pt-1">
              {['Slide Deck.pdf', 'Worksheet.docx', 'Reference Links'].map(r => (
                <div key={r} className="flex items-center gap-2 p-2 rounded hover:bg-[#f5f5f5] cursor-pointer transition-colors">
                  <FileText size={13} className="text-[#000066]" />
                  <span className="text-xs text-[#000066]">{r}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LessonPage
