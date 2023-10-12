/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", 
    "./src/**/*.{js,jsx,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}

