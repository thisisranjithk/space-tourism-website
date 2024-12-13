/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#D0D6F9",
      },
      backgroundImage: {
        homeDesktop: "url('/assets/home/background-home-desktop.jpg')",
        homeTablet: "url('/assets/home/background-home-tablet.jpg')",
        homeMobile: "url('/assets/home/background-home-mobile.jpg')",
        destinationDesktop:
          "url('/assets/destination/background-destination-desktop.jpg')",
        destinationTablet:
          "url('/assets/destination/background-destination-tablet.jpg')",
        destinationMobile:
          "url('/assets/destination/background-destination-mobile.jpg')",
      },
      fontFamily: {
        sans: ["Bellefair", "serif"],
        barlowCondense: ["Barlow Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
