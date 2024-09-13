/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily : {
    //   'body' : ['satoshi', 'sans-serif'],
    // },
    extend: {
      fontFamily:{
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'pink-white' : '#FDF3F1',
        'brown-pink' : '#FEBC94',
        'black-blue' : '#252b42',
        'red-brown' : '#A01A10',
        'green-white' : '#96BA7B',
        'grey-white' : '#737373'
      }
    },
  },
  plugins: [],
}