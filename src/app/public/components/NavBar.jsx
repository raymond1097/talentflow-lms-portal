import { Menu, X } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../../lib/utils";

const NavBar = () => {
  const navItems = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "How It Works", path: "/how-it-works" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ],
    [],
  );

  const location = useLocation();

  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(!isHome);
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll effect (only visual now)
  useEffect(() => {
    setIsScrolled(!isHome);

    if (!isHome) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-40 flex items-center justify-between px-8 transition-all duration-300 border-b border-gray-300",
        isScrolled
          ? "py-3 bg-[#EAEAEA] shadow-md"
          : "py-4 bg-[#EAEAEA] shadow-sm",
      )}
    >
      {/* Logo */}
      <div className="flex-1 flex justify-start">
        <Link to="/" className="z-50 shrink-0">
          <img src="/logo.png" alt="Logo" className="w-28 md:w-30" />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center justify-center gap-12 text-neutral-800 font-medium">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "transition-colors duration-200 hover:text-[#FF7A18]",
              location.pathname === item.path && "text-[#FF7A18]",
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Right side */}
      <div className="flex-1 flex justify-end items-center gap-4">
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 border-2 border-[#0a1445] text-[#0a1445] font-bold rounded-lg hover:bg-[#0a1445] hover:text-white transition-all shadow-md"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-[#ff7a00] text-white font-bold rounded-lg hover:bg-[#e66e00] transition-all shadow-md"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden p-2 text-neutral-900 z-50"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-28 px-10 transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col space-y-8 text-xl font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                location.pathname === item.path
                  ? "text-[#FF7A18]"
                  : "text-neutral-900",
              )}
            >
              {item.name}
            </Link>
          ))}

          <div className="flex flex-col gap-4">
            <Link
              to="/login"
              className="w-full py-3 border-2 border-[#0a1445] text-[#0a1445] font-bold rounded-lg text-center"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="w-full py-3 bg-[#ff7a00] text-white font-bold rounded-lg text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
