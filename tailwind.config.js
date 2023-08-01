/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/App.jsx"],
  theme: {
    extend: {
      colors: { primary: "#0d1b2a", secondary: "#e0e1dd", tertiary: "#778da9" },
    },
  },
  plugins: [],
};
