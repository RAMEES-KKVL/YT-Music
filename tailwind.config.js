/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'rgb(35, 35, 35)',
        buttonBgc: "rgb(35, 35, 35)",
      },
    },
  },
  plugins: [],
}
