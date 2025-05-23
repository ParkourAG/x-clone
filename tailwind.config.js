/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./css/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // You can change 'inter' to any name
      },
    },
  },
  plugins: [],
}

