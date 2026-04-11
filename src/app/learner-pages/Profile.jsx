import { User, Mail, Phone, MapPin, Camera } from 'lucide-react'

const Profile = () => {
  return (
    <div className="max-w-[640px] mx-auto">
      <h1 className="text-2xl font-bold text-[#000066] mb-6">My Profile</h1>

      {/* Avatar section */}
      <div className="bg-white border border-[#d9d9d9] rounded-2xl p-6 flex items-center gap-5 mb-5 shadow-sm">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-[#000066] flex items-center justify-center text-white text-2xl font-bold">
            AO
          </div>
          <button className="absolute bottom-0 right-0 w-7 h-7 bg-[#ff7a00] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
            <Camera size={13} className="text-white" />
          </button>
        </div>
        <div>
          <h2 className="text-lg font-bold text-[#000066]">Ada Okonkwo</h2>
          <p className="text-sm text-[#808080]">UI/UX Intern &middot; TalentFlow LMS</p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white border border-[#d9d9d9] rounded-2xl p-6 shadow-sm">
        <h2 className="text-sm font-bold text-[#000066] mb-4">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-medium text-[#555] mb-1">First Name</label>
            <div className="flex items-center gap-2 border border-[#d9d9d9] rounded-lg px-3 py-2.5">
              <User size={14} className="text-[#808080]" />
              <input defaultValue="Ada" className="flex-1 text-sm text-[#333] focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-[#555] mb-1">Last Name</label>
            <div className="flex items-center gap-2 border border-[#d9d9d9] rounded-lg px-3 py-2.5">
              <User size={14} className="text-[#808080]" />
              <input defaultValue="Okonkwo" className="flex-1 text-sm text-[#333] focus:outline-none" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-xs font-medium text-[#555] mb-1">Email Address</label>
          <div className="flex items-center gap-2 border border-[#d9d9d9] rounded-lg px-3 py-2.5">
            <Mail size={14} className="text-[#808080]" />
            <input defaultValue="ada.okonkwo@trueminds.com" className="flex-1 text-sm text-[#333] focus:outline-none" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs font-medium text-[#555] mb-1">Phone Number</label>
            <div className="flex items-center gap-2 border border-[#d9d9d9] rounded-lg px-3 py-2.5">
              <Phone size={14} className="text-[#808080]" />
              <input defaultValue="+234 801 234 5678" className="flex-1 text-sm text-[#333] focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-[#555] mb-1">Location</label>
            <div className="flex items-center gap-2 border border-[#d9d9d9] rounded-lg px-3 py-2.5">
              <MapPin size={14} className="text-[#808080]" />
              <input defaultValue="Lagos, Nigeria" className="flex-1 text-sm text-[#333] focus:outline-none" />
            </div>
          </div>
        </div>
        <button className="bg-[#000045] text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-[#000033] transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Profile
