/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/App.jsx",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { primary: "#252422", secondary: "#ccc5b9", tertiary: "#eb5e28" },
      backgroundImage: {
        login: "url('./src/assets/Login.jpg')",
        register: "url('./src/assets/Register.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
