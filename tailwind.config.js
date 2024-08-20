/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideInFromLeft: "slideInFromLeft 1s ease-out forwards",
      },
      base: "/Portafolio/", // Ajusta esto según el nombre de tu repositorio
      build: {
        outDir: "dist", // Asegúrate de que el directorio de salida sea 'dist'
        assetsDir: "assets",
      },
    },
  },
  plugins: [],
};
