import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle2, Circle, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/form/Button';
import Input from '../../shared/form/Input';

const SetNewPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Call update password API
    console.log("Updating password");
    navigate('/login');
  };

  // Validation Logic
  const validations = {
    length: password.length >= 8,
    numberOrSymbol: /[0-9!@#$%^&*]/.test(password),
    mixedCase: /[a-z]/.test(password) && /[A-Z]/.test(password),
  };

  const strengthScore = Object.values(validations).filter(Boolean).length;
  const strengthText = strengthScore === 3 ? 'Strong' : strengthScore === 2 ? 'Medium' : 'Weak';
  const strengthColor = strengthScore === 3 ? 'bg-emerald-500' : strengthScore === 2 ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#0A0E27] mb-3">Set a New Password</h1>
          <p className="text-gray-400 text-sm leading-relaxed px-4">
            Your new password must be different from previous passwords to ensure maximum security.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* New Password Input */}
          <div className="space-y-2">
            <div className="relative">
              <Input 
              label="New Password" type={showPassword ? "text" : "password"}
              value={password} id="password" 
              placeholder="Enter at least 8 characters" 
              className="block"
              action={(e) => setPassword(e.target.value)} />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Password Strength Indicator */}
          <div className="bg-gray-50/50 rounded-xl p-5 border border-gray-50">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Password Strength</span>
              <span className={`text-xs font-bold ${strengthScore === 3 ? 'text-emerald-500' : 'text-gray-400'}`}>
                {strengthText}
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-gray-200 rounded-full mb-4 overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ${strengthColor}`} 
                style={{ width: `${(strengthScore / 3) * 100}%` }}
              ></div>
            </div>

            {/* Checklist */}
            <ul className="space-y-2">
              <li className={`flex items-center text-xs gap-2 ${validations.length ? 'text-emerald-600' : 'text-gray-300'}`}>
                {validations.length ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                At least 8 characters long
              </li>
              <li className={`flex items-center text-xs gap-2 ${validations.numberOrSymbol ? 'text-emerald-600' : 'text-gray-300'}`}>
                {validations.numberOrSymbol ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                Contains a number or symbol
              </li>
              <li className={`flex items-center text-xs gap-2 ${validations.mixedCase ? 'text-emerald-600' : 'text-gray-300'}`}>
                {validations.mixedCase ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                Mixed case (uppercase & lowercase)
              </li>
            </ul>
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-2">
            <div className="relative">
              <Input
              label="Confirm New Password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              id="confirmPassword"
              placeholder="Repeat your new password"
              action={setConfirmPassword}
               />
              <button 
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Button
              type="submit"
              className="w-full bg-[#050659] hover:bg-[#030440] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group"
              btnText="Update Password"
              icon={<ShieldCheck size={20} className="group-hover:scale-110 transition-transform" />}
            />

          {/* Footer */}
          <div className="text-center mt-8">
            <Button
              action={() => navigate('/login')}
              className="text-[#000066] bg-transparent shadow-none font-medium hover:bg-transparent mb-0"
              btnText="I remember my password"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetNewPassword;