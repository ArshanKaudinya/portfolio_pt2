/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        livvic: ['"Livvic"', 'sans-serif'],
      },
      keyframes: {
        pearlGradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      },
      animation: {
        pearlGradient: 'pearlGradient 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
