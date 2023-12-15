/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
        extend: {
              colors: {
                    mainColor: "#3273b7",
                    mainDark: "#173b62",
              }
        },
  },
  plugins: [],
}