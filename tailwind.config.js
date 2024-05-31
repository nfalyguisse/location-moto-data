/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'ghost-white':"#F8F8FF",
        'primary-color':"#406adb",
        'custom-pink':"#ff4e6e",
        'dark-blue':"#0a1830",
        'light-blue':"#00ABE4"
      }
    },
  },
  plugins: [],
}
