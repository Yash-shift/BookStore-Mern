/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary':'#FFCE1A',
        'secondary':'#0D0842',
        'blackBG':'#F3F3F3',
        'Favourite':'#FF5841',
        
      },
      fontFamily: {
        'primary':["M PLUS Rounded 1c", 'sans-serif'],
        'secondary':["Nunito", 'sans-serif']
      },
    },
  },
  plugins: [],
}