import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './shared/ui/LandingPage'
import LoginPage from './app/auth/LoginPage'
import SignUp from './app/auth/SignUp'
import EmailVerification from './app/auth/EmailVerification'
import ForgotPassword from './app/auth/ForgotPassword'
import SetNewPassword from './app/auth/SetNewPassword'
import NotFound from './shared/ui/NotFound'
import SettingsPage from './modules/admin/SettingsPage'
import ChangePassword from './modules/admin/ChangePassword'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/settings/change-password" element={<ChangePassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App