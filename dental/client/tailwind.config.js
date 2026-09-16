export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B192C",     // Deep Navy / Midnight Blue
        secondary: "#F8FAFC",   // Clean White / Warm Off-White
        accent: "#059669",      // Premium Teal / Emerald
        champagne: "#F3E5AB",   // Soft Gold
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
