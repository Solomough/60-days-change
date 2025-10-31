/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0044CC',
        light: '#E5F0FF'
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 68, 204, 0.6)'
      }
    }
  },
  plugins: []
}
