/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens: {
    //   'xs': '320px',
    //   'ms':'375px',
    //   'sm':'425px',
    //   'md':'768px',
    //   'lg':'1024px',
    //   'xl':'1440px',
    //   
    // },  
    screens: {
      'xs': '320px',
      'ms':'375px',
      'sm':'425px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1440px',
      '2xl':'2560px',
     
    },

   
    extend: {},
  },
  plugins: [],
}