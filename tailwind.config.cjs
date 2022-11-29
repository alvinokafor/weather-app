/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "san-serif"],
      },
      backgroundImage: {
        "default-bg": "url('/assets/backgrounds/sky.webp')",
      },
    },
  },
  plugins: [],
};
