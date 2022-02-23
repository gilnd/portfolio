const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.purple[500],
        spotify: '#1DB954'
      },
      zIndex: {
        '-10': '-10',
      },
      keyframes: {
        'wiggle': {
        '0%, 100%': { transform: 'rotate(5deg)', 'transform-origin': 'right bottom' },
        '50%': { transform: 'rotate(30deg)', 'transform-origin': 'right bottom' },
        },
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'spin-vinyl': 'spin 2s linear infinite',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
