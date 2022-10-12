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
        'sans': ['Barlow', 'sans-serif'],
      },
      backgroundImage: {
        'desktop-home': "url('../public/assets/home/background-home-desktop.jpg')",
        'tablet-home': "url('../public/assets/home/background-home-tablet.jpg')",
        'mobile-home': "url('../public/assets/home/background-home-mobile.jpg')",
        'desktop-destination': "url('../public/assets/destination/background-destination-desktop.jpg')",
        'tablet-destination': "url('../public/assets/destination/background-destination-tablet.jpg')",
        'mobile-destination': "url('../public/assets/destination/background-destination-mobile.jpg')",
        'desktop-crew': "url('../public/assets/crew/background-crew-desktop.jpg')",
        'tablet-crew': "url('../public/assets/crew/background-crew-tablet.jpg')",
        'mobile-crew': "url('../public/assets/crew/background-crew-mobile.jpg')",
        'desktop-technology': "url('../public/assets/technology/background-technology-desktop.jpg')",
        'tablet-technology': "url('../public/assets/technology/background-technology-tablet.jpg')",
        'mobile-technology': "url('../public/assets/technology/background-technology-mobile.jpg')"
      },
    },
  },
  plugins: [],
}
