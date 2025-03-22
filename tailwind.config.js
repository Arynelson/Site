/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./style.css"], // Add paths to your files
  theme: {
    extend: {
      colors: {
        corPrimaria: "#5d415f", // color1
        corSecundaria: "#ffc130", // color2
        corTerciaria: "#fff2af", // color3
        corQuaternaria: "#7cb490", // color4
        corQuintaria: "#000000", // color5
        corQuintariaTexto: "#ffffff", // color5 text
      },
    },
  },
  plugins: [],
};

