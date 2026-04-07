import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Library,
  ClipboardList,
  TrendingUp,
  MessageSquare,
  Users,
  Bell,
  User,
  Settings,
  Search,
  ChevronRight,
  Trash2,
  FolderClosed,
  Folder,
} from "lucide-react";
import Aside from "./Aside";
import SettingsHeader from "./SettingsHeader";
import Footer from "../../app/public/components/Footer";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    reminders: true,
    announcements: true,
    mentions: true,
    email: false,
  });

  const toggleSwitch = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-50 text-slate-700">
        {/* SIDEBAR */}
        <Aside />

        {/* MAIN CONTENT */}
        <main className="flex-1 flex flex-col">
          {/* TOP HEADER */}
          <SettingsHeader />

          {/* SETTINGS AREA */}
          <div className="p-8 max-w-4xl">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Settings
              </h1>
              <p className="text-gray-500 mb-8">
                Manage your account and preferences.
              </p>
            </div>

            <div className="space-y-6">
              {/* ACCOUNT SECTION */}
              <Section title="Account">
                <SettingsRow
                  title="Change Password"
                  desc="Update your login password"
                  action={<ChevronRight size={20} className="text-gray-400" />}
                  onClick={() => navigate("/settings/change-password")}
                />
                <SettingsRow
                  title="Email Address"
                  desc="ada.okonkwog@trueminds.com"
                  action={<ChevronRight size={20} className="text-gray-400" />}
                />
              </Section>

              {/* NOTIFICATIONS SECTION */}
              <Section title="Notifications">
                <ToggleRow
                  title="Assignment Reminders"
                  desc="Get notified before due dates"
                  enabled={notifications.reminders}
                  onClick={() => toggleSwitch("reminders")}
                />
                <ToggleRow
                  title="Announcements"
                  desc="Updates from admin and instructors"
                  enabled={notifications.announcements}
                  onClick={() => toggleSwitch("announcements")}
                />
                <ToggleRow
                  title="Team Chat Mentions"
                  desc="When someone mentions you"
                  enabled={notifications.mentions}
                  onClick={() => toggleSwitch("mentions")}
                />
                <ToggleRow
                  title="Email Notifications"
                  desc="Receive daily email summary"
                  enabled={notifications.email}
                  onClick={() => toggleSwitch("email")}
                />
              </Section>

              {/* APPEARANCE SECTION */}
              <Section title="Appearance">
                <div className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0">
                  <span className="font-medium text-sm">Theme</span>
                  <select className="bg-gray-50 border border-gray-200 rounded px-3 py-1 text-sm focus:outline-none">
                    <option>Light Mode</option>
                    <option>Dark Mode</option>
                  </select>
                </div>
                <div className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0">
                  <span className="font-medium text-sm">Language</span>
                  <select className="bg-gray-50 border border-gray-200 rounded px-3 py-1 text-sm focus:outline-none">
                    <option>English</option>
                    <option>French</option>
                  </select>
                </div>
              </Section>

              {/* DANGER ZONE */}
              <Section title="Danger Zone">
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium text-sm">Delete Account</p>
                    <p className="text-xs text-gray-400">
                      Permanently remove your account
                    </p>
                  </div>
                  <button className="border border-gray-200 text-gray-600 px-4 py-1 rounded text-sm hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors">
                    Delete
                  </button>
                </div>
              </Section>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

// HELPER COMPONENTS
const SidebarItem = ({ icon, label, active = false }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${active ? "bg-gray-200 text-gray-900 font-medium" : "text-gray-500 hover:bg-gray-50"}`}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

const Section = ({ title, children }) => (
  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
    <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
        {title}
      </h3>
    </div>
    <div>{children}</div>
  </div>
);

const SettingsRow = ({ title, desc, action, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 cursor-pointer transition-colors"
  >
    <div>
      <p className="font-medium text-sm">{title}</p>
      <p className="text-xs text-gray-400">{desc}</p>
    </div>
    {action}
  </div>
);

const ToggleRow = ({ title, desc, enabled, onClick }) => (
  <div className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0">
    <div>
      <p className="font-medium text-sm">{title}</p>
      <p className="text-xs text-gray-400">{desc}</p>
    </div>
    <div
      onClick={onClick}
      className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${enabled ? "bg-black" : "bg-gray-300"}`}
    >
      <div
        className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${enabled ? "translate-x-5" : "translate-x-0"}`}
      />
    </div>
  </div>
);

export default SettingsPage;
