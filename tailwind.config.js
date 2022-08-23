/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      silver: '#7C7B7B',
      bermuda: '#3D8168',
    },
    extend: {
      fontFamily: {
        libre: ["Libre Baskerville", "serif"]
      },
    },
  },
  plugins: [],
}
