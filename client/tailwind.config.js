/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Paths to your template files
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1827A4',
      },
    },
  },
  plugins: [],
}
