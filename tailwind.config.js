/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sandal: {
          50: "#f6f4f0",
          100: "#e9e1d8",
          200: "#d4c5b4",
          300: "#bca288",
          400: "#a68264",
          500: "#997359",
          600: "#835e4b",
          700: "#6a493e",
          800: "#5a3f39",
          900: "#4f3834",
          950: "#2c1d1c",
        },
        "silver-rust": {
          50: "#f9f8f7",
          100: "#f2efee",
          200: "#e8e3e0",
          300: "#cfc4be",
          400: "#bfb1aa",
          500: "#a7968c",
          600: "#907d72",
          700: "#77675e",
          800: "#645750",
          900: "#564c46",
          950: "#2c2623",
        },
        text: "#f0e4fe",
        background: "#6400fc",
        primary: "#ab71fb",
        secondary: "#a9057f",
        accent: "#f9248e",
      },
    },
  },
  plugins: [],
};
