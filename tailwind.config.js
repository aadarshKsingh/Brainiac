/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",],
  
  theme: {
    fontFamily:{
      'sans': ['Albert Sans', 'sans-serif'],
      'sans-serif': ['Montserrat', 'sans-serif']
    },
    extend: {
      fontFamily:{
        'albert' : ['Albert Sans', 'sans-serif'],
        'montserrat' : ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

