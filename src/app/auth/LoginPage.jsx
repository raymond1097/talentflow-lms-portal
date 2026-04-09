import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../shared/form/Input";
import Form from "../../shared/form/Form";
import Button from "../../shared/form/Button";
import AuthPage from "./Auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUserLogin = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (email === "admin@gmail.com" && password === "password") {
        const fakeToken = "abc123"

        if (rememberMe) {
          localStorage.setItem("authToken", fakeToken);
        } else {
          sessionStorage.setItem("authToken", fakeToken);
        }
        navigate("/settings");
      } else {
        alert("Invalid email or password.");
      }

    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <>
      <AuthPage
        sectionImage="/login-img.jpg"
        children={
          <div className="w-full max-w-md space-y-8">
            <Form
              header="Welcome back"
              subText="Sign in to continue to TalentFlow"
              formContent={
                <>
                  <Input
                    label="E-mail Address"
                    type="email"
                    value={email}
                    id="email"
                    placeholder="Adacc13@gmail.com"
                    action={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    value={password}
                    id="password"
                    placeholder="............"
                    action={(e) => setPassword(e.target.value)}
                    icon={showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  />
                </>
              }
              additionalContent={
                <>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-gray-600">Remember me for 30 days</span>
                    </label>
                    <Link to="/forgot-password" className="font-bold text-indigo-900 hover:underline">
                      Forgot Password?
                    </Link>
                  </div>

                  <Button
                    action={handleUserLogin}
                    icon={<ArrowRight size={18} />}
                    className="text-white"
                    color="bg-[#000066] hover:bg-[#000044]"
                    btnText="Log in"
                  />
                </>
              }
            />

            <div className="relative flex items-center py-4">
              <div className="grow border-t border-gray-300"></div>
              <span className="shrink mx-4 text-gray-400 text-sm">or continue with</span>
              <div className="grow border-t border-gray-300"></div>
            </div>

            <div className="space-y-6">
              <Button
                className="bg-transparent hover:bg-gray-50 shadow-none border border-gray-300 text-gray-800 font-medium"
                iconUrl="https://www.svgrepo.com/show/475656/google-color.svg"
                btnText="Sign in with Google"
                action={() => console.log("Google Login")}
              />
              <Button
                className="bg-transparent hover:bg-gray-50 shadow-none border border-gray-300 text-gray-800 font-medium"
                iconUrl="https://www.svgrepo.com/show/511330/apple-fill.svg"
                btnText="Sign in with Apple"
                action={() => console.log("Apple Login")}
              />
            </div>

            <p className="text-center text-sm text-indigo-900 leading-relaxed px-4 pb-6">
              By continuing, you agree to our {" "}
              <a href="#" className="underline font-bold">
                Terms and Privacy Policy
              </a>
            </p>

            <div className="text-center">
              <Link to="/signup" className=" text-sm text-[#000066]">
                Don't have an account? {" "}
                <span className="text-[#000066] font-bold hover:underline">Sign Up</span>
              </Link>
            </div>
          </div>
        }
      />
    </>
  );
};

export default LoginPage;
