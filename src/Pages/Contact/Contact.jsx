import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css"; // custom styles for fonts/animation

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const emailAddress = "riteshkumarworkspace@gmail.com";
  const whatsappNumber = "919517424951";


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    const { name, email, message } = formData;
    if (!message) return toast.error("Please enter a message before sending.");
    const text = `Hello! My name is ${name || "Anonymous"}. My email is ${email || "Not provided"}. Message: ${message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  const sendEmail = () => {
    const { name, email, message } = formData;
    if (!message) return toast.error("Please enter a message before sending.");
    const subject = "Contact from Portfolio Website";
    const body = `Hello! My name is ${name || "Anonymous"}.
Email: ${email || "Not provided"}.
\nMessage:\n${message}`;
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening email client...");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4 sm:px-8 font-inter">
      <Navbar />
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="max-w-5xl mx-auto mt-10 border-[5px] border-gray-200 rounded-xl shadow-xl bg-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-200 gap-10 items-center">
          {/* Left: Contact Form */}
          <div className="pr-0 md:pr-6">
            <h3 className="text-3xl font-bold mb-4 text-amber-600">Contact Me</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name (optional)</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring-amber-400 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email (optional)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring-amber-400 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2 h-24 resize-none focus:ring-amber-400 focus:outline-none"
                  placeholder="How can I help you? Type your message here..."
                  required
                />
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="bg-amber-400 hover:bg-amber-500 text-white py-2 px-4 rounded-full font-semibold transition"
                >
                  Send via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={sendEmail}
                  className="bg-amber-400 hover:bg-amber-500 text-white py-2 px-4 rounded-full font-semibold transition"
                >
                  Send via Email
                </button>
              </div>
            </form>
          </div>

          {/* Right: QR Code */}
          <div className="pt-8 md:pt-0 md:pl-6 text-center">
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Scan QR to WhatsApp Chat</h4>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/${whatsappNumber}`}
              alt="WhatsApp QR Code"
              className="mx-auto transition-transform hover:scale-110 duration-300"
            />
            <p className="text-sm text-gray-500 mt-2">You’ll be redirected to WhatsApp</p>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center gap-6 text-gray-700 text-2xl">
        <a
          href="https://github.com/Riteshmaurya1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-transform hover:scale-110 duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ritesh-kumar-69a50a25b"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-transform hover:scale-110 duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://portfolio-ritesh-kumar.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-600 transition-transform hover:scale-110 duration-200"
        >
          <FaGlobe />
        </a>
      </div>
    </div>
  );
};

export default Contact;