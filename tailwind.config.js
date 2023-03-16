/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        blue:'#1d75de',
        dark:'#000000',
        light: '#ffffff',
        green: '#1db954',
        grayish: '#919496',
        darkgreen: '#056952',
        lightgreen: '#c5f0c9',
      }
      
    },
    // container:{
    //   center:true,
    //   padding:'15px',
      
    // },
  },
  plugins: [],
}
