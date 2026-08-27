/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eldosh: {
          red: '#D60000',
          'red-hover': '#B80000',
          'red-dark': '#8A0000',
          'red-light': '#FF3333',
          dark: '#111111',
          graphite: '#1B1B1B',
          charcoal: '#222222',
          border: '#2C2C2C',
          gray: '#777777',
          'light-gray': '#F2F2F2',
          muted: '#9E9E9E',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Montserrat"', '"Inter"', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      boxShadow: {
        'subtle': '0 4px 20px rgba(0, 0, 0, 0.4)',
        'red-glow': '0 0 25px rgba(214, 0, 0, 0.25)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
