import { useNavigate, Link } from 'react-router-dom'
import { Play, CheckCircle, Lock, ChevronRight } from 'lucide-react'
import uiuxThumb from '../../assets/Frame 109.jpg'

const course = {
  id: 1, title: 'UI/UX Fundamentals', instructor: 'Mr. Emeka', role: 'Instructor · UI/UX Lead',
  category: 'UI/UX', progress: 65,
  description: 'Master the fundamentals of UI/UX design. This course covers research, wireframing, prototyping in Figma, and usability testing techniques.',
  whatYouLearn: [
    'User research methods and personas',
    'Wireframing and prototyping in Figma',
    'Design systems and components',
    'Usability testing and iteration',
  ],
  syllabus: [
    { id: 1, title: 'Intro to UI/UX Design',     duration: '08:14', status: 'done' },
    { id: 2, title: 'Design Thinking Process',   duration: '11:40', status: 'done' },
    { id: 3, title: 'User Flows',                duration: '14:32', status: 'in-progress' },
    { id: 4, title: 'Wireframing',               duration: '18:00', status: 'locked' },
    { id: 5, title: 'Prototyping in Figma',      duration: '16:55', status: 'locked' },
    { id: 6, title: 'Usability Testing',         duration: '12:30', status: 'locked' },
  ],
}

const statusConfig = {
  'done':        { label: 'Done',        bg: 'bg-[#10b981]', text: 'text-white', Icon: CheckCircle },
  'in-progress': { label: 'In Progress', bg: 'bg-[#ff7a00]', text: 'text-white', Icon: Play },
  'locked':      { label: 'Locked',      bg: 'bg-[#d9d9d9]', text: 'text-[#808080]', Icon: Lock },
}

const CourseDetails = () => {
  const navigate = useNavigate()
  const completed = course.syllabus.filter(l => l.status === 'done').length

  return (
    <div className="max-w-[900px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-[#808080] mb-4">
        <Link to="/learner/catalog" className="hover:text-[#000066]">Course Catalog</Link>
        <ChevronRight size={12} />
        <span className="text-[#000066] font-medium">{course.title}</span>
      </div>

      <div className="bg-white rounded-xl border border-[#d9d9d9] overflow-hidden shadow-sm">
        {/* Hero */}
        <div className="h-[220px] w-full relative overflow-hidden bg-[#000045]">
          <img src={uiuxThumb} alt={course.title} className="w-full h-full object-cover opacity-80" />
          <button onClick={() => navigate('/learner/catalog/1/lesson')} className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/50 transition-colors">
              <Play size={24} className="text-white ml-1" />
            </div>
          </button>
        </div>

        <div className="p-6">
          <h1 className="text-xl font-bold text-[#000066] mb-1">{course.title}</h1>
          <p className="text-sm text-[#808080] mb-4">{course.description}</p>

          {/* Instructor */}
          <div className="flex items-center gap-3 mb-6 p-3 bg-[#f9f9f9] rounded-lg border border-[#f0f0f0]">
            <div className="w-10 h-10 rounded-full bg-[#000045] flex items-center justify-center text-white font-bold text-sm shrink-0">ME</div>
            <div>
              <p className="text-sm font-semibold text-[#000066]">{course.instructor}</p>
              <p className="text-xs text-[#808080]">{course.role}</p>
            </div>
          </div>

          {/* What you'll learn */}
          <h2 className="text-sm font-bold text-[#000066] mb-3">What you'll learn</h2>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {course.whatYouLearn.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-[#10b981] shrink-0 mt-0.5" />
                <span className="text-xs text-[#000066]">{item}</span>
              </div>
            ))}
          </div>

          {/* Syllabus */}
          <h2 className="text-sm font-bold text-[#000066] mb-3">Syllabus</h2>
          <div className="flex flex-col gap-2 mb-6">
            {course.syllabus.map((lesson) => {
              const cfg = statusConfig[lesson.status]
              return (
                <div key={lesson.id} className={`flex items-center justify-between px-4 py-3 rounded-lg border ${lesson.status === 'in-progress' ? 'border-[#000066] bg-[#f0f0ff]' : 'border-[#f0f0f0] bg-white'}`}>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#f0f0f0] text-[#808080] text-xs flex items-center justify-center font-medium shrink-0">{lesson.id}</span>
                    <span className={`text-sm font-medium ${lesson.status === 'locked' ? 'text-[#808080]' : 'text-[#000066]'}`}>{lesson.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#808080]">{lesson.duration}</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${cfg.bg} ${cfg.text}`}>{cfg.label}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Progress */}
          <div className="flex items-center gap-3 mb-1">
            <div className="flex-1 h-2 bg-[#f0f0f0] rounded-full overflow-hidden">
              <div className="h-full bg-[#10b981] rounded-full" style={{ width: `${course.progress}%` }} />
            </div>
            <span className="text-sm font-medium text-[#000066]">{course.progress}%</span>
          </div>
          <p className="text-xs text-[#808080] mb-5">Lesson {completed} of {course.syllabus.length} lessons completed</p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button onClick={() => navigate('/learner/catalog/1/lesson')} className="w-full bg-[#000045] text-white text-sm font-semibold py-3 rounded-lg hover:bg-[#000033] transition-colors">
              Continue Learning
            </button>
            <button className="w-full border border-[#C9A84C] text-[#C9A84C] text-sm font-semibold py-3 rounded-lg hover:bg-[#fffbf0] transition-colors">
              View Certificate (65%)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
