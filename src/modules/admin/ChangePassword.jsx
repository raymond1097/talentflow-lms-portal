import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Aside from "./Aside";
import Input from "../../shared/form/Input";
import Button from "../../shared/form/Button";
import SettingsHeader from "./SettingsHeader";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ current: "", next: "", confirm: "" });
  const [showPassword, setShowPassword] = useState({
    current: false,
    next: false,
    confirm: false,
  });

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/settings");
  };

  const togglePassword = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Aside />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header on top */}
        <SettingsHeader />

        {/* Page Content */}
        <div className="text-slate-700 p-8">
          <div className="max-w-md p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900">
                Change Password
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                Enter your current password, then choose a new one.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {[
                {
                  label: "Current Password",
                  name: "current",
                  value: form.current,
                },
                { label: "New Password", name: "next", value: form.next },
                {
                  label: "Confirm New Password",
                  name: "confirm",
                  value: form.confirm,
                },
              ].map(({ label, name, value }) => (
                <div key={name} className="relative">
                  <Input
                    label={label}
                    type={showPassword[name] ? "text" : "password"}
                    value={value}
                    id={name}
                    placeholder="Enter at least 8 characters"
                    action={handleChange(name)}
                  />
                  <Button
                    type="button"
                    action={() => togglePassword(name)}
                    className="bg-transparent shadow-none hover:bg-transparent absolute left-36 top-8 text-gray-400 hover:text-gray-600"
                    btnText={
                      showPassword[name] ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )
                    }
                  />
                </div>
              ))}

              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  btnText="Save New Password"
                  className="text-white"
                />
                <Button
                  type="button"
                  btnText="Cancel"
                  className="bg-transparent border border-gray-200 py-3 rounded-xl font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
