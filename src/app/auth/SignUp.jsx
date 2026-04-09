import { useState } from "react";
import { Eye, EyeOff, ChevronDownIcon, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../shared/form/Input";
import Form from "../../shared/form/Form";
import Button from "../../shared/form/Button";
import AuthPage from "./Auth";

const SignUp = () => {
  const navigate = useNavigate();
  const userTypes = ["Learner", "Mentor", "Educator"];
  const disciplines = ["UI/UX Design", "Data Science", "Backend Development", "Project Management"];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [learnerType, setLearnerType] = useState(userTypes[0]);
  const [discipline, setDiscipline] = useState(disciplines[0]);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log("Form data submitted:", {
      firstName,
      lastName,
      email,
      learnerType,
      discipline,
      agreedTerms,
    });
    navigate("/email-verification");
  };

  return (
    <>
      <AuthPage
        sectionImage="/signup-img.jpg"
        children={
          <Form
            header="Create your account"
            subText="Create your account to start your learning journey."
            onSubmit={handleSubmit}
            formContent={
              <>
                <div className="flex sm:flex-row justify-between gap-6">
                  <Input
                    label="First Name"
                    type="text"
                    value={firstName}
                    id="firstName"
                    placeholder="Ada"
                    inputLength={40}
                    action={(e) => setFirstName(e.target.value)}
                  />
                  <Input
                    label="Last Name"
                    type="text"
                    value={lastName}
                    id="lastName"
                    placeholder="Okonkwo"
                    inputLength={40}
                    action={(e) => setLastName(e.target.value)}
                  />
                </div>

                <Input
                  label="E-mail"
                  type="email"
                  value={email}
                  id="email"
                  placeholder="Adacc13@gmail.com"
                  action={(e) => setEmail(e.target.value)}
                />

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1 space-y-2 relative">
                    <label htmlFor="learner_type" className="block text-sm font-semibold text-navy-900 mb-2">
                      I am a
                    </label>
                    <select
                      id="learner_type"
                      value={learnerType}
                      onChange={(e) => setLearnerType(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition appearance-none pr-8"
                    >
                      {userTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-[2.5rem] h-5 w-5 text-[#000066] pointer-events-none" />
                  </div>
                  <div className="flex-1 space-y-2 relative">
                    <label htmlFor="discipline" className="block text-sm font-semibold text-navy-900 mb-2">
                      Discipline / Field
                    </label>
                    <select
                      id="discipline"
                      value={discipline}
                      onChange={(e) => setDiscipline(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition appearance-none pr-8"
                    >
                      {disciplines.map((field) => (
                        <option key={field} value={field}>
                          {field}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-[2.5rem] h-5 w-5 text-[#000066] pointer-events-none" />
                  </div>
                </div>

                <Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  value={password}
                  id="password"
                  placeholder="............"
                  action={(e) => setPassword(e.target.value)}
                />

                <Input
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  showPassword={showConfirmPassword}
                  setShowPassword={setShowConfirmPassword}
                  value={confirmPassword}
                  id="confirmPassword"
                  placeholder="............"
                  action={(e) => setConfirmPassword(e.target.value)}
                />
              </>
            }
            additionalContent={
              <>
                <div className="flex items-center gap-3 py-2">
                  <input
                    id="terms_agree"
                    type="checkbox"
                    checked={agreedTerms}
                    onChange={() => setAgreedTerms(!agreedTerms)}
                    className="h-5 w-5 text-[#1D1B67] border-gray-300 rounded focus:ring-[#1D1B67]"
                  />
                  <label htmlFor="terms_agree" className="text-sm text-[#4B5563]">
                    I agree to the {" "}
                    <a href="#" className="font-semibold text-gray-800 hover:text-gray-950">
                      Terms of Service
                    </a>
                    {" "}
                    and {" "}
                    <a href="#" className="font-semibold text-gray-800 hover:text-gray-950">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                <Button
                  type="submit"
                  icon={<ArrowRight size={18} />}
                  className="text-white mb-2"
                  color="bg-[#000066] hover:bg-[#000044]"
                  btnText="Create Account"
                />

                <div className="text-center">
                  <Link to="/login" className=" text-sm text-gray-600">
                    Already have an account? {" "}
                    <span className="text-[#FF7A00] font-bold hover:underline">Sign In</span>
                  </Link>
                </div>
              </>
            }
          />
        }
      />
    </>
  );
};

export default SignUp;
