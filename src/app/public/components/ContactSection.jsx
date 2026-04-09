import { useState } from "react";
import Input from "../../../shared/form/Input";
import Button from "../../../shared/form/Button"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-7xl mx-auto font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Info */}
        <div className="text-center space-y-10">
          <h2 className="text-3xl font-bold text-blue-900">Connect With Us</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-blue-800 text-lg">Email Us</h3>
              <p className="text-gray-600 text-sm">support@hiredeygo.com</p>
              <p className="text-gray-600 text-sm">
                partnerships@hiredeygo.com
              </p>
            </div>

            <div>
              <h3 className="font-bold text-blue-800 text-lg">Support Hours</h3>
              <p className="text-gray-600 text-sm">
                Monday - Friday: 9:00 AM - 6:00 PM WAT
              </p>
              <p className="text-gray-600 text-sm">
                Response Time : Within 24 hours
              </p>
            </div>

            <div>
              <h3 className="font-bold text-blue-800 text-lg">Location</h3>
              <p className="text-gray-600 text-sm">Remote First Company</p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                label="Your Name"
                type="text"
                value={formData.name}
                placeholder="Name"
                action={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Input
                label="Email Address"
                type="email"
                value={formData.email}
                placeholder="you@example.com"
                action={handleChange}
               />
            </div>

            <div className="space-y-2">
              <Input
                label="Subject"
                type="subject"
                value={formData.subject}
                placeholder="How can we help you?"
                action={handleChange}
               />
            </div>

            <div className="space-y-2">
              <label className="block font-semibold text-gray-800">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us more about your inquiry..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                required
              ></textarea>
            </div>

            <div className="flex justify-center md:justify-end mt-4">
              <Button type="submit" btnText="Send Message" className="text-white" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
