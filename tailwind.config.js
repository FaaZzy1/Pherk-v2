/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        germania: ['"Germania One"', 'cursive', 'sans-serif'],
        khmer: ['Siemreap', 'sans-serif'],
      },
    },
  },
  plugins: [],
}