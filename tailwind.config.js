/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          manrope: ["Manrope", "sans-serif"]
      },
      colors: {
        'gray-925': '#ffffff1a',
        'black-925': '#262626',
        'black-975': '#212121bd',
        'white-75': '#B3B3B3',
        'white-25': '#F8F8F8',
      },
    },
  },
  plugins: [],
}
