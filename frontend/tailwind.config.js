/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    import('tailwind-scrollbar'),
    // Optionally include the "hide" variant for better control
    import('tailwind-scrollbar-hide'),
  ],
}