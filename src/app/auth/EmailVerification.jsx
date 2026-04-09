import React, { useState, useRef } from "react";
import { Mail, RotateCw, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/form/Button";

const EmailVerification = ({ email = "your email" }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleVerifyEmail = () => {
    const otpCode = otp.join("");
    if (otpCode.length === 6) {
      // Call verification API
      console.log("Verifying OTP:", otpCode);
      // On success, navigate to dashboard or something
      navigate("/");
    } else {
      alert("Please enter the complete 6-digit code.");
    }
  };

  const handleResendCode = () => {
    // Call resend API
    console.log("Resending verification code to", email);
    alert("Verification code resent.");
  };

  const handleUseDifferentEmail = () => {
    // Navigate back to signup
    navigate("/signup");
  };

  const handleChange = (element, index) => {
    const value = element.value.trim();
    if (!/^\d$/.test(value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? value : d))]);

    // Focus next input
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 blur-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-gray-400 rotate-12 rounded-3xl shadow-2xl">
          <img src="/email-bg.jpg" alt="" />
        </div>
      </div>

      {/* Verification Card */}
      <div className="relative z-10 w-full max-w-[460px] items-center justify-center bg-white rounded-xl shadow-2xl border border-indigo-100">
        {/* Top Header Section (Light Gray) */}
        <div className="bg-[#F3F4F6] h-40 flex items-center rounded-t-xl justify-center relative">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
            <Mail className="text-[#000066]" size={28} />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 pt-10 text-center items-center justify-center">
          <h2 className="text-2xl font-extrabold text-[#000033] mb-4">
            Check your inbox
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 px-4">
            We've sent a 6-digit verification code to <br />
            <span className="font-bold text-[#000066]">{email}.</span>
            <br />
            Please enter it below to verify your account.
          </p>

          {/* OTP Input Fields */}
          <div className="flex gap-2 mb-8">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                ref={(el) => (inputRefs.current[index] = el)}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-14 sm:w-14 sm:h-16 text-center text-xl font-bold border-2 border-gray-100 bg-[#F9FAFB] rounded-xl focus:border-[#000066] focus:bg-white focus:outline-none transition-all"
              />
            ))}
          </div>

          {/* Verify Button */}
          <Button
            action={handleVerifyEmail}
            btnText="Verify Email"
            icon={<ArrowRight size={18} />}
            className="text-white"
            color="bg-[#000066] hover:bg-[#000044]"
          />

          {/* Footer Links */}
          <div className="mt-8 space-y-2">
            <p className="text-gray-400 text-sm">Didn't receive the code?</p>

            <Button
              action={handleResendCode}
              icon={<RotateCw size={16} />}
              className="bg-transparent shadow-none text-[#000066] font-bold hover:bg-transparent mb-0"
              btnText="Resend Verification Code"
            />

            <Button
              action={handleUseDifferentEmail}
              className="text-gray-400 bg-transparent shadow-none hover:bg-transparent text-sm hover:text-gray-600 transition-colors"
              btnText="Use a different email address"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
