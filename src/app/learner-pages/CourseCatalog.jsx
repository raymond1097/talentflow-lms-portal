import { useState } from 'react'
import { Play, Award, BookOpen } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import uiuxThumb from '../../assets/Frame 109.jpg'
import brandThumb from '../../assets/Rectangle 53973.jpg'
import socialThumb from '../../assets/image 43.jpg'
import htmlThumb from '../../assets/Rectangle 53975.jpg'
import productThumb from '../../assets/image 44.png'
import graphicThumb from '../../assets/image 45.jpg'

const courses = [
  { id: 1, category: 'UI/UX',    title: 'UI/UX Fundamentals',    instructor: 'Mr. Emeka', lessons: 8,  hours: '2hrs',   completedLessons: 5, lastVisited: 'Yesterday',  progress: 65,  status: 'in-progress', meta: '2 assignments · 1 pending', score: null,           completedDate: null,            thumbnail: uiuxThumb,    featured: true },
  { id: 2, category: 'Design',   title: 'Brand Identity 101',    instructor: 'Ms. Aisha', lessons: 6,  hours: '1.5hrs', completedLessons: 2, lastVisited: '2 days ago', progress: 36,  status: 'in-progress', meta: '1 assignment · 1 pending',  score: null,           completedDate: null,            thumbnail: brandThumb,   featured: false },
  { id: 3, category: 'Social',   title: 'Social Media Strategy', instructor: 'Mr. Emeka', lessons: 5,  hours: '1hr',    completedLessons: 5, lastVisited: 'Mar 15',     progress: 100, status: 'completed',   meta: null,                        score: 'Score: 88/100', completedDate: '15 March 2026', thumbnail: socialThumb,  featured: false },
  { id: 4, category: 'Frontend', title: 'HTML & CSS Basics',     instructor: 'Mr. Chidi', lessons: 10, hours: '3hrs',   completedLessons: 0, lastVisited: null,         progress: 0,   status: 'not-started', meta: 'Certificate included',      score: null,           completedDate: null,            thumbnail: htmlThumb,    featured: false },
  { id: 5, category: 'Product',  title: 'Product Management',    instructor: 'Ms. Ngozi', lessons: 7,  hours: '2hrs',   completedLessons: 0, lastVisited: null,         progress: 0,   status: 'not-started', meta: 'Certificate included',      score: null,           completedDate: null,            thumbnail: productThumb, featured: false },
  { id: 6, category: 'Graphic',  title: 'Graphic Design Tools',  instructor: 'Mr. Bayo',  lessons: 9,  hours: '2.5hrs', completedLessons: 9, lastVisited: 'Feb 20',     progress: 100, status: 'completed',   meta: null,                        score: 'Score: 92/100', completedDate: '15 March 2026', thumbnail: graphicThumb, featured: false },
]

const CourseCatalog = () => {
  const [filter, setFilter] = useState('All')
  const navigate = useNavigate()
  const categories = ['All', 'UI/UX', 'Design', 'Social', 'Frontend', 'Product', 'Graphic']
  const featured = courses.find(c => c.featured)
  const displayed = filter === 'All' ? courses : courses.filter(c => c.category === filter)

  const goToDetail = (id) => navigate(`/learner/catalog/${id}`)

  return (
    <div className="max-w-[1100px] mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="font-bold text-[#000066]" style={{ fontSize: '48px', fontFamily: 'Agency FB, sans-serif' }}>
            Course Catalog
          </h1>
          <p className="text-sm text-[#555] mt-1">Browse all available courses and enroll.</p>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xs text-[#808080]">Sort:</span>
          <select className="text-xs border border-[#d9d9d9] rounded-lg px-2 py-1.5 text-[#000066] focus:outline-none focus:border-[#000066]">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>A–Z</option>
          </select>
        </div>
      </div>

      {/* Featured Banner */}
      {featured && (
        <div className="mb-6">
          <p className="text-[10px] font-bold text-[#808080] uppercase tracking-widest mb-2">Featured Course</p>
          <div
            className="bg-white border border-[#d9d9d9] rounded-xl overflow-hidden shadow-sm flex items-stretch cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => goToDetail(featured.id)}
          >
            {/* Thumbnail */}
            <div className="w-[200px] shrink-0 overflow-hidden">
              <img src={featured.thumbnail} alt={featured.title} className="w-full h-full object-cover" />
            </div>
            {/* Info */}
            <div className="flex-1 px-6 py-5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#000066] mb-1">{featured.title}</h2>
                <p className="text-sm text-[#555] mb-4">
                  Master user research, wireframing, and prototyping. {featured.lessons} lessons · 2 hours · Certificate included
                </p>
                <button
                  onClick={(e) => { e.stopPropagation(); goToDetail(featured.id) }}
                  className="bg-[#000045] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#000033] transition-colors"
                >
                  Continue
                </button>
              </div>
              {/* Progress bar */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex-1 h-2 bg-[#f0f0f0] rounded-full overflow-hidden">
                  <div className="h-full bg-[#10b981] rounded-full" style={{ width: `${featured.progress}%` }} />
                </div>
                <span className="text-sm font-semibold text-[#000066] shrink-0">{featured.progress}%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter bar */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              filter === cat
                ? 'bg-[#000066] text-white border-[#000066]'
                : 'bg-white text-[#000066] border-[#d9d9d9] hover:border-[#000066]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course grid */}
      <div className="grid grid-cols-3 gap-4">
        {displayed.map(course => (
          <div
            key={course.id}
            className="bg-white rounded-xl border border-[#d9d9d9] overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => goToDetail(course.id)}
          >
            {/* Thumbnail */}
            <div className="h-[140px] w-full overflow-hidden">
              <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-4">
              {/* Two badges */}
              <div className="flex gap-2 mb-2 flex-wrap">
                <span className="border border-[#d9d9d9] text-[#000066] text-xs font-semibold px-2 py-0.5 rounded-lg">{course.category}</span>
                <span className="bg-[#000045] text-white text-xs font-semibold px-2 py-0.5 rounded-lg">{course.lessons} lessons · {course.hours}</span>
              </div>

              <h3 className="text-sm font-bold text-[#000066] mb-1">{course.title}</h3>
              <p className="text-xs text-[#000066] mb-2">by {course.instructor}</p>

              {/* Status line */}
              <p className="text-xs text-[#808080] mb-1">
                {course.status === 'in-progress' && `Lesson ${course.completedLessons} of ${course.lessons} · Last visited: ${course.lastVisited}`}
                {course.status === 'completed' && `Completed · ${course.completedDate}`}
                {course.status === 'not-started' && 'Not started yet'}
              </p>

              {/* Progress bar */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 h-1.5 bg-[#f0f0f0] rounded-full overflow-hidden">
                  <div className="h-full bg-[#10b981] rounded-full transition-all" style={{ width: `${course.progress}%` }} />
                </div>
                <span className="text-xs text-[#000066] font-medium shrink-0">
                  {course.status === 'completed' ? 'Done' : `${course.progress}%`}
                </span>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-[#000066]">
                  {course.status === 'completed' ? course.score : course.meta}
                </p>
                {course.status === 'completed' && (
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate('/learner/certificates') }}
                    className="bg-[#C9A84C] text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-[#b8960a] transition-colors"
                  >
                    <Award size={12} /> View Certificate
                  </button>
                )}
                {course.status === 'in-progress' && (
                  <button
                    onClick={(e) => { e.stopPropagation(); goToDetail(course.id) }}
                    className="bg-[#000045] text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-[#000033] transition-colors"
                  >
                    <Play size={12} /> Resume
                  </button>
                )}
                {course.status === 'not-started' && (
                  <button
                    onClick={(e) => { e.stopPropagation(); goToDetail(course.id) }}
                    className="btn-orange text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                  >
                    <BookOpen size={12} /> + Enroll
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseCatalog
