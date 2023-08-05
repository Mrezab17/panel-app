/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/App.jsx",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { primary: "#0d1b2a", secondary: "#e0e1dd", tertiary: "#778da9" },
      backgroundImage: {
        login: "url('./src/assets/Login.jpg')",
        register: "url('./src/assets/Register.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
