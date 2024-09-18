/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cloud-pattern': "url('/assets/images/clouds.jpg')",
        'moon-pattern': "url('/assets/images/night.jpg')"
      }
    },
  },
  plugins: [],
}

