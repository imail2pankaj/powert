/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0D1025",
        "learn-more": "#5BC29F",
        "service-list": "#242048",
      },
      backgroundImage: {
        home: 'url(/images/home-bg.png)',
        about: 'url(/images/about-bg.png)',
        services: 'url(/images/service-bg.png)',
      },
      borderColor: {
        hiring: "#5BC29F"
      },
      borderRadius: {
        "sm2": "4px"
      },
      fontSize: {
        "4-5xl": '2.813rem'
      },
    },
  },
  plugins: [],
}
