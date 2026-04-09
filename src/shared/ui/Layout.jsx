import NavBar from "../../app/public/components/NavBar";
import Footer from "../../app/public/components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Main content */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default Layout;