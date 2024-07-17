/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBrown: '#8b4513',  // Marrón personalizado
        customTan: '#D2B48C',    // Tan personalizado
        customDarkBrown: '#A52A2A', 
    },
    },
  },
  plugins: [],
}

