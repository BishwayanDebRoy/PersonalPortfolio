/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#050816",
        primary: "#191414",
        // secondary: "#aaa6c3",
        secondary: "#373A40",
        // tertiary: "#151030",
        tertiary: "#E5E4E2",
        greenclr: "#1db954",
        greenlight: "#1ed760",
        onyx: "#353935",
        charcoal: "	#36454F",
        blackshade: "#1b1f23",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg_custom.png')",
      },
    },
  },
  plugins: [],
};