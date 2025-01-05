import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useTheme } from '../../context/ThemeContext';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const { isDarkMode } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`max-w-md mx-auto p-6 rounded-lg shadow-lg ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full p-2 rounded-md border ${
              isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
            }`}
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full p-2 rounded-md border ${
              isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
            }`}
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className={`w-full p-2 rounded-md border ${
              isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
            }`}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={status === 'sending'}
          className={`w-full py-2 px-4 rounded-md ${
            isDarkMode
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white transition-colors`}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </motion.button>

        {status === 'success' && (
          <p className="text-green-500 text-center mt-4">
            Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-center mt-4">
            Error sending message. Please try again.
          </p>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
