import React, { useState } from "react";
import Input from "../../../shared/form/Input";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribing:", email);
  };

  return (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          <span className="text-[#000066]">Join Our </span>
          <span className="text-[#FF7F00]">Newsletter</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          Get weekly career tips, job search strategies, and industry insights
          delivered straight to your inbox
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
          <div className="flex items-center border border-gray-300 rounded-lg p-1 focus-within:ring-2 focus-within:ring-orange-500 transition-all shadow-sm">
            <Input
              type="email"
              value={email}
              placeholder="Enter Your Email"
              className="outline-none text-left placeholder-gary-400"
              action={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#FF7F00] hover:bg-[#e67300] text-white font-bold py-2 px-6 md:px-10 rounded-md transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
