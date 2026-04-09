import React from "react";
import { Search, Bell, User } from "lucide-react";

const SettingsHeader = () => {
  return (
    <header className="fixed top-0 left-64 w-[calc(100%-16rem)] h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-50">
      <div className="relative w-96">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search courses, articles..."
          className="w-full bg-gray-100 rounded-lg py-2 pl-10 pr-4 focus:outline-none text-sm"
        />
      </div>
      <div className="flex items-center gap-4 text-gray-500">
        <Bell size={20} className="cursor-pointer hover:text-gray-800" />
        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer">
          <User size={20} />
        </div>
      </div>
    </header>
  );
};

export default SettingsHeader;
