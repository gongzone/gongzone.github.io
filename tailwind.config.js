/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}',
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            strong: {
              color: theme('colors.amber.300'),
            },
            a: {
              color: theme('colors.blue.500'),
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: theme('colors.blue.600'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};
