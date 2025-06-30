/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",  "./App.js"], 
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      fontFamily: {
        thin: ["Outfit-Thin"],
        extralight: ["Outfit-ExtraLight"],
        light: ["Outfit-Light"],
        outfit: ["Outfit-Regular"],
        medium: ["Outfit-Medium"],
        semibold: ["Outfit-SemiBold"],
        bold: ["Outfit-Bold"],
        extrabold: ["Outfit-ExtraBold"],
        black: ["Outfit-Black"],
      }
    },
  },
  plugins: [],
};
