module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
        secondary: '#9333EA', // Example secondary color
        dark: '#1E1E2D', // Dark mode background
        light: '#F9FAFB', // Light mode background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example font family
      },
    },
  },
  plugins: [],
}