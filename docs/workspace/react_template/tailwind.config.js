/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f8f5f1',
        sand: '#e8e1d9',
        taupe: '#d3ccc3',
        ivory: '#fffef9',
        coffee: '#5d4a41',
        mocha: '#8b7d74',
        charcoal: '#333333',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
