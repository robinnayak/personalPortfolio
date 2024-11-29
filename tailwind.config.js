/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#92C3FB",
        "secondary": "#171F28",
        "danger": "#e74c3c",
        "success": "#1abc9c",
        "warning": "#f39c12",
        "info": "#2c3e50",
        "light": "#f7f7f7",
        "dark": "#333",
        "bgprimary": "#34465a",
        "bgcolor": "#f7f7f7",
        "glow":"#ba2525" //#171F28
      },
      
      animation: {
        "bounce": 'bounce 1s infinite',
        "pulse": 'pulse 2s infinite',
      },

    },
  },
  plugins: [],
};
