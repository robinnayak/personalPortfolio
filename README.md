# Modern React Portfolio

A modern, responsive portfolio website built with React.js, featuring an interactive AI game, dark/light theme support, and a contact form.

## Features

- 🎮 Interactive AI-based Rock Paper Scissors game
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- ✉️ Contact form with EmailJS integration
- 🎨 Modern UI with animations
- 🔍 SEO optimized

## Technologies Used

- React.js
- Tailwind CSS
- Framer Motion
- EmailJS
- React Scroll

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_USER_ID=your_user_id
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Game/        # AI game components
│   └── Contact/     # Contact form components
├── pages/           # Main pages
├── context/         # Theme context
├── assets/          # Static assets
└── styles/          # Global styles
```

## SEO Optimization

The portfolio is optimized for search engines with:
- Semantic HTML tags
- Meta tags for SEO
- Open Graph tags for social sharing
- Proper heading structure
- Alt attributes for images
- Fast loading times

## Contact Form

The contact form uses EmailJS for sending emails without a backend. Make sure to:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email template
3. Add your credentials to the `.env` file

## Contributing

Feel free to submit issues and enhancement requests!
