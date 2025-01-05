import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

// Predefined prompts that users can click
const predefinedPrompts = [
  { text: "👋 Say Hello", value: "Hello" },
  { text: "💼 View Projects", value: "What projects have you worked on?" },
  { text: "🛠 Technical Skills", value: "What are your technical skills?" },
  { text: "📧 Contact Info", value: "How can I contact you?" },
  { text: "👤 About You", value: "Tell me about yourself" }
];

// Simple responses for each category
const responses = {
  hello: {
    patterns: ['hello', 'hi', 'hey', 'greetings'],
    response: "Hello! I'm Robin's portfolio assistant. How can I help you today? Feel free to click on the suggestion buttons below or type your question."
  },
  projects: {
    patterns: ['project', 'work', 'portfolio', 'built'],
    response: "I've worked on several projects including:\n• Web applications using React.js\n• E-commerce platforms\n• Portfolio websites\n• AI-based applications\nWhich one would you like to know more about?"
  },
  skills: {
    patterns: ['skills', 'technical', 'technologies', 'tech stack'],
    response: "My technical skills include:\n• Frontend: React.js, JavaScript, HTML/CSS\n• Backend: Node.js, Express\n• Database: MongoDB, MySQL\n• Tools: Git, VS Code\nWould you like specific details about any of these?"
  },
  contact: {
    patterns: ['contact', 'email', 'reach', 'connect'],
    response: "You can reach me through:\n• Email: [your-email]\n• LinkedIn: [your-linkedin]\n• Or use the contact form on this website!"
  },
  about: {
    patterns: ['about', 'yourself', 'background', 'who'],
    response: "I'm a Full Stack Developer passionate about creating web applications. I specialize in React.js and modern web technologies. Would you like to know more about my experience or projects?"
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
  const { isDarkMode } = useTheme();

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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 p-4 rounded-full shadow-lg bg-blue-600 dark:bg-blue-500 text-white z-50"
      >
        {isOpen ? '×' : '💬'}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-80 h-[500px] rounded-lg shadow-xl overflow-hidden z-50 bg-white dark:bg-gray-800"
          >
            <div className="p-4 bg-blue-600 dark:bg-gray-700 text-white">
              <h3 className="font-bold">Portfolio Assistant</h3>
            </div>

            <div className="h-[340px] overflow-y-auto p-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg whitespace-pre-wrap ${
                      message.isBot
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                        : 'bg-blue-500 text-white'
                    }`}
                  >
                    {message.text}
                  </span>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Predefined prompts */}
            <div className="p-2 border-t dark:border-gray-700 max-h-[80px] overflow-y-auto">
              <div className="flex flex-wrap gap-2">
                {predefinedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => handlePromptClick(prompt.value)}
                    className="text-sm px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    {prompt.text}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 rounded-md border dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-600 dark:bg-blue-500 text-white"
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
