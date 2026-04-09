import { ArrowRight } from 'lucide-react'; // Optional icon library
import { useState } from 'react';

const CATEGORIES = [
  "All Courses", "Product Design", "UI/UX Design", 
  "Frontend Dev", "Social Media", "Product Mgmt", "Graphic Design"
];

const COURSES = [
  {
    id: 1,
    title: "UI/UX Fundamentals",
    category: "UI/UX Design",
    instructor: "Mr. Emeka",
    lessons: 8,
    duration: "2 hrs",
    description: "Master user research, wireframing, and prototyping from the ground up.",
    image: "/ui-ux.jpg",
  },
  {
    id: 2,
    title: "Brand Identity 101",
    category: "Graphic Design",
    instructor: "Ms. Aisha",
    lessons: 6,
    duration: "1.5 hrs",
    description: "Learn the principles of building a cohesive brand identity from scratch.",
    image: "/brand-identity.jpg",
  },
  {
    id: 3,
    title: "HTML & CSS Basics",
    category: "Frontend Dev",
    instructor: "Mr. Chidi",
    lessons: 10,
    duration: "3 hrs",
    description: "Build your first web pages using HTML and CSS from the absolute basics.",
    image: "/web-dev.jpg",
  },
];

const CourseCatalog = () => {
  const [activeCategory, setActiveCategory] = useState("All Courses");

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div className="max-w-xl">
          <span className="text-indigo-900 font-bold text-xs tracking-widest uppercase mb-2 block">
            Course Catalog
          </span>
          <h2 className="text-3xl font-extrabold mb-4">
            Browse available courses
          </h2>
          <p className="leading-relaxed">
            Explore all courses across every discipline. Sign up to enroll and start learning immediately.
          </p>
        </div>
        <button className="bg-indigo-950 text-white px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-indigo-900 transition-colors">
          View All Courses <ArrowRight size={16} />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeCategory === cat
                ? "bg-indigo-950 text-white shadow-lg"
                : "bg-indigo-50 text-indigo-900 hover:bg-indigo-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES.filter(course => activeCategory === 'All Courses' || course.category === activeCategory).map((course) => (
          <div 
            key={course.id} 
            className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Image Header */}
            <div className="h-48 overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col grow">
              <span className="inline-block px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 mb-4 w-fit">
                {course.category}
              </span>
              
              <h3 className="text-xl font-bold text-indigo-950 mb-1">
                {course.title}
              </h3>
              
              <p className="text-xs text-indigo-900/60 font-medium mb-4">
                by {course.instructor} • {course.lessons} lessons • ~{course.duration}
              </p>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-10">
                {course.description}
                {course.id !== 1 && <span className="block mt-3 font-medium italic text-slate-400">Free with enrollment</span>}
              </p>

              {/* Action */}
              <div className="mt-auto">
                <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors ml-auto">
                  Enroll <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCatalog;