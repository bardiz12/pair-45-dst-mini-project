/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'netflix-dark': '#201F1F',
        'white': '#FFFFFF',
        'netflix-red' : '#E50913',
        'netflix-blue' : '#040B16'
      },
    },
  },
  plugins: [],
  safelist: [
    'lg:container',
    'sm:container',
    '3xl:container',
  ]
}
