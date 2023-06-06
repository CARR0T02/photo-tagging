module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: {
          light: '#638bbb',
          DEFAULT: '#3e5775',
          dark: '#19232f',
        },
        primary: '#Dc6053',
        secondary: '#9B59B6',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
