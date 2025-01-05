import React, { useState, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import contactAnimation from "../../assests/contact-lattie.json";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

const Contact = ({ bg_color }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [showFlash, setShowFlash] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setResponseMessage("Thank you for your message! I'll get back to you soon.");
        setFormData({ from_name: "", reply_to: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Email error:', error);
      setResponseMessage(
        "Thanks for trying to contact me. Currently, the email service is not working. Please send an email directly to robinnayak86@gmail.com"
      );
    } finally {
      setShowFlash(true);
      setIsLoading(false);
      setTimeout(() => setShowFlash(false), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
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
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Contact{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(139,92,246,0.8)] font-bold">
            Robin Nayak
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Thank you for visiting Robin Nayak's portfolio! Please fill out the
          contact form below to get in touch for any inquiries, collaborations, or feedback.
        </p>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
              Email
            </label>
            <input
              type="email"
              name="reply_to"
              value={formData.reply_to}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-colors ${
              isLoading 
                ? 'opacity-70 cursor-not-allowed' 
                : 'hover:bg-blue-600'
            }`}
          >
            {isLoading ? 'Sending...' : 'Submit'}
          </motion.button>
        </form>
        {/* Flash Message */}
        {showFlash && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-4 text-center p-3 rounded-lg shadow ${
              responseMessage.includes("error") || responseMessage.includes("not working")
                ? "bg-red-200 text-red-700"
                : "bg-green-200 text-green-700"
            }`}
          >
            {responseMessage}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
