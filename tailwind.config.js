/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4d78f9",

          "secondary": "#fca1d8",

          "accent": "#ef99e4",

          "neutral": "#2B2D3B",

          "base-100": "#DFDFEC",

          "info": "#99BCEB",

          "success": "#5AD8BB",

          "warning": "#934F0B",

          "error": "#DF3A6B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
