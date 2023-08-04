/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //If you're using the src/ directory
    "./src/**/*.{js,ts,jsx,tsx}",

    //If you're using the default paths:
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.463rem',
      '3xl': '1.553rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')
  ],
}