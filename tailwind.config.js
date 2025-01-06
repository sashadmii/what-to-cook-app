/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sansFont: ['Nunito Sans'],
      serifFont: ['DM Serif Display'],
    },
    colors: {
      cocoa: '#7D5A50',
      cocoaLight: '#a38981',
      caramel: '#B4846C',
      plaster: '#E5B299',
      sand: '#FFF2E1',
    },
    extend: {},
    screens: {
      sm: '320px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [],
};
