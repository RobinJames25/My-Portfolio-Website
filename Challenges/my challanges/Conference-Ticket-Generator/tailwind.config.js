/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, #ff7e5f, #feb47b)',
      },
      colors: {
        'neutral-0': 'hsl(0, 0%, 100%)',
        'neutral-500': 'hsl(245, 15%, 58%)',
        'neutral-700-op-low': 'hsla(245, 19%, 35%, 0.406)',
        'orange-500': 'hsl(7, 88%, 67%)',
      },
      fontWeight: {
        800: '800',
      },
      fontSize: {
        clamp: 'clamp(1rem, 3vw + 0.5rem, 4vw)',
      },
    },
  },
  plugins: [],
};
