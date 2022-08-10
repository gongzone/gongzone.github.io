/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '520px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Noto Sans KR', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
