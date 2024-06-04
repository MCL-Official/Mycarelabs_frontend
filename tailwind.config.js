/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'custom': '1440px', // You can adjust this value as needed
      },
    },

    
  },
  plugins: [],
}