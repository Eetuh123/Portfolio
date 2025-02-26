/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
        fontFamily: {
            inter: ['var(--font-inter)'],
            raleway: ['var(--font-raleway)']
        },
        colors: {
          'white': '#F9F6EE',
          'dark': '#232121',
      },
    },
  },
  plugins: [],
};