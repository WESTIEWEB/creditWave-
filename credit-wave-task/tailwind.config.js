/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", 
    "./src/**/*.{js,jsx,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': {
          'max': '480px'
        },
        'sm': {
          'max': '640px'
        },
        'md': {
          'max': '768px'
        },
        'lg': {
          'max': '1024px'
        },
        'xl': {
          'max': '1280px'
        },
        '2xl': {
          'max': '1536px'
        },
        'xxl': {
          'min': '1536px'
        }
      },
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}

