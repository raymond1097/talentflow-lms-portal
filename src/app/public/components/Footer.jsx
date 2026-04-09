import React from 'react';
import { Globe, AtSign, Share2 } from 'lucide-react';

const footerLinks = [
  {
    title: "PLATFORM",
    links: ["Features", "How It Works", "Course Catalog", "Certificates"],
  },
  {
    title: "ROLES",
    links: ["For Learners", "For Instructors", "For Admins"],
  },
  {
    title: "SUPPORT",
    links: ["Help Centre", "Contact Us", "FAQs"],
  },
  {
    title: "COMPANY",
    links: ["About TalentFlow", "Privacy Policy", "Terms of Service"],
  },
];

const Footer = () => {

  return (
    <footer id="contact" className="bg-white pt-16 pb-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo and Brand Info */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              {/* Mock Logo Icon */}
              <img src="/logo.png" alt="TalentFlow Logo" className='w-32'/>
            </div>
            <p className="text-blue-900/80 text-sm leading-relaxed mb-8 max-w-xs">
              The official learning management platform for Trueminds Innovations internship programme.
            </p>
            <div className="flex gap-6 text-blue-900/70 pt-4">
              <a href="#" aria-label="Website" className="hover:text-orange-500 transition-colors"><Globe size={20} /></a>
              <a href="#" aria-label="Email" className="hover:text-orange-500 transition-colors"><AtSign size={20} /></a>
              <a href="#" aria-label="Share" className="hover:text-orange-500 transition-colors"><Share2 size={20} /></a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="md:col-span-8 lg:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-bold text-blue-900 mb-6 tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a 
                        href="#" 
                        className="text-sm text-blue-900/70 hover:text-orange-500 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-blue-900/60">
            &copy; {new Date().getFullYear()} TalentFlow Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-blue-900/60 hover:text-blue-900">Terms of Service</a>
            <a href="#" className="text-xs text-blue-900/60 hover:text-blue-900">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;