import React from "react";
import {
  LayoutDashboard,
  BookOpen,
  TrendingUp,
  MessageSquare,
  Users,
  Bell,
  User,
  Settings,
  FolderClosed,
  Folder,
} from "lucide-react";

const Aside = () => {
  return (
    <aside className="fixed top-0 left-0 w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
      <div className="p-6 flex items-center gap-2">
        <a href="#home" className="z-50 shrink-0">
          <img src="/logo.png" alt="TalentFlow Logo" className="w-28 md:w-30" />
        </a>
      </div>

      <nav className="flex-1 px-4 space-y-8">
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
            Main
          </p>
          <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <SidebarItem icon={<BookOpen size={20} />} label="My Courses" />
          <SidebarItem
            icon={<FolderClosed size={20} />}
            label="Course Catalog"
          />
          <SidebarItem icon={<Folder size={20} />} label="Assignments" />
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
            Track
          </p>
          <SidebarItem icon={<TrendingUp size={20} />} label="Progress" />
          <SidebarItem icon={<MessageSquare size={20} />} label="Discussion" />
          <SidebarItem icon={<Users size={20} />} label="My Teams" />
          <SidebarItem icon={<Bell size={20} />} label="Notification" />
          <SidebarItem icon={<User size={20} />} label="Profile" />
          <SidebarItem icon={<Settings size={20} />} label="Settings" active />
        </div>
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${active ? "bg-gray-200 text-gray-900 font-medium" : "text-gray-500 hover:bg-gray-50"}`}>
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

export default Aside;
