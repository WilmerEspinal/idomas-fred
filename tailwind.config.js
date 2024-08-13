/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-teal': '#02735E',
        'custom-teal2': '#014040',
        

      },
    },
  },
  plugins: [],
}

