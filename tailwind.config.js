/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1100px'
    },
    extend: {
      fontFamily: {
        'serif': ['Bellefair', 'serif'],
        'sanCondensed': ['Barlow Condensed', 'sans-serif'],
        'san': ['Barlow', 'sans-serif'],
      },
      backgroundImage: {
        'desktop': "url('../public/assets/home/background-home-desktop.jpg')",
        'tablet': "url('../public/assets/home/background-home-tablet.jpg')",
        'mobile': "url('../public/assets/home/background-home-mobile.jpg')"
      },
    },
  },
  plugins: [],
}
