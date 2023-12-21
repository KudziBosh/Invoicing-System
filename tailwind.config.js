/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}","./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'login': "url('./assets/670.jpg')",
        'reg': "url('./assets/Happiness.png')",
        'fp': "url('./assets/Snowstorm.png')",
      }
    },screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1080px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
