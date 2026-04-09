import { 
  BookOpen, 
  BarChart3, 
  Users, 
  Upload, 
  Award, 
  Bell 
} from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      title: "Centralised Course Library",
      description: "All course materials, lessons, and resources in one place. No more searching through WhatsApp or Google Drive.",
      icon: <BookOpen className="w-6 h-6 text-blue-900" />,
    },
    {
      title: "Progress Tracking",
      description: "Track completion per course and per lesson with progress bars and percentages.",
      icon: <BarChart3 className="w-6 h-6 text-blue-900" />,
    },
    {
      title: "Team Collaboration",
      description: "Find and message teammates through built-in channels and direct messages.",
      icon: <Users className="w-6 h-6 text-blue-900" />,
    },
    {
      title: "Assignment Submissions",
      description: "Upload and submit your work directly on the platform. Track whether it has been graded.",
      icon: <Upload className="w-6 h-6 text-blue-900" />,
    },
    {
      title: "Certificates & Badges",
      description: "Earn a LinkedIn-shareable certificate for every course you complete, plus badges for milestones.",
      icon: <Award className="w-6 h-6 text-blue-900" />,
    },
    {
      title: "Smart Notifications",
      description: "Stay on top of deadlines, grade releases, announcements, and messages — all in one centre.",
      icon: <Bell className="w-6 h-6 text-blue-900" />,
    },
  ];

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
          Features
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Everything you need to learn and grow
        </h2>
        <p className="text-gray-600 text-lg">
          All your learning tools in one clean, easy-to-use platform.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="p-8 border border-gray-200 rounded-2xl hover:shadow-md transition-shadow duration-300 bg-white"
          >
            {/* Icon Container */}
            <div className="mb-6 p-3 bg-blue-50 rounded-lg inline-block">
              {feature.icon}
            </div>
            
            {/* Content */}
            <h4 className="text-xl font-bold text-blue-900 mb-3">
              {feature.title}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;