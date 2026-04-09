import React, { useState } from "react";
import { X, Shield, ArrowLeft } from "lucide-react"; // Using lucide-react for icons
import { Link, useNavigate } from "react-router-dom";
import Button from "../../shared/form/Button";
import Input from "../../shared/form/Input";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    // Add your API logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header Section */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-gray-50">
          <div className="bg-yellow-50 p-1.5 rounded-lg">
            <Shield className="w-5 h-5 text-yellow-600" />
          </div>
          <h2 className="text-lg font-serif font-semibold text-gray-800">
            Security
          </h2>
          <button onClick={() => navigate(-1)} className="text-gray-400 bg-[#F1F5F9] p-1 rounded-full hover:text-gray-600 transition-colors">
            <X className="w-6 h-6 text-[#047857]" />
          </button>
        </div>

        {/* Content Section */}
        <div className="px-8 py-10 text-center">
          {/* Key Icon Container */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center">
              <span className="text-3xl">🔑</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Forgot Password?
          </h1>

          <p className="text-[#475569] text-base leading-relaxed mb-8 px-4">
            No worries, it happens! Enter your email address below and we'll
            send you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="text-left">
            <div className="mb-6">
              <Input
                label="E-mail"
                type="email"
                id="email"
                placeholder="Adacc13@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full text-white bg-[#000066] hover:bg-[#000044]"
              btnText="Send Reset Link"
            />
          </form>

          <Link to="/set-new-password" className="font-bold text-indigo-900 hover:underline block text-center mt-4">
            I remember my password
          </Link>

          {/* Footer Links */}
          <div className="mt-6">
            <Button
              icon={<ArrowLeft size={18} />}
              className="text-[#64748B] bg-transparent shadow-none font-bold hover:bg-transparent mb-0"
              btnText="Back to login"
              action={() => window.history.back()}
            />
          </div>
        </div>

        {/* Bottom Support Text */}
        <div className="px-8 pb-8">
          <p className="text-[14px] text-center text-[#94A3B8] leading-tight">
            If you don't see the email in your inbox, please check your spam
            folder or contact support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
