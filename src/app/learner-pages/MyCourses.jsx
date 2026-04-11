import { Play, Award, BookOpen } from 'lucide-react'
import uiuxThumb from '../../assets/Frame 109.jpg'
import brandThumb from '../../assets/Rectangle 53973.jpg'
import socialThumb from '../../assets/image 43.jpg'
import htmlThumb from '../../assets/Rectangle 53975.jpg'
import productThumb from '../../assets/image 44.png'
import graphicThumb from '../../assets/image 45.jpg'

const courses = [
  { id: 1, category: 'UI/UX',    title: 'UI/UX Fundamentals',    instructor: 'Mr. Emeka', lessons: 8,  completedLessons: 5, progress: 65,  status: 'in-progress', hours: '2hrs',   meta: '2 assignments · 1 pending', completedDate: null,            score: null,           thumbnail: uiuxThumb },
  { id: 2, category: 'Design',   title: 'Brand Identity 101',    instructor: 'Ms. Aisha', lessons: 6,  completedLessons: 2, progress: 36,  status: 'in-progress', hours: '1.5hrs', meta: '1 assignment · 1 pending',  completedDate: null,            score: null,           thumbnail: brandThumb },
  { id: 3, category: 'Social',   title: 'Social Media Strategy', instructor: 'Mr. Emeka', lessons: 5,  completedLessons: 5, progress: 100, status: 'completed',   hours: '1hr',    meta: null,                         completedDate: '15 March 2026', score: 'Score: 88/100', thumbnail: socialThumb },
  { id: 4, category: 'Frontend', title: 'HTML & CSS Basics',     instructor: 'Mr. Chidi', lessons: 10, completedLessons: 0, progress: 0,   status: 'not-started', hours: '3hrs',   meta: 'Certificate included',       completedDate: null,            score: null,           thumbnail: htmlThumb },
  { id: 5, category: 'Product',  title: 'Product Management',    instructor: 'Ms. Ngozi', lessons: 7,  completedLessons: 0, progress: 0,   status: 'not-started', hours: '2hrs',   meta: 'Certificate included',       completedDate: null,            score: null,           thumbnail: productThumb },
  { id: 6, category: 'Graphic',  title: 'Graphic Design Tools',  instructor: 'Mr. Bayo',  lessons: 9,  completedLessons: 9, progress: 100, status: 'completed',   hours: '2.5hrs', meta: null,                         completedDate: '15 March 2026', score: 'Score: 92/100', thumbnail: graphicThumb },
]

const MyCourses = () => (
  <div className="max-w-[1100px] mx-auto">
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-[#000066]">My Courses</h1>
      <p className="text-sm text-[#808080] mt-1">Track your enrolled courses and progress</p>
    </div>
    <div className="grid grid-cols-3 gap-4">
      {courses.map(course => (
        <div key={course.id} className="bg-white rounded-xl border border-[#d9d9d9] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          {/* Thumbnail */}
          <div className="h-[140px] w-full overflow-hidden">
            <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
          </div>

          <div className="p-4">
            {/* Badges */}
            <div className="flex gap-2 mb-2 flex-wrap">
              <span className="border border-[#d9d9d9] text-[#000066] text-xs font-semibold px-2 py-0.5 rounded-lg">{course.category}</span>
              <span className="bg-[#000045] text-white text-xs font-semibold px-2 py-0.5 rounded-lg">{course.lessons} lessons · {course.hours}</span>
            </div>

            <h3 className="text-sm font-bold text-[#000066] mb-1">{course.title}</h3>
            <p className="text-xs text-[#000066] mb-3">by {course.instructor} ·</p>

            {/* Status line */}
            <p className="text-xs text-[#000066] mb-1">
              {course.status === 'in-progress' && `Lesson ${course.completedLessons} of ${course.lessons} · Last visited: Yesterday`}
              {course.status === 'completed' && `Completed · ${course.completedDate}`}
              {course.status === 'not-started' && 'Not started'}
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
                <button className="bg-[#C9A84C] text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-[#b8960a] transition-colors">
                  <Award size={12} /> View Certificate
                </button>
              )}
              {course.status === 'in-progress' && (
                <button className="bg-[#000045] text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-[#000033] transition-colors">
                  <Play size={12} /> Resume
                </button>
              )}
              {course.status === 'not-started' && (
                <button className="btn-orange text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:opacity-90 transition-opacity">
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

export default MyCourses
