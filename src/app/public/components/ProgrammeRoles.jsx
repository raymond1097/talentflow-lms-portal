import { GraduationCap, LayoutList, ShieldCheck } from 'lucide-react';

const RoleCard = ({ icon: Icon, title, description, features }) => (
  <div className="flex flex-col p-8 bg-white border border-blue-100 rounded-2xl shadow-sm">
    {/* Icon Header */}
    <div className="mb-6">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-900 rounded-lg text-white">
        <Icon size={24} />
      </div>
    </div>

    {/* Title & Description */}
    <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed mb-8">
      {description}
    </p>

    {/* Feature List */}
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-4 text-slate-700">
          <div className="w-6 h-6 rounded-full bg-slate-200 flex-shrink-0" />
          <span className="text-sm font-medium">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProgrammeRoles = () => {
  const roles = [
    {
      icon: GraduationCap,
      title: "Learner",
      description: "Access courses, track progress, submit assignments, and collaborate.",
      features: [
        "View enrolled courses",
        "Submit assignments",
        "Track your progress",
        "Earn certificates"
      ]
    },
    {
      icon: LayoutList,
      title: "Instructor / Mentor",
      description: "Create courses, set assignments, grade submissions, and monitor learners.",
      features: [
        "Create & manage courses",
        "Grade submissions",
        "Post announcements",
        "View learner analytics"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Program Administrator",
      description: "Manage users, allocate teams, oversee courses, and view platform analytics.",
      features: [
        "Manage all users",
        "Allocate teams",
        "View platform analytics",
        "Issue certificates"
      ]
    }
  ];

  return (
    <section id="about" className="py-16 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-bold tracking-wide uppercase">
          Who it's for
        </span>
        <h2 className="mt-2 text-4xl font-extrabold text-blue-900 tracking-tight">
          Built for every role in the programme
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roles.map((role, idx) => (
          <RoleCard key={idx} {...role} />
        ))}
      </div>
    </section>
  );
};

export default ProgrammeRoles;