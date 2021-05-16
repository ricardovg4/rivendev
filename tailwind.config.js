const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  // using jit will breack svgs for some reason
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Telegraf', ...defaultTheme.fontFamily.sans],
        serif: ['Telegraf', ...defaultTheme.fontFamily.serif]
      }
    }
  },

  variants: {
    extend: {}
  },
  plugins: []
};
