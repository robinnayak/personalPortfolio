import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// predefined prompts with Google Project
const predefinedPrompts = [
  { text: "👋 Say Hello", value: "Hello" },
  { text: "💻 My Projects", value: "Show me your projects" },
  { text: "🛠 Tech Stack", value: "What technologies do you use?" },
  { text: "📈 SEO Experience", value: "Tell me about your SEO work" },
  { text: "📱 Contact Info", value: "How can I contact you?" },
  { text: "👤 About Me", value: "Tell me about yourself" }
];


const responses = {
  hello: {
    patterns: ['hello', 'hi', 'hey', 'greetings'],
    response: "Hello! I'm Robin's portfolio assistant. How can I help you today? Feel free to click on the suggestion buttons below or type your question."
  },
  projects: {
    patterns: ['project', 'work', 'portfolio', 'built'],
    response: `Featured Projects:
• Robin SPT - Personal portfolio (React JS)
  🌐 https://robinspt.com/

• Movies HD Now Hub - Movie streaming platform
  🌐 https://moviesnowhdhub.robinspt.com/

• Meme Generator - Creative meme creation tool
  🌐 https://memegen.robinnayak.com.np/

• Granny's and Mom's Kitchen - Recipe sharing platform
  🛠 React JS & Django

• Room Rent Finder - Kathmandu rental solution
  🛠 React JS & Django | 🚀 Hosted on Railway & Vercel

• Summit Hospital - Healthcare UI design

• Disha - Vehicle booking app
  📱 React Native & Django`
  },
  skills: {
    patterns: ['skills', 'technical', 'technologies', 'tech stack'],
    response: `Technical Skills:
• Frontend: React JS, HTML5, CSS3, JavaScript
• Mobile: React Native
• Backend: Django, Python
• Databases: PostgreSQL, SQLite
• DevOps: Railway, Vercel
• SEO & Analytics: Google Analytics, Search Console
• Tools: Git, VS Code, Postman`
  },
  contact: {
    patterns: ['contact', 'email', 'reach', 'connect'],
    response: `Contact Details:
📧 Email: robinnayak86@gmail.com
📱 WhatsApp: +977 9815823670
🔗 LinkedIn: https://www.linkedin.com/in/robin-nayak-1093371b6/`
  },
  about: {
    patterns: ['about', 'yourself', 'background', 'who'],
    response: `Professional Background:
• 3-month SEO internship at Oreon (London-based)
• Specialized in web development with React & Django
• Experienced in full-stack development
• Proficient in SEO optimization
• Skilled in Google Analytics implementation
• Focused on building user-centric applications`
  },
  error: {
    response: "I'm having trouble understanding that. Please try clicking one of the suggestion buttons below or rephrase your question."
  }
};

const findResponse = (input) => {
  const lowercaseInput = input.toLowerCase();
  
  for (const [category, data] of Object.entries(responses)) {
    if (category === 'error') continue;
    if (data.patterns?.some(pattern => lowercaseInput.includes(pattern))) {
      return data.response;
    }
  }
  
  return responses.error.response;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Robin's portfolio assistant. How can I help you? Click on the suggestions below or type your question.",
      isBot: true,
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  // const { isDarkMode } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handlePromptClick = (promptValue) => {
    handleUserInput(promptValue);
  };

  const handleUserInput = (input) => {
    // Add user message
    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    // Get bot response
    try {
      const botResponse = { text: findResponse(input), isBot: true };
      setTimeout(() => {
        setMessages(prev => [...prev, botResponse]);
      }, 500);
    } catch (error) {
      const errorResponse = { 
        text: "I encountered an error. Please try using the suggestion buttons below.", 
        isBot: true 
      };
      setTimeout(() => {
        setMessages(prev => [...prev, errorResponse]);
      }, 500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    handleUserInput(inputValue);
    setInputValue('');
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 p-4 rounded-full shadow-xl bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white z-50 hover:shadow-2xl transition-all duration-300"
      >
        {isOpen ? '×' : '💬'}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 w-80 h-[500px] rounded-xl shadow-2xl overflow-hidden z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-700 dark:to-gray-800 text-white">
              <h3 className="font-bold text-lg">Robin's AI Assistant</h3>
            </div>

            <div className="h-[340px] overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
                        : 'bg-blue-500 text-white'
                    } ${
                      !message.isBot ? 'rounded-br-none' : 'rounded-bl-none'
                    } shadow-sm`}
                  >
                    {message.text.split('\n').map((line, i) => (
                      <p key={i} className="mb-2 last:mb-0">
                        {line}
                        {line.includes('LinkedIn') && (
                          <a
                            href="https://www.linkedin.com/in/robin-nayak-1093371b6/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-blue-500 hover:text-blue-400 dark:text-blue-300"
                          >
                            <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4 inline" />
                          </a>
                        )}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Predefined prompts */}
            <div className="p-2 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <div className="flex flex-wrap gap-2">
                {predefinedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => handlePromptClick(prompt.value)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md"
                  >
                    {prompt.text}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-md"
                >
                  Send
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
