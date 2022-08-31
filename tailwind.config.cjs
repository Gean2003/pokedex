/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
	  colors:{
	      'red': '#FE1936',
	      'red-button': '#D93F3F',
	      'red-tarjet': '#DD1A1A'
	  }
      },
    
  },
  plugins: [],
}
