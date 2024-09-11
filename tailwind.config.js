/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cloud-pattern': "url('/assets/images/clouds.jpg')",
      }
    },
  },
  plugins: [],
}

