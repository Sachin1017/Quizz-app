/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '280px',
      // => @media (min-width: 280px) { ... }

      md: '640px',
      // => @media (min-width: 640px) { ... }

      // lg: '768px',
      // => @media (min-width: 768px) { ... }

      // xl: '1024px',
      // => @media (min-width: 1024px) { ... }

      // '2xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies
  plugins: [require('@tailwindcss/forms')],
};
