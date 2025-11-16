/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2463',
        secondary: '#006B7D',
        accent: '#F4A261',
      },
    },
  },
  plugins: [],
}
