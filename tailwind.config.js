/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'honey-flower': {
          '50': '#fcf5ff',
          '100': '#f7e8ff',
          '200': '#f0d5ff',
          '300': '#e5b4fe',
          '400': '#d584fc',
          '500': '#c456f6',
          '600': '#b234e9',
          '700': '#9b23cd',
          '800': '#8221a8',
          '900': '#5a1872',
          '950': '#4b0764',
      },      
      }
    },
  },
  plugins: [],
}
