import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./shared/ui/LandingPage";
import LoginPage from "./app/auth/LoginPage";
import SignUp from "./app/auth/SignUp";
import EmailVerification from "./app/auth/EmailVerification";
import ForgotPassword from "./app/auth/ForgotPassword";
import SetNewPassword from "./app/auth/SetNewPassword";
import NotFound from "./shared/ui/NotFound";
import SettingsPage from "./modules/admin/SettingsPage";
import ChangePassword from "./modules/admin/ChangePassword";
import HowItWorksPage from "./shared/ui/HowItWorksPage";
import AboutPage from "./shared/ui/AboutPage";
import Layout from "./shared/ui/Layout";
import ContactPage from "./shared/ui/ContactPage";

// Learner layout & screens
import LearnerLayout from "./shared/layouts-new/LearnerLayout";
import Dashboard from "./app/learner-pages/Dashboard";
import MyCourses from "./app/learner-pages/MyCourses";
import CourseCatalog from "./app/learner-pages/CourseCatalog";
import CourseDetails from "./app/learner-pages/CourseDetails";
import LessonPage from "./app/learner-pages/LessonPage";
import AssignmentList from "./app/learner-pages/AssignmentList";
import AssignmentDetails from "./app/learner-pages/AssignmentDetails";
import AssignmentSubmit from "./app/learner-pages/AssignmentSubmit";
import Progress from "./app/learner-pages/Progress";
import Discussion from "./app/learner-pages/Discussion";
import Notifications from "./app/learner-pages/Notifications";
import MyTeam from "./app/learner-pages/MyTeam";
import TeamAllocation from "./app/learner-pages/TeamAllocation";
import Certificate from "./app/learner-pages/Certificate";
import Profile from "./app/learner-pages/Profile";
import Settings from "./app/learner-pages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public / marketing */}
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/settings/change-password" element={<ChangePassword />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />

        {/* Learner portal */}
        <Route path="/learner" element={<LearnerLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="catalog" element={<CourseCatalog />} />
          <Route path="catalog/:id" element={<CourseDetails />} />
          <Route path="catalog/:id/lesson" element={<LessonPage />} />
          <Route path="assignments" element={<AssignmentList />} />
          <Route path="assignments/details" element={<AssignmentDetails />} />
          <Route path="assignments/submit" element={<AssignmentSubmit />} />
          <Route path="progress" element={<Progress />} />
          <Route path="discussion" element={<Discussion />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="my-team" element={<MyTeam />} />
          <Route path="my-team/allocation" element={<TeamAllocation />} />
          <Route path="certificates" element={<Certificate />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
