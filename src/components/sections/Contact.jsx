import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player"; // Lottie-react alternative
import contactAnimation from "../../assests/contact-lattie.json";

const ContactForm = ({ bg_color }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [showFlash, setShowFlash] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponseMessage(
      "Thanks For trying Contact Form. This site is not connected to any backend, so your message will not be sent. Please use WhatsApp or manually send an email to robinnayak86@gmail.com for further communication."
    );
    setShowFlash(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setShowFlash(false), 5000);
  };

  return (
    <div
      className={`max-w-full mx-auto p-6 ${bg_color} shadow-lg rounded-lg flex flex-col md:flex-row items-center gap-8 mb-5`}
    >
      {/* Lottie Animation Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Player
          autoplay
          loop
          src={contactAnimation}
          style={{ height: "400px", width: "400px" }}
        />
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-light mb-4">
          Contact{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(139,92,246,0.8)] font-bold">
            Robin Nayak
          </span>
        </h1>
        <p className="text-light mb-6">
          Thank you for visiting Robin Nayak's portfolio! Please fill out the
          contact form below to get in touch for any inquiries, collaborations, or feedback.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-light mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-light mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-light">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        {/* Flash Message */}
        {showFlash && (
          <div className="mt-4 text-center bg-yellow-200 text-yellow-700 p-3 rounded-lg shadow">
            {responseMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
