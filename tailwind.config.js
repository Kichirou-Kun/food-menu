/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"]
      },
      backgroundColor: {
        BODY_BG: "#FBF2FB",
        BOX_BG: "#D4A6D3",
        DARK_BLUE: "#21254A"
      },
      colors: {
        MAIN_COLOR: "#D4A6D3",
        TEXT_GRAY: "#B2B9C1",
        DARK_BLUE: "#21254A"
      }
    },
  },
  plugins: [],
}