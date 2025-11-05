/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        'work-bold': ['WorkSans-Bold', 'sans-serif'],
        'work-medium': ['WorkSans-Medium', 'sans-serif'],
        'work-light': ['WorkSans-Light', 'sans-serif']
      }
    },
  },
  plugins: [],
}

