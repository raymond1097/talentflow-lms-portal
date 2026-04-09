import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <div 
        className="relative max-w-7xl mx-auto overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/cta.jpg')` 
        }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center md:py-28">
          <h2 className="text-3xl font-bold tracking-tight text-blue-900 md:text-5xl">
            Ready to start your learning journey?
          </h2>
          
          <p className="mt-4 text-sm font-medium text-blue-800 md:text-base">
            Join 50+ interns already using TalentFlow at Trueminds Innovations.
          </p>

          <Link to="/signup" className="mt-8 flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-orange-600 active:scale-95 shadow-lg shadow-orange-500/30">
            Create New Account
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;